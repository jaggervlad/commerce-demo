import {
  LocaleListCountriesResponse,
  LocaleListSubdivisionsResponse,
} from '@chec/commerce.js/features/services';
import { useCheckoutDispatch, useCheckoutState } from 'context/checkout';
import { commerce } from 'lib/commerce';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import AddressFields from './AddressFields';
import { useDebounce } from 'use-debounce';
import { RadioGroup } from '@headlessui/react';
import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout';
import FormCheckbox from '../form/FormCheckbox';

const ShippingForm: React.FC = () => {
  const { id } = useCheckoutState();
  const { setShippingMethod } = useCheckoutDispatch();
  const [countries, setCountries] =
    useState<Partial<LocaleListCountriesResponse>>();
  const [subdivisions, setSubdivisions] =
    useState<Partial<LocaleListSubdivisionsResponse>>();
  const [shippingOptions, setShippingOptions] = useState<
    GetShippingOptionsResponse[]
  >([]);
  const { watch, setValue } = useFormContext();
  const [watchCountry] = useDebounce(watch('shipping.country'), 600);
  const watchSubdivision = watch('shipping.region');

  useEffect(() => {
    fetchContries(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue('shipping.region', '');

    if (watchCountry) {
      fetchSubdivisions(id, watchCountry);
      fetchShippingOptions(id, watchCountry);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchCountry]);

  useEffect(() => {
    if (watchSubdivision) {
      fetchShippingOptions(id, watchCountry, watchSubdivision);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchSubdivision]);

  const fetchContries = async (checkoutId: string) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutId
      );

      setCountries(countries);
    } catch (error) {
      console.error(error);

      // TODO: use toast
    }
  };

  const fetchSubdivisions = async (checkoutId: string, countryCode: string) => {
    try {
      const { subdivisions } =
        await commerce.services.localeListShippingSubdivisions(
          checkoutId,
          countryCode
        );

      setSubdivisions(subdivisions);
    } catch (error) {
      console.error(error);
      // TODO: use toast
    }
  };

  const fetchShippingOptions = async (
    checkoutId: string,
    country: string,
    region?: string
  ) => {
    if (!checkoutId && !country) return;

    setValue('fulfillment.shipping_method', null);

    try {
      const shippingOptions = await commerce.checkout.getShippingOptions(
        checkoutId,
        {
          country,
          ...(region && { region }),
        }
      );

      setShippingOptions(shippingOptions);

      if (shippingOptions.length === 1) {
        const [shippingOption] = shippingOptions;

        setValue('fulfillment.shipping_method', shippingOption.id);
        selectShippingMethod(shippingOption.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onShippingSelect = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => selectShippingMethod(value);

  const selectShippingMethod = async (optionId: string) => {
    try {
      await setShippingMethod(optionId, watchCountry, watchSubdivision);
    } catch (error) {
      // TODO: log error
    }
  };

  return (
    <div>
      <div className="border-t border-gray-200 mt-10">
        <h2 className="text-lg font-medium text-gray-900">Datos de envio</h2>

        <div className="space-y-4">
          <AddressFields
            subdivisions={subdivisions}
            countries={countries}
            prefix={'shipping'}
          />
        </div>

        <div className="mt-4 border-t border-gray-200 pt-10">
          {watchCountry ? (
            <>
              <p>Metodo de envio</p>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {shippingOptions.map(({ id, description, price }) => (
                  <FormCheckbox
                    key={id}
                    id={id}
                    name={'fulfillment.shipping_method'}
                    label={`${description}: ${price.formatted_with_symbol}`}
                    required
                    type="radio"
                    onChange={onShippingSelect}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>Selecciona el pais para ver las opciones de delivery</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
