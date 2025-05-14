import { useState } from 'react';
import useDocumentTitle from '../hook/customhook'; 

function Counter() {
  const [count, setCount] = useState(0);
  
  
  useDocumentTitle(`Count: ${count}`);
  
  return (
    <div>
      <h1 className='text-center mt-10'>Current Count: {count}</h1>

      <div className='flex justify-center items-center '>
     <button onClick={() => setCount(count + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'>Increment</button>
      <button onClick={() => setCount(count - 1)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2'>Decrement</button>
      <button onClick={() => setCount(0)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2'> Reset</button>
      </div>
     
    </div>
  );
}

export default Counter;