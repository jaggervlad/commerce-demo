import Image from 'next/image';

const Success = ({ id, customer_reference, order, shipping, billing }) => {
  return (
    <div className="max-w-3xl w-full mt-8 mx-auto">
      <div className="max-w-xl">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Gracias!
        </h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Tu pedido ha sido registrado correctamente, te llegara un correo con
          mas informacion.
        </p>
        <p className="mt-2 text-base text-gray-500">Tu pedido es: {id}</p>

        <dl className="mt-12 text-sm font-medium">
          <dt className="text-gray-900">Referencia</dt>
          <dd className="text-indigo-600 mt-2">{customer_reference}</dd>
        </dl>
      </div>

      <section
        aria-labelledby="order-heading"
        className="mt-10 border-t border-gray-200"
      >
        <h2 id="order-heading" className="sr-only">
          Pedido
        </h2>

        <h3 className="sr-only">Items</h3>
        {order.line_items.map((product) => (
          <div
            key={product.id}
            className="py-10 border-b border-gray-200 flex space-x-6"
          >
            <div className="w-20 h-20 relative">
              <Image
                layout="fill"
                src={product.image.url}
                alt={product.image.filename}
                className="flex-none w-full h-full object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
              />
            </div>
            <div className="flex-auto flex flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <a>{product.product_name}</a>
                </h4>
              </div>
              <div className="mt-6 flex-1 flex items-end">
                <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-900">Cantidad</dt>
                    <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                  </div>
                  <div className="pl-4 flex sm:pl-6">
                    <dt className="font-medium text-gray-900">Precio</dt>
                    <dd className="ml-2 text-gray-700">
                      {product.price.formatted_with_symbol}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}

        <div className="sm:ml-40 sm:pl-6">
          <h3 className="sr-only">Informacion de envio</h3>

          <h4 className="sr-only">Direcciones</h4>
          <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
            <div>
              <dt className="font-medium text-gray-900">Datos de Envio</dt>
              <dd className="mt-2 text-gray-700">
                <address className="not-italic">
                  <span className="block">{shipping.name}</span>
                  <span className="block">{shipping.street}</span>
                  <span className="block">
                    {shipping.town_city}, {shipping.country}{' '}
                    {shipping.postal_zip_code}
                  </span>
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">
                Datos de Facturacion
              </dt>
              <dd className="mt-2 text-gray-700">
                <address className="not-italic">
                  <span className="block">{billing.name}</span>
                  <span className="block">{billing.street}</span>
                  <span className="block">
                    {billing.town_city}, {billing.country}{' '}
                    {billing.postal_zip_code}
                  </span>
                </address>
              </dd>
            </div>
          </dl>

          {/* <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Metodo de pago</dt>
                <dd className="mt-2 text-gray-700">
                  <p>Apple Pay</p>
                  <p>Mastercard</p>
                  <p>
                    <span aria-hidden="true">•••• </span>
                    <span className="sr-only">Ending in </span>1545
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Shipping method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>DHL</p>
                  <p>Takes up to 3 working days</p>
                </dd>
              </div>
            </dl> */}

          <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Subtotal</dt>
              <dd className="text-gray-700">
                {order.subtotal.formatted_with_symbol}
              </dd>
            </div>
            {order.discount.length > 0 && (
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Descuento
                  <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                    STUDENT50
                  </span>
                </dt>
                <dd className="text-gray-700">-$18.00 (50%)</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Envio</dt>
              <dd className="text-gray-700">
                {order.shipping.price.formatted_with_symbol}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Total</dt>
              <dd className="text-gray-900">
                {order.total.formatted_with_symbol}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default Success;
