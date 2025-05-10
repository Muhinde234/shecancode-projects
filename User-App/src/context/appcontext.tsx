
import { createContext, useReducer } from "react";
import { User } from "../types/user"

 type AppState ={
    users:User[];
    addedUsers:User[];
    theme:'light'|'dark'

 }
 type AppAction=
 |{type:'SET_USERS';payload:User[]}
 |{type:'ADD_USER';payload:User}
 |{type:'TOGGLE_THEME'};

 const initialState: AppState ={
  users:[],
  addedUsers:[],
  theme:'light'
 };

 const reducer =(state:AppState ,action:AppAction):AppState =>{
  switch(action.type){
    case 'SET_USERS':
      return{...state,users:action.payload};
    case 'ADD_USER':
      return {...state,addedUsers:[...state.addedUsers,action.payload]}
    case 'TOGGLE_THEME':
      return {...state,theme:state.theme ==='light' ? 'dark':'light'}
    default:
      return state;
     
  }
 }
const AppContext =createContext<{
  state:AppState;
  dispatch:React.Dispatch<AppAction>;

}>({
  state:initialState,
  dispatch:() =>null
});
export const AppProvider = ({children}:{children :ReactNode})=>{
  const[state,dispatch] =useReducer(reducer,initialState);
  return(
    <AppContext.Provider value ={{state,dispatch}}>
      {children}
    </AppContext.Provider>
  )
}


