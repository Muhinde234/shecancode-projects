import {useState,useEffect} from 'react'
import {useParams}from 'react-router-dom'



export default function UserProfile(){
  const{id}=useParams()
  const[user,setUser]= useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")


useEffect(()=>{
  const fetchUser= async()=>{
    try{
      const response =await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
      if(!response.ok) throw new Error("user not found");
      const data= await response.json()
      setUser(data)
    } catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }


  }
  fetchUser()

},[id])

if(loading) return <p>laoding ....</p>
if(error) return <p>error</p>

return(
 <>
 <h1 className='text-2xl font-extrabold'>user profile</h1>
 <p>name:{user.name}</p>
 <p>username:{user.username}</p>
 <p>email:{user.email}</p>
 </>

)


}
