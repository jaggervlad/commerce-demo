import { Category } from '@chec/commerce.js/types/category';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
import React from 'react';
import { subCategories } from './navigation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isActive } from 'utils/isActiveRoute';

interface Props {
  categories: Category[];
}

const Filter: React.FC<Props> = ({ categories }) => {
  const router = useRouter();

  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="text-sm font-medium text-gray-900 space-y-3 pb-6 border-b border-gray-200"
      >
        {subCategories.map((category) => (
          <li key={category.name}>
            <a
              href={category.href}
              className="text-lg hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>

      <Disclosure as="div" className="border-b border-gray-200 py-2">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button
                className="
                        py-3 w-full flex items-center justify-between 
                        text-sm text-gray-400 hover:text-gray-500
                        "
              >
                <span className="font-medium text-gray-900 text-lg">
                  Categorias
                </span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {categories.map((option) => (
                  <Link
                    href="/productos/[slug]"
                    as={`/productos/${option.slug}`}
                    key={option.id}
                  >
                    <a className="flex items-center text-md hover:underline hover:decoration-2 hover:underline-offset-4">
                      <p>{option.name}</p>
                    </a>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </form>
  );
};
export default Filter;
