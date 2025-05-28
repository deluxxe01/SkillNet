import { Children,createContext,useContext,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])
    const [userLogado,setUserLogado]=useState({})
const [cadastroServico,setCadastroServico]=useState([{
titulo: 'sdas',
img:'url',
descrição:'sfdsdgskdghjksh',
area:['blob,blib']
}])




    return(
        <GlobalContext.Provider value={{
            chat,
            setChat,
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