import {
  LocaleListCountriesResponse,
  LocaleListSubdivisionsResponse,
} from '@chec/commerce.js/features/services';
import { FormInput } from '../form';
import FormSelect from '../form/FormSelect';

const AddressFields: React.FC<{
  prefix?: string;
  countries: Partial<LocaleListCountriesResponse>;
  subdivisions: Partial<LocaleListSubdivisionsResponse>;
}> = ({ prefix = '', countries = {}, subdivisions = {} }) => {
  const reducer = ([code, name]) => ({
    value: code,
    label: name,
  });

  const formattedCountries = subdivisions
    ? Object.entries(countries).map(reducer)
    : [];
  const formattedSubdivisions = subdivisions
    ? Object.entries(subdivisions).map(reducer)
    : [];

  return (
    <>
      <div className="mt-4 space-y-4 md:space-y-0 md:flex md:items-start md:space-x-4 w-full">
        <FormInput
          className="w-full"
          name={`${prefix}.firstname`}
          label="Nombres"
          required
        />
        <FormInput
          className="w-full"
          name={`${prefix}.lastname`}
          label="Apellidos"
          required
        />
      </div>
      <FormInput
        className="sm:col-span-2"
        name={`${prefix}.street`}
        label="Dirección"
        required
      />
      <FormInput
        className="sm:col-span-2"
        name={`${prefix}.town_city`}
        label="Ciudad"
        required
      />

      <div className="space-y-4 md:space-y-0 md:flex md:items-start md:space-x-4">
        <FormSelect
          className="md:w-1/3"
          options={formattedCountries}
          name={`${prefix}.country`}
          label="Pais"
          required
        />

        <FormSelect
          className="md:w-1/3"
          options={formattedSubdivisions}
          name={`${prefix}.region`}
          label="Region"
          required
        />

        <FormInput
          className="md:w-1/3"
          name={`${prefix}.postal_zip_code`}
          label="ZIP / Codigo postal"
          required
        />
      </div>
    </>
  );
};

export default AddressFields;
