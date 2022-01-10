import clsx from 'clsx';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

const FormError: React.FC<{ className?: string; name: string }> = ({
  className,
  name,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="pt-1">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className={clsx(['text-red-500 text-sm', className])}>
            {message}
          </span>
        )}
      />
    </div>
  );
};

export default FormError;
