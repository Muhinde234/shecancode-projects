

const Input = ({type="text",placeholder,value,onChange,className,label ,id,prop,required}) => {
  return (
    <div>
       <label 
       className={`block text-left text-xl p-1 ${className}`}
       >{label}</label> 
       <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        {...prop}
        required={required}
        className="w-full border border-gray-300 text-lg focus:none
        placeholder:text-sm pl-1"


         />
    </div>
  )
}

export default Input