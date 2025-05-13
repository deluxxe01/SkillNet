import { Children,createContext,useContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])
<<<<<<< HEAD
    const [userLogado,setUserLogado]=useState({
    id:1,
    nome:"sdfsd",
    email:"ds",
    senha:"sgfdg"
    })
=======
    const [userLogado,setUserLogado]=useState({})
>>>>>>> 5901478b42eebeb746b6e6d7c68ecf817ddcd0fa


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