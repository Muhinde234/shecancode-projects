import { useEffect, useState } from "react";
import DessertCard from "./DessertCard";
import cart_cake from "../assets/images/cart_cake.png";
import ConfirmationModal from "./ConfirmationModel";

const Dessert = () => {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("src/data.json");
        const json = await response.json();
        setDesserts(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);





  const addToCart = (dessert) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === dessert.name);
      if (existing) {
        return prev.map(item =>
          item.id === dessert.name 
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
      }
      return [...prev, {...dessert, quantity: 1}];
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name, amount) => {
    setCart(prev => prev.map(item => 
      item.name === name
        ? {...item, quantity: Math.max(1, item.quantity + amount)}
        : item
    ));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="px-8 container mx-auto my-28">
      <h1 className="font-bold text-2xl mb-12">Desserts</h1>
      
      <div className="flex flex-col lg:flex-row items-start gap-8">
      
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {desserts.map((dessert) => (
            <DessertCard
              key={dessert.id}
              {...dessert}
              image={dessert.image.desktop}
              addToCart={() => addToCart(dessert)}
            />
          ))}
        </div>

        <div className="lg:sticky lg:top-28 w-full lg:w-140 p-6 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-red font-bold text-xl">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={() => setCart([])}
              className="text-red hover:text-red text-sm border border-rose-500 py-3 px-2 rounded-full cursor-pointer"
            >
              Start New Order
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <img
                src={cart_cake}
                className="mx-auto mb-4"
                alt="Empty cart"
              />
              <p className="text-sm">Your added items will appear here</p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-red">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.name, -1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, 1)}
                      className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="ml-2 text-red-500 hover:text-red"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowConfirmation(true)}
                className="w-full mt-6 bg-red hover:bg-red text-white py-3 rounded-lg transition-colors"
              >
                Confirm Order
              </button>
            </>
          )}
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationModal 
          totalItems={totalItems}
          onClose={() => setShowConfirmation(false)}
          onConfirm={() => {
            setCart([]);
            setShowConfirmation(false);
          }}
        />
      )}
    </main>
  );
};

export default Dessert;