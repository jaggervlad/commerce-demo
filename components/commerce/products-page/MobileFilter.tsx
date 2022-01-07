import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Category } from '@chec/commerce.js/types/category';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon, XIcon } from '@heroicons/react/outline';
import { Dispatch, Fragment, SetStateAction, useEffect } from 'react';

import { subCategories } from './navigation';
import { isActive } from 'utils/isActiveRoute';

const MobileFilter: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
}> = ({ open, setOpen, categories }) => {
  const router = useRouter();

  const closeDialog = () => setOpen(false);

  useEffect(() => {
    router.events.on('routeChangeStart', closeDialog);
    return () => {
      router.events.on('routeChangeStart', closeDialog);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
              <h2 className="sr-only">Filter</h2>
              <div />
              <button
                type="button"
                className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className={clsx(
                        'block px-2 py-3 hover:underline hover:underline-offset-8 hover:decoration-2 text-lg',
                        isActive(category.href, router) &&
                          'underline underline-offset-8 decoration-2'
                      )}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              <Disclosure
                as="div"
                className="border-t border-gray-200 px-4 py-6"
              >
                {({ open }) => (
                  <>
                    <h3 className="-mx-2 -my-3 flow-root">
                      <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900 text-lg">
                          Categorias
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-6">
                        {categories.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <Link
                              href={`/productos/${option.slug}`}
                              as="/productos/[slug]"
                            >
                              <a className="text-gray-800 text-md hover:underline hover:underline-offset-4 hover:decoration-2">
                                {option.name}
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </form>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileFilter;
