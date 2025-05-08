import { useEffect, useState } from "react";
import DessertCard from "./DessertCard";
import cart_cake from "../assets/images/cart_cake.png";
import image from "../assets/images/image.png"
import { X } from "lucide-react";
import ConfirmationModal from "./ConfirmationModel";

const Dessert = () => {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("dessertCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("src/data.json");
        const json = await response.json();
        setDesserts(json);
      } catch (error) {
        console.error("Error fetching data:", error);npm 
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("dessertCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (dessert) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === dessert.name);
      if (existing) {
        return prev.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...dessert, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
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
      className="text-rose-500 hover:text-rose-700 focus:text-rose-700 text-sm border border-rose-500 py-2 px-4 rounded-full transition-colors focus:outline-none"
    >
      Start New Order
    </button>
  </div>

  {cart.length === 0 ? (
    <div className="text-center py-12">
      <img src={cart_cake} className="mx-auto mb-4" alt="Empty cart" />
      <p className="text-sm">Your added items will appear here</p>
    </div>
  ) : (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg"
        >
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span>{item.quantity}x @ ${item.price.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(item.name)}
              className="text-red hover:text-red focus:text-red ml-2 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ))}
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Order Total</span>
          <span>
            ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
          </span>
        </div>
        <div className="flex gap-1 mt-10 mb-4">
          <img src={image} alt="carbon-tree"/>
        <p className="text-sm text-gray-500">
          This is a carbon-neutral delivery
        </p>
        </div>
        <button
                  onClick={() => setShowConfirmation(true)}
                  className="w-full bg-red  focus:bg-rose-600 text-white py-3 rounded-full transition-colors focus:outline-none"
                >
                  Confirm Order
                </button>
      </div>
    </div>
  )}
</div>
      </div>
      {showConfirmation && (
  <ConfirmationModal
    cartItems={cart}
    total={totalPrice}
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
