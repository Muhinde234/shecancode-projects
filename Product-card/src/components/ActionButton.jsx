import image from "../assets/Images/image1.png";

export default function ActionButton({className,onClick}) {
  return (
    <button className={` flex items-center justify-center gap-4 py-4 px-8 border border-rose-400 rounded-full bg-white  ${className}`}
     onClick={onClick}
    >
        <span className="shrink-0">
            <img src={image} alt="Cart Icon" />
        </span>
        <span className="shrink-0 font-semibold">Add to Cart</span>
    </button>
  )
}
