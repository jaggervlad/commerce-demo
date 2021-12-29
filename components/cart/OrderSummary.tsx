import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {}

const OrderSummary: React.FC<Props> = () => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16  border border-gray-300 border-opacity-80 shadow-lg rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Resumen de pedido
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">$99.00</dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Estimado de envío</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">$5.00</dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="flex text-sm text-gray-600">
            <span>Estimado de impuestos</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">$8.32</dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">Pedido Total</dt>
          <dd className="text-base font-medium text-gray-900">$112.32</dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 shadow-lg shadow-blue-500/50 border border-transparent 
          rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500"
        >
          Proceder a pagar
        </button>
      </div>
    </section>
  );
};
export default OrderSummary;
