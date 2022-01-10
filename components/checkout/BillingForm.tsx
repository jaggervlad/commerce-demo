import { useEffect, useState } from 'react';
import {
  LocaleListCountriesResponse,
  LocaleListSubdivisionsResponse,
} from '@chec/commerce.js/features/services';
import { commerce } from 'lib/commerce';
import { useFormContext, useWatch } from 'react-hook-form';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

import { useCheckoutState } from 'context/checkout';
import FormCheckbox from '../form/FormCheckbox';
import AddressFields from './AddressFields';
import { FormInput } from '../form';

const BillingForm: React.FC = () => {
  const { collects, id } = useCheckoutState();
  const { watch, setValue, clearErrors } = useFormContext();
  const [countries, setCountries] =
    useState<Partial<LocaleListCountriesResponse>>();
  const [subdivisions, setSubdivisions] =
    useState<Partial<LocaleListSubdivisionsResponse>>();
  const watchCountry = useWatch({
    name: 'billing.country',
  });
  const shipping = watch('shipping');

  useEffect(() => {
    fetchCountries(id);
  }, [id]);

  useEffect(() => {
    watchCountry && fetchSubdivisions(id, watchCountry);
  }, [watchCountry, id]);

  const fetchCountries = async (checkoutId: string) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutId
      );

      setCountries(countries);
    } catch (err) {
      // noop
    }
  };

  const fetchSubdivisions = async (checkoutId: string, country: string) => {
    try {
      const { subdivisions } =
        await commerce.services.localeListShippingSubdivisions(
          checkoutId,
          country
        );

      setSubdivisions(subdivisions);
    } catch (err) {
      // noop
    }
  };

  return (
    <div>
      <div className="border-t border-b border-gray-200 mt-10">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          Datos de facturación
        </h2>

        {collects?.shipping_address && (
          <FormCheckbox
            label="Usar datos de envio"
            name="billingIsShipping"
            onChange={({ target: { checked } }) =>
              checked && setValue('billing', shipping)
            }
          />
        )}

        <div className="space-y-4">
          <AddressFields
            prefix={'billing'}
            countries={countries}
            subdivisions={subdivisions}
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-gray-900 mt-6">Pago</h2>

        <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
          <FormInput
            className="col-span-4"
            type="email"
            name="customer.email"
            label="Correo Electronico"
            validation={{
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Ingresa un correo valido',
              },
            }}
            required
          />

          <div className="col-span-4">
            <label className="block text-sm font-medium text-gray-700">
              Numero de la Tarjeta
            </label>
            <div className="mt-1">
              <CardNumberElement className="bg-transparent p-[14px] block w-full border-gray-300 rounded-md shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>

          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700">
              Fecha de expiracion (MM/YY)
            </label>
            <div className="mt-1">
              <CardExpiryElement className="bg-transparent p-[14px] border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <div className="mt-1">
              <CardCvcElement className="bg-transparent p-[14px] border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
