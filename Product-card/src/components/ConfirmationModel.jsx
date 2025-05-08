import { CircleCheck } from "lucide-react";

const ConfirmationModal = ({ cartItems = [], total = 0, onConfirm }) => {
  return (
    <div className="fixed inset-0  bg-black/70 backdrop-blur-sm flex items-center justify-center p-4  max-h-screen overflow-hidden">


      <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
        <div className="flex items-center mb-4">
     
            <div className="flex flex-col items-start gap-2">
              <CircleCheck size={32} className="text-green-500"/>
              <h2 className="text-2xl font-bold">Order Confirmed</h2>
            
          </div>
       
        </div>
        <p className="text-gray-500 mb-6">We hope you enjoy your food!</p>

        <div className="mb-6 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id}>
              <p className="font-medium">- {item.name}</p>
              <div className="ml-4 text-sm text-gray-600">
                <p>- {item.quantity}x &nbsp; ${item.price.toFixed(2)}</p>
                <p>- ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="font-bold "> Order Total</p>
              <p className="font-bold">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-4"></div>

        <button
          onClick={onConfirm}
          className="w-full py-3 bg-red text-white font-semibold rounded-lg hover:bg-red duration-500"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;