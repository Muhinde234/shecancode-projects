import macaron from "../assets/Images/macaron.png";
import ActionButton from "./ActionButton";
const DessertCard = ({ id, name, category, price, image }) => {
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
        <ActionButton className="absolute left-1/2 -bottom-6 transform -translate-x-1/2" />
      </div>
      <div className="mt-4">
        <p>{category}</p>
        <h3>{name}</h3>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default DessertCard;
