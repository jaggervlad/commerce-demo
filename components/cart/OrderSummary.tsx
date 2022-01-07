import { useCartState } from 'context/cart';
import Link from 'next/link';
import React from 'react';
import { IoReturnDownBackOutline } from 'react-icons/io5';

interface Props {}

const OrderSummary: React.FC<Props> = () => {
  const { subtotal, total_items } = useCartState();

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
          <dt className="text-sm text-gray-600">Productos</dt>
          <dd className="text-sm font-medium text-gray-900">{total_items}</dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">Total</dt>
          <dd className="text-base font-medium text-gray-900">
            {subtotal?.formatted_with_symbol}
          </dd>
        </div>
      </dl>

      <div className="mt-6 space-y-6">
        <button
          type="submit"
          className="w-full bg-blue-600 shadow-lg shadow-blue-500/50 border border-transparent 
          rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500"
        >
          Proceder a pagar
        </button>
        <Link href="/productos">
          <a className="inline-flex items-center justify-center gap-2 w-full text-blue-600 text-lg font-medium">
            Seguir comprando
            <IoReturnDownBackOutline />
          </a>
        </Link>
      </div>
    </section>
  );
};
export default OrderSummary;
