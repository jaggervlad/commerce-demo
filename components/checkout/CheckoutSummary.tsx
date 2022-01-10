import { Live } from '@chec/commerce.js/types/live';
import { useCheckoutState } from 'context/checkout';
import { CgSpinner } from 'react-icons/cg';

const CheckoutSummary = ({
  subtotal,
  tax,
  shipping,
  line_items = [],
  total,
}: Live) => {
  const { processing, error, currentStep } = useCheckoutState();

  return (
    <div className="mt-10">
      <div className="mt-4 border border-stone-300 rounded-lg shadow-lg">
        <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            {subtotal ? (
              <dd className="text-sm font-medium text-gray-900">
                {subtotal.formatted_with_symbol}
              </dd>
            ) : (
              <div className="animate-pulse rounded h-4 w-24 bg-gray-300" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Envio</dt>
            {shipping ? (
              <dd className="text-sm font-medium text-gray-900">
                {shipping.price.formatted_with_symbol}
              </dd>
            ) : (
              <div className="animate-pulse rounded h-4 w-24 bg-gray-300" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Impuestos</dt>
            {tax ? (
              <dd className="text-sm font-medium text-gray-900">
                {tax.amount.formatted_with_symbol}
              </dd>
            ) : (
              <div className="animate-pulse rounded h-4 w-24 bg-gray-300" />
            )}
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            {total ? (
              <dd className="text-base font-medium text-gray-900">
                {total.formatted_with_symbol}
              </dd>
            ) : (
              <div className="animate-pulse rounded h-4 w-24 bg-gray-300" />
            )}
          </div>
        </dl>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center bg-blue-600 shadow-lg shadow-blue-500/50 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500"
          >
            {processing ? (
              <>
                <CgSpinner className="animate-spin mr-4 h-6 w-6" />
                Procesando Pago....
              </>
            ) : (
              <>{currentStep === 'billing' ? 'Pagar' : 'Continuar'}</>
            )}
          </button>

          <div className="mt-4">
            <span className="text-red-500 font-medium text-sm">{error}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
