import { NextPage } from 'next';

import { CartItems, OrderSummary } from '@/components/cart';
import LayoutContainer from '@/components/layouts/layout-main';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
];

const CartPage: NextPage = () => {
  return (
    <LayoutContainer>
      <div className="w-full mx-auto pt-16 pb-24">
        <h1 className="text-3xl text-center md:text-left font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Carrito de Compras
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          {/* CartItems  */}
          <CartItems />

          {/* Order summary */}
          <OrderSummary />
        </form>
      </div>
    </LayoutContainer>
  );
};

export default CartPage;
