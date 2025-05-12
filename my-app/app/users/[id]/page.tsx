"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const Userprofile = () => {
  const params=useParams();
  const id=params.id as string;
  const[user ,setUser]=useState<User|null>(null);
  const[loading,setLoading]=useState(true);
  const[error ,setError]=useState<string|null>(null)

  useEffect(()=>{
    if(!id) return;
    async function fetchUser(){
      try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok) throw new Error("user not found")
          const data=  await response.json()
          setUser(data);

      }catch(error:any){
        setError(error.message);
      } finally{
        setLoading(false)
      }
    }
    fetchUser()
  },[id])
  if(loading) return <p>loading...</p>
  if(error) return <p>Error:{error}</p>

  return (
    <div className="flex flex-col justify-center items-center h-100 bg-blue-300 text-black">
      <div>
         <h1>User Profile</h1>
       <p>Name:{user?.name}</p>
       <p>Email:{user?.email}</p>
       <p>Company:{user?.company.name}</p>
      </div>
  

    </div>
  )
}

export default Userprofile