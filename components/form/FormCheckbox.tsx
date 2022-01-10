import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { ChangeEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';

const FormCheckbox: React.FC<{
  id?: string;
  label: string;
  name: string;
  required?: boolean | string;
  validation?: object;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}> = ({
  label,
  id,
  name,
  required,
  validation = {},
  children,
  type = 'checkbox',
  onChange,
}) => {
  const { register } = useFormContext();

  const isRequired = required
    ? typeof required === 'boolean'
      ? `${label || name} es requerido`
      : required
    : false;
  return (
    <label
      htmlFor={id || name}
      className="flex items-center cursor-pointer w-full"
    >
      <input
        {...register(name, { required: isRequired, ...validation })}
        id={id || name}
        name={name}
        type={type}
        value={id}
        onChange={onChange}
        className="
        appearance-none bg-transparent checked:bg-black hover:border-black focus:border-black focus:checked:outline-none focus:outline-none text-black rounded w-5 h-5 cursor-pointer"
      />

      {(children || label) && <span className="ml-2">{children || label}</span>}
    </label>
  );
};

export default FormCheckbox;
