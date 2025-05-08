import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto bg-gradient-to-t from-pink-400 to-white">
      <div className="flex justify-center items-center gap-2 pt-20">
        <Heart size={22} className="text-pink-300" />
        <h1 className="text-pink-300 text-4xl font-bold">InspiraQuote</h1>
      </div>
      <div className="max-w-xl  mx-auto  mt-18 bg-white text-pink-500 text-lg p-20 rounded-full  shadow-lg ">
        <p className=" italic text-start">
         
          "A place where strength meets words. Here, every quote is a spark of
          courage, a whisper of confidence, and a celebration of the unstoppable
          power within you. Whether you're chasing dreams, overcoming doubt, or
          simply needing a gentle reminder of your worth, InspiraQuote offers
          wisdom from remarkable women who’ve walked the path before you. Let
          their voices inspire yours — because the world needs more girls who
          believe in themselves."
        </p>
      </div>
      <div className="text-center ">
       <Link to="/login">
       <button className="inline bg-white text-pink-400 font-extrabold mt-10 mb-3 rounded-full p-2 cursor-pointer">Be Inspired!</button>
       </Link>
       
        
      </div>
    </div>
  );
}
