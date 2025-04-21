

const Button = ({children,type="submit",className,onClick}) => {
  return (
    <div>
        <button
        type={type}
        className={`${className}`}
        onClick={onClick}
        >
        {children}
        </button>
    </div>
  )
}

export default Button