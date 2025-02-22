import { createContext, useState } from "react";

 export let userContext = createContext();

export default function UserContextProvider(props){
    const [UserLogin, setUserLogin] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken')
:null )









    return <userContext.Provider value={{UserLogin,setUserLogin}}>
        {props.children}

    </userContext.Provider>

}