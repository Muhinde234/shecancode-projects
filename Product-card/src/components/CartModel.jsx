import { useEffect } from "react";

const CartModal = ({ cart, updateQuantity, removeFromCart, onClose, onConfirm }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart ({totalItems})</h2>
          <button
            onClick={onClose}
            className="text-2xl"
          >
            &times;
          </button>
        </div>

        {cart.length === 0 ? (
          <p className=" text-center py-4">Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red hover:text-red"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={onConfirm}
                  className="flex-1 bg-red hover:bg-red text-white py-3 rounded-lg transition-colors"
                >
                  Confirm Order
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;