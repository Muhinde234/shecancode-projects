import React, { useEffect, useState } from 'react'
import quotes from "../data/quotes"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuoteCard() {
    const [quoteIndex, setQuoteIndex] = useState(0);
    
    // Function to get a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuoteIndex(randomIndex);
    };
    
    // Auto-rotate quotes every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        getRandomQuote();
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    
    const nextQuote = () => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    };
    
    const prevQuote = () => {
      setQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    };
  
    return (
        <>
        <div className='container mx-auto text-center mt-12'>
        <h1 className='text-pink-400 text-2xl font-bold'>welcome to your  platform</h1> 
        </div>
        
      <div className='container mx-auto max-w-xl p-4 bg-pink-300 rounded-lg shadow-md mt-10 text-white font-extrabold'>
        <div className="text-center mb-4">
          <p className="text-xl italic mb-2">"{quotes[quoteIndex].quote}"</p>
          <p className="font-semibold">- {quotes[quoteIndex].author}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={prevQuote}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} className='rounded-full bg-white  text-pink-300' />
          </button>
          
          <button 
            onClick={getRandomQuote}
            className="px-4 py-2  bg-white text-pink-400 rounded-full "
          >
            get more!
          </button>
          
          <button 
            onClick={nextQuote}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next quote"
          >
            <ChevronRight size={24} className='rounded-full bg-white  text-pink-300' />
            
          </button>
        </div>
      </div>
      </>
    );
}