import cart_icon from "../assets/Images/cart_icon.png";

export default function ActionButton({className}) {
  return (
    <button className={`flex items-center justify-center gap-4 py-4 px-8 border border-rose-400 rounded-full bg-white ${className}`}>
        <span>
            <img src={cart_icon} alt="Cart Icon" />
        </span>
        <span>Add to Cart</span>
    </button>
  )
}
