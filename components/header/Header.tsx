import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

import Logo from './Logo';
import MobileMenu from './MobileMenu';
import CartSummary from './CartSummary';

const navigation = {
  pages: [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);

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
            <div className="relative h-24 w-48 mt-4 mx-auto lg:pl-0 lg:ml-0">
              <Logo />
            </div>

            {/* Flyout menus */}
            <div className="hidden lg:flex lg:space-x-12 lg:h-12">
              {navigation.pages.map((page, i) => (
                <Link href={page.href} key={i}>
                  <a
                    className={
                      'flex items-center border-l-2 border-black border-opacity-70 pl-4 text-lg font-medium text-black hover:text-opacity-80'
                    }
                  >
                    {page.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              {/* Cart */}
              <CartSummary />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
