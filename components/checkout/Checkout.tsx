import { useCartDispatch, useCartState } from 'context/cart';
import { useCheckoutDispatch, useCheckoutState } from 'context/checkout';
import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';
import { useElements, useStripe } from '@stripe/react-stripe-js';

import CheckoutSummary from './CheckoutSummary';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';
import Success from './Success';
import { useRouter } from 'next/router';

export interface CheckooutFormProps {
  shipping: {
    firstname: string;
    lastname: string;
    street: string;
    town_city: string;
    country: string;
    region: string;
  };
  billing: {
    firstname: string;
    lastname: string;
    street: string;
    town_city: string;
    country: string;
    region: string;
  };
  customer: {
    email: string;
  };
  fulfillment: {
    shipping_method: string;
  };
  stripe: string;
}

const Checkout: React.FC = () => {
  const { id: cartId } = useCartState();
  const router = useRouter();
  const { reset: resetCart } = useCartDispatch();
  const [order, setOrder] = useState();
  const methods = useForm<CheckooutFormProps>({
    shouldUnregister: false,
  });
  const { handleSubmit, setError } = methods;
  const {
    generateToken,
    setCurrentStep,
    nextStepFrom,
    setProcessing,
    capture,
    setError: setCheckoutError,
  } = useCheckoutDispatch();
  const { currentStep, id, live } = useCheckoutState();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    generateToken(cartId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartId]);

  const captureOrder = async (values: CheckooutFormProps) => {
    setProcessing(true);

    const {
      customer,
      shipping,
      billing: { firstname, lastname, region: county_state, ...billing },
      ...data
    } = values;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement('cardNumber'),
      billing_details: {
        name: `${firstname} ${lastname}`,
        email: customer.email,
      },
    });

    if (error) {
      console.error(error);
      setError('stripe', { type: 'manual', message: error.message });
      setProcessing(false);
      return;
    }

    const checkoutPayload = {
      ...data,
      customer: {
        ...customer,
        firstname,
        lastname,
      },
      ...(shipping && {
        shipping: {
          ...shipping,
          name: `${shipping.firstname} ${shipping.lastname}`,
        },
      }),
      billing: {
        ...billing,
        name: `${firstname} ${lastname}`,
        county_state,
      },
    };

    try {
      const newOrder = await capture({
        ...checkoutPayload,
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      });
      handleOrderSuccess(newOrder);
      setProcessing(false);
    } catch (res) {
      if (
        res.statusCode !== 402 ||
        res.data.error.type !== 'requires_verification'
      ) {
        setCheckoutError(res.data.error.message);
        setProcessing(false);
        return;
      }

      const { error, paymentIntent } = await stripe.handleCardAction(
        res.data.error.param
      );

      if (error) {
        setError('stripe', { type: 'manual', message: error.message });
        setProcessing(false);
        return;
      }

      try {
        const newOrder = await capture({
          ...checkoutPayload,
          payment: {
            gateway: 'stripe',
            stripe: {
              payment_intent_id: paymentIntent.id,
            },
          },
        });

        handleOrderSuccess(newOrder);
        setProcessing(false);
      } catch (error) {
        setError('stripe', { type: 'manual', message: error.message });
        setProcessing(false);
      }
    }
  };

  const handleOrderSuccess = (order: any) => {
    setOrder(order);
    setCurrentStep('success');
    resetCart();
  };

  const onSubmit: SubmitHandler<CheckooutFormProps> = (values) => {
    if (currentStep === 'billing') return captureOrder(values);

    return setCurrentStep(nextStepFrom(currentStep));
  };

  return (
    <div>
      {currentStep === 'success' && <Success {...order} />}

      <h2 className="sr-only">Checkout</h2>
      {!id ? (
        <div>Preparando método de pago</div>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          >
            {currentStep === 'shipping' && <ShippingForm />}
            {currentStep === 'billing' && <BillingForm />}
            {!order && <CheckoutSummary {...live} />}
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default Checkout;
