import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@chec/commerce.js/types/product';

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link key={product.id} href={`/producto/${product.permalink}`}>
          <a>
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <Image
                layout="fill"
                loading="lazy"
                src={product.image.url}
                alt={product.description}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
            <p className="mt-2 font-medium text-gray-900">
              {product.price.formatted_with_symbol}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default ProductGrid;
