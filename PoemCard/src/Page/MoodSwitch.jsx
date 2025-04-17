import { useState } from "react"


const MoodSwitch = () => {
    const[mood,setMood]=useState("")
    const showMood=(mood)=>{
        switch(mood){
            case'Happy':
              return '😍'
            case'Angry':
              return'😒'
            case'Suprised':
               return '💁‍♀️'
            case'Sad':
            return '🥺'
         }

    }
    showMood(mood)
  return (
    <div className="font-[Poppins] ">
        <div className="mt-24 flex justify-center items-center bg-blue-400 rounded-lg h-24 text-3xl">
           <h1> hello you are<span>{showMood(mood)} </span></h1> 
            </div>
         <h1 className="text-center text-5xl text-violet-500 mt-20">Mood Switch</h1>
        <div className="flex justify-center items-center gap-8  mt-20">
        
            <button className="bg-gradient-to-r from-violet-400 to-pink-300 p-7 rounded-xl cursor-pointer
            "
            onClick={()=>setMood('Happy')}
            >Happy</button>
            <button className="bg-gradient-to-b from-violet-400 to-pink-300 p-7 rounded-xl cursor-pointer"
            onClick={()=>setMood('Angry')}
            >Angry</button>
            <button className="bg-gradient-to-b from-violet-400 to-pink-300 p-7 rounded-xl cursor-pointer"
            onClick={()=>setMood('Suprised')}
            >Suprised</button>
            <button className="bg-gradient-to-b from-violet-400 to-pink-300 p-7 rounded-xl cursor-pointer"
            onClick={()=>setMood('Sad')}
            >Sad</button>

         </div>
     
    </div>
  )
}

export default MoodSwitch