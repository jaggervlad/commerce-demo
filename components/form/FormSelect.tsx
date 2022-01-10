import { useFormContext } from 'react-hook-form';
import FormError from './FormError';

const FormSelect: React.FC<{
  name: string;
  label: string;
  className?: string;
  options: { value: string; label: string }[];
  required?: boolean;

  validation?: object;
}> = ({ name, label, className, options, required, validation }) => {
  const { register } = useFormContext();
  const isRequired = required ? `${label || name} es requerido` : false;
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <select
          {...register(name, { required: isRequired, ...validation })}
          id={name}
          name={name}
          defaultValue={''}
          disabled={options.length === 0}
          className="
          block w-full bg-transparent border-gray-300 rounded-md shadow-sm 
          focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            {`Seleccionar ${label}`}
          </option>

          {options.map(({ value, label }) => (
            <option value={value} key={value}>
              {label || value}
            </option>
          ))}
        </select>

        <FormError name={name} />
      </div>
    </div>
  );
};

export default FormSelect;
