import { useEffect } from "react";
import { X } from "lucide-react";

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
            className="text-2xl hover:text-rose-500 focus:text-rose-500 focus:outline-none transition-colors"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center py-4">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none transition-colors"
                    >
                      +
                    </button>
                    <span className="ml-2">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-rose-500 hover:text-rose-700 focus:text-rose-700 focus:outline-none ml-2 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Order Total</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">This is a carbon-neutral delivery</p>
              <button
                onClick={onConfirm}
                className="w-full bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 text-white py-3 rounded-full transition-colors focus:outline-none"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;