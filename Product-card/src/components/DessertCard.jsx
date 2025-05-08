import { Plus, Minus } from "lucide-react";
import ActionButton from "./ActionButton";

const DessertCard = ({ id, name, category, price, image, addToCart, cart = [], updateQuantity }) => {
  const isInCart = cart.some(item => item.name === name);

  return (
    <div className="group">
      <div className="relative">
        <div
          id={id}
          className={`overflow-hidden h-[240px] rounded-lg ${isInCart ? 'border-4 border-red' : ''}`}
        >
          <img
            src={image}
            className="object-cover h-full w-full transform group-hover:scale-[1.1] transition-transform duration-400"
            alt={`${name} Image`}
          />
        </div>

        <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
          {isInCart ? (
            <div className="flex items-center gap-2 bg-red rounded-full px-4 py-2 shadow-lg">
              <button
                onClick={() => updateQuantity(name, -1)}
                className="p-1 border-2 border-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <Minus className="w-5 h-5 text-white rounded-full" />
              </button>
              <span className="min-w-[24px] text-center">
                {cart.find(item => item.name === name)?.quantity || 0}
              </span>
              <button
                onClick={() => updateQuantity(name, 1)}
                className="p-1 border-2 border-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <Plus className="w-5 h-5 text-white rounded-full" />
              </button>
            </div>
          ) : (
            <ActionButton 
              onClick={() => addToCart({ id, name, price, category, image })}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-rose-500 text-sm">{category}</p>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-red font-semibold">$ {price}</p>
      </div>
    </div>
  );
};

export default DessertCard;
