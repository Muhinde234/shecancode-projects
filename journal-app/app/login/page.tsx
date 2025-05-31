"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib//firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen ">
     

      <form action="" className=" w-lg">
        <div className=" flex flex-col gap-4 border border-pink-400 p-8 rounded-lg shadow-lg">
           <h1 className="text-2xl  text-center font-bold mb-4 text-pink-400 ">MindTrack</h1>
       <label className="  text-pink-300">Email</label>
        <input
        type="email"
        placeholder="enter email"
        className="border border-pink-300 rounded p-2 mb-2 lg:mb-0 lg:mr-2"
          />
        <label className="  text-pink-300">Password</label>
        <input
        type="password"
        placeholder="enter password"
        className="border border-pink-300 rounded p-2 mb-2 lg:mb-0 lg:mr-2 w"
          />
          <div className="flex justify-between gap-4 text-pink-400">
            <Link href="">
             forgot password?
            </Link>
            <Link href="" >
             Create new account
            </Link>
          </div>
        <button className=" w-full bg-pink-400 text-white p-2 rounded">Login</button>
        </div>
       
      
    

      </form>
      
    </div>
  );
}
