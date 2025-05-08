import { useAuth } from "../feature/authcontext";
import QuoteCard from "../feature/quotecard";


export default function Dashboard() {
    const{isAuthenticated}=useAuth();

  return (
    <div>
        {isAuthenticated?(
     
           <QuoteCard/>
      
        ):null}
     
</div>
  )
}
