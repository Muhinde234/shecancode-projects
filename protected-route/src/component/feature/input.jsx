

export default function Input({id,type="text",name,label,placeholder, value,props,onChange,className}) {
  return (
    <div>
        <label htmlFor={id}
        className="block"
        >{label}</label>
        <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required=" required"
        onChange={onChange}
        {...props}
        className={`  w-full  mt-1 border-1  border-pink-400  rounded-sm 
            :placehoder text-start p-2 text-black text-sm
          ${className}
        
        `}
         />
    </div>
  )
}
