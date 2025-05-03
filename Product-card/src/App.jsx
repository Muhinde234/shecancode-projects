import React from "react";
import "./App.css";
import DessertCard from "./components/DessertCard";
import desserts from "./components/Desserts";
import cart_cake from "./assets/Images/cart-cakes.png";

function App() {
  return (
    <>
      <main className=" container mx-auto my-28  ">
        <h1 className="" >Desserts</h1>
        <div className="flex items-start gap-6">
          <div className="flex-1 grid grid-cols-3 gap-8">
            {desserts.map((dessert, idx) => (
              <DessertCard
                key={idx}
                id={dessert.id}
                name={dessert.name}
                price={dessert.price}
                category={dessert.category}
                image={dessert.image}
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
    </>
  );
}

export default App;
