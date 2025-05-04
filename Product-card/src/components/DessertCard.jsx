import ActionButton from "./ActionButton";
const DessertCard = ({ id, name, category, price, image,addToCart }) => {
  return (
    <div className="group">
    
      <div className="relative">
        <div id={id} className="overflow-hidden h-[240px] rounded-lg">
          <img
            src={image}
            className="object-cover h-full w-full transform hover:scale-[1.1] duration-400"
            alt={`${name} Image`}
          />
        </div>
        <ActionButton className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 cursor-pointer"
             onClick={addToCart}
        />
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
