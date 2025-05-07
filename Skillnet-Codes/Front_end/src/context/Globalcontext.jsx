import { Children,createContext,useContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])
    const [userLogado,setUserLogado]=useState({
    nome:"",
    email:"",
    senha:""
    })


    return(
        <GlobalContext.Provider value={{
            chat,
            setChat,
            userLogado,
            setUserLogado
            
            // aqui vai as variaves pro resto da aplicação
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       }} >
            {children}

        </GlobalContext.Provider>
        
    )
}