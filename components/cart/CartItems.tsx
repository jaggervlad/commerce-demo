import React from 'react';

import CartItem from './CartItem';
import { useCartState } from 'context/cart';

interface Props {}

const CartItems: React.FC<Props> = () => {
  const { line_items } = useCartState();

  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Carrito productos
      </h2>

      <ul role="list" className="divide-y divide-gray-300">
        {line_items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};
export default CartItems;
