import { createContext, useReducer, useEffect, useContext } from 'react';
import { commerce } from 'lib/commerce';
import { Cart } from '@chec/commerce.js/types/cart';

interface CartDispatch {
  setCart: (payload: Cart) => Promise<void>;
  reset: () => Promise<void>;
}

type CartAction =
  | { type: 'SET_CART'; payload: Cart }
  | { type: 'RESET' }
  | { type: 'EMPTY' };

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

function reducer(state: Cart, action: CartAction): Partial<Cart> {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, ...action.payload };

    case 'RESET':
      return initialState;
  }
}

const CartStateContext = createContext<Partial<Cart>>({});
const CartDispatchContext = createContext<Partial<CartDispatch>>({});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();

      dispatch({ type: 'SET_CART', payload: cart });
    } catch (error) {
      console.error(error);
    }
  };

  const setCart = async (payload: Cart) =>
    dispatch({ type: 'SET_CART', payload });
  const reset = async () => dispatch({ type: 'RESET' });

  return (
    <CartDispatchContext.Provider value={{ setCart, reset }}>
      <CartStateContext.Provider value={{ ...state }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
