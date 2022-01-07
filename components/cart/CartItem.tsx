import Image from 'next/image';
import { LineItem } from '@chec/commerce.js/types/line-item';

import UpdateQtity from './UpdateQtity';
import Link from 'next/link';

const CartItem: React.FC<{
  product: LineItem;
}> = ({ product }) => {
  return (
    <li key={product.id} className="flex py-6 sm:py-10">
      <div className="w-24 h-24 flex-shrink-0 relative  sm:w-48 sm:h-48">
        <Image
          layout="fill"
          loading="lazy"
          src={product.image.url}
          alt={product.image.description}
          className="w-full h-full object-center object-cover rounded-lg border-gray-300 shadow-lg"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <Link
                href="/producto/[permalink]"
                as={`/producto/${product.permalink}`}
              >
                <a className="font-semibold text-lg text-gray-700 hover:text-gray-800">
                  {product.name}
                </a>
              </Link>
            </h4>
            <p className="ml-4 text-sm font-medium text-gray-900">
              {product.line_total.formatted_with_symbol}
            </p>
          </div>
        </div>

        <div className="mt-4 flex-1 flex items-end justify-between">
          <UpdateQtity lineItem={product} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
