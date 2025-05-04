import image from "../assets/Images/image.png";

export default function ActionButton({className}) {
  return (
    <button className={`flex items-center justify-center gap-4 py-4 px-8 border border-rose-400 rounded-full bg-white ${className}`}>
        <span>
            <img src={image} alt="Cart Icon" />
        </span>
        <span>Add to Cart</span>
    </button>
  )
}
