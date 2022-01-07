import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { commerce } from 'lib/commerce';
import { useCartDispatch } from 'context/cart';
import { LineItem } from '@chec/commerce.js/types/line-item';
import { toast } from 'react-toastify';
import { Cart } from '@chec/commerce.js/types/cart';
import { TrashIcon } from '@heroicons/react/outline';
const UpdateQtity: React.FC<{ lineItem: LineItem }> = ({ lineItem }) => {
  const { setCart } = useCartDispatch();
  const { id, quantity, name } = lineItem;
  const handleUpdateCart = ({ cart }): Cart => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(
          `
      ${name} ha sido eliminado de tu carrito. Subtotal: ${subtotal.formatted_with_symbol}
      `
        )
      )
      .catch((error) => console.error(error));

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
          .then(({ subtotal }) =>
            toast(`
        1 ${name} ha sido removido del carrito. Subtotal: ${subtotal.formatted_with_symbol}
      `)
          )
          .catch((error) => console.error(error))
      : handleRemoveItem();
  };

  const incrementQuantity = () => {
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(`
          1 ${name} ha sido añadido al carrito. Subtotal: ${subtotal.formatted_with_symbol}
        `)
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex w-full justify-between items-center md:space-x-2 mt-3 text-gray-700">
      <div className="flex text-md  md:text-xl">
        <button
          type="button"
          onClick={decrementQuantity}
          className="cursor-pointer appearance-none"
        >
          <AiOutlineMinus className="h-4 w-4" />
        </button>
        <p className="block  font-bold px-4 text-center">{quantity}</p>
        <button
          type="button"
          onClick={incrementQuantity}
          className="cursor-pointer"
        >
          <AiOutlinePlus className="h-4 w-4" />
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={handleRemoveItem}
          className="self-start md:flex-1 text-red-600 font-semibold"
        >
          <TrashIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default UpdateQtity;
