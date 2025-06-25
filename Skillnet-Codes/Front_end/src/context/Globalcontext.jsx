import { Children,createContext,useContext,useEffect,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])

    const [userLogado,setUserLogado]=useState()

    const [cadastroServico,setCadastroServico]=useState([])
    
    return(
        <GlobalContext.Provider value={{
            userLogado,
            setUserLogado,
            cadastroServico,
            setCadastroServico
            // aqui vai as variaves pro resto da aplicação
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       }} >
            {children}

        </GlobalContext.Provider>
        
    )
}