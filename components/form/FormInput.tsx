import { useFormContext } from 'react-hook-form';
import FormError from './FormError';

const FormInput: React.FC<{
  label: string;
  name: string;
  className?: string;
  type?: string;
  required?: boolean;
  validation?: object;
}> = ({
  label,
  name,
  className,
  type = 'text',
  required = false,
  validation = {},
}) => {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} es requerido` : false;

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(name, { required: isRequired, ...validation })}
          type={type}
          id={name}
          name={name}
          className="
          block w-full border-gray-300 rounded-md shadow-sm bg-transparent
          focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <FormError name={name} />
      </div>
    </div>
  );
};

export default FormInput;
