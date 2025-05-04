import { useEffect, useState } from "react";
import DessertCard from "./DessertCard";
import cart_cake from "../assets/images/cart_cake.png";

const Dessert = () => {
  const [desserts, setDesserts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

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

  return (
    <main className=" container mx-auto my-28  ">
      <h1 className="">Desserts</h1>
      <div className="flex items-start gap-6">
        <div className="flex-1 grid grid-cols-3 gap-8">
          {desserts.map((dessert, idx) => (
            <DessertCard
              key={idx}
              id={dessert.id}
              name={dessert.name}
              price={dessert.price}
              category={dessert.category}
              image={dessert.image.desktop}
            />
          ))}
        </div>
        <div className="px-8 pb-8">
          <h2>Your Cart (0)</h2>
          <div className="">
            <img
              src={cart_cake}
              height={128}
              width={128}
              alt="Cart cake - Empty"
            />
            <p>Your added items will appear here</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dessert;
