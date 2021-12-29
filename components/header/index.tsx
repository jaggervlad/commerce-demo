import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

import MobileMenu from './MobileMenu';
import { isActive } from 'utils/isActiveRoute';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';

const navigation = {
  pages: [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed w-full mx-auto  px-4 sm:px-6 lg:px-8  top-0 z-20 bg-stone-200">
      <MobileMenu navigation={navigation} open={open} setOpen={setOpen} />
      <nav aria-label="Top" className="">
        <div>
          <div className="h-16 flex items-center mx-auto">
            <button
              type="button"
              className="p-2 rounded-md text-black lg:hidden focus:border-stone-200"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="relative h-48 w-48 mt-4 mx-auto lg:pl-0 lg:ml-0">
              <Logo />
            </div>

            {/* Flyout menus */}
            <div className="hidden lg:flex lg:space-x-12 lg:h-12">
              {navigation.pages.map((page, i) => (
                <Link href={page.href} key={i}>
                  <a
                    className={clsx(
                      'flex items-center border-l-2 border-black border-opacity-70 pl-4 text-lg font-medium text-black hover:text-opacity-80',
                      isActive(page.href, router) &&
                        'underline decoration-4 underline-offset-4'
                    )}
                  >
                    {page.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              {/* Cart */}
              <div className="flow-root lg:ml-6">
                <Link href="/carrito">
                  <a className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-black group-hover:text-opacity-80"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
