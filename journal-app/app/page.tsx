import React from 'react'
import Button from '../components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'> 
        <h1 className='text-gray-600 text-3xl font-bold'>Your Personal Journal</h1>
        <p className='text-gray-500 text-lg mt-2'>A simple space to capture  your thoughts, memories ,and reflections</p>
  <div className='mt-8 flex gap-4'>
    <Link href="">
     <Button className='bg-gray-700  text-white'>
        
            Get Started
        </Button>
    </Link>
    
     <Link href="">
      <Button className='border border-gray-200'>
          learn more
        </Button>
     </Link>
   
        
  </div>
  <footer>
    <p>2025 Personal journal app</p>
  </footer>
       

    </div>
  )
}

export default page