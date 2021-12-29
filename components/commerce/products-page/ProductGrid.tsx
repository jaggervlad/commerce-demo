import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { products } from './navigation';

interface Props {}

const ProductGrid: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link key={product.id} href={product.href}>
          <a className="text-sm border rounded-md border-gray-300 shadow-lg p-2">
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <Image
                layout="fill"
                loading="lazy"
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
            <p className="text-gray-500 italic">{product.availability}</p>
            <p className="mt-2 font-medium text-gray-900">{product.price}</p>

            <button
              onClick={(e) => e.preventDefault()}
              type="button"
              className="
            w-full px-4 py-2 text-white rounded-md mt-4 text-center bg-blue-600 shadow-md shadow-blue-500/50  hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 
            "
            >
              Añadir al carrito
            </button>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default ProductGrid;
