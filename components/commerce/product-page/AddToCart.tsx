import { useCartDispatch } from 'context/cart';
import { commerce } from 'lib/commerce';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';

const AddToCart: React.FC<{ id: string }> = ({ id }) => {
  const { setCart } = useCartDispatch();
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);

    commerce.cart
      .add(id, 1)
      .then(({ cart }) => {
        setCart(cart);

        return cart;
      })
      .then(({ subtotal }) => {
        setLoading(false);
        toast(
          `Hay un producto nuevo en tu carrito. Tu subtotal es ${subtotal.formatted_with_symbol}`
        );
      })
      .catch(() => {
        toast('Porfavor intenta de nuevo.');
      });
  };
  return (
    <button
      type="button"
      onClick={addToCart}
      className="w-full inline-flex items-center justify-center rounded-sm px-6 py-4 uppercase shadow-lg shadow-blue-500/50 text-white bg-blue-600 mt-6"
    >
      {loading ? (
        <>
          <CgSpinner className="animate-spin mr-4 h-6 w-6" />
          Procesando...
        </>
      ) : (
        'Añadir al carrito'
      )}
    </button>
  );
};

export default AddToCart;
