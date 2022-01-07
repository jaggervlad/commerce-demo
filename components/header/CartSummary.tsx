import { ShoppingBagIcon } from '@heroicons/react/outline';
import { useCartState } from 'context/cart';
import Link from 'next/link';

const CartSummary = () => {
  const { total_unique_items } = useCartState();
  return (
    <div className="flow-root lg:ml-6">
      <Link href="/carrito">
        <a className="group -m-2 p-2 flex items-center group-hover:text-opacity-8">
          <ShoppingBagIcon
            className="flex-shrink-0 h-6 w-6 text-black 0"
            aria-hidden="true"
          />
          <span className="ml-2 text-lg font-medium">{total_unique_items}</span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </Link>
    </div>
  );
};

export default CartSummary;
