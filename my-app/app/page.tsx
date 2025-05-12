import Image from "next/image";
import hero from "../public/image/hero.jpeg";
export default function Home() {
  return (
    <div className="text-center text-green-500 mt-10 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1>hello </h1>
        <p>welcome to my page</p>
        <div className="flex justify-center items-center mt-15">
          <Image 
          src={hero}
          alt="cartoon" 
          width={450} 
          height={450}  
          className="rounded-full  "
        />
     
        </div>
      
      </div>
    </div>
  );
}
