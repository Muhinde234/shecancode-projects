import React from 'react'


interface contactcardProp{
    name:string,
    email:string,
    phone?:string
}

export default function Contactcard({name,email,phone}):contactcardProp {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen  '>
        <div className='bg-purple-400 p-24  '>
        <h1 className='text-3xl mb-5  text-center underline'>Contact info</h1>
        <p className='text-lg'>HI!  {name}</p>
        <p className='text-lg'>email:{email}</p>
        <p  className='text-lg'>phone:{phone}</p>
        </div>
       
        
        </div>
  )
}
