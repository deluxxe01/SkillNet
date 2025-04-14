import { Children,createContext,useContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])
    
    return(
        <GlobalContext.Provider value={{
            chat,
            setChat
            // aqui vai as variaves pro resto da aplicação
        }} >
            {children}

        </GlobalContext.Provider>
        
    )
}