import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function UserProfile() {
 const{id}=useParams();
 const[user,setUser]=useState(null)
 const[loading,setLoading]=useState(true)
 const[error,setError]=useState("")

 useEffect(()=>{
  const getUser =async()=>{
    try{
       const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if(!response.ok) throw new Error ("user not found")
        const data=await response.json()
        setUser(data)
    }catch(error){
  setError(error.message)
  } finally{
    setLoading(false)
  }
}
getUser()

 },[id])
 if(loading) return <p>loading.....</p>
 if(error) return <p>error :{error}</p>


  return (
    <div className="mt-10 flex flex-col justify-center items-center h-80 bg-gray-200  rounded-lg">
        <h1 className="text-purple-300 mb-4 font-extrabold">Userprofile</h1>
        <div className="font-bold">
        <p>Name:{user.name}</p>
        <p>Username:{user.username}</p>
        <p>email:{user.email}</p>
        </div>
       
    </div>
  )
}
