import { Children,createContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    
    return(
        <GlobalContext.Provider value={{
            // aqui vai as variaves pro resto da aplicação
        }} >
            {children}

        </GlobalContext.Provider>
        
    )
}