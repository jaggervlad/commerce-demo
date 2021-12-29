import { FilterIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import Filter from './Filter';
import MobileFilter from './MobileFilter';
import ProductGrid from './ProductGrid';

export default function ProductsView() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile filter dialog */}
      <MobileFilter open={open} setOpen={setOpen} />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 flex items-baseline justify-between mt-14 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Catálogo Productos
          </h1>

          <div className="flex items-center">
            <button
              type="button"
              className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FilterIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            {/* Filters  */}
            <Filter />

            {/* Product grid */}
            <ProductGrid />
          </div>
        </section>
      </div>
    </div>
  );
}
