import { createContext, useState } from "react";

 export let context = createContext()

 export default function  ContextProvider(props){

    const [counter, setcounter] = useState(0)

    return <context.Provider value={{counter}}>
             {props.children}
    </context.Provider>
 }
 



