import { Children,createContext,useContext,useEffect,useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
    const [chat , setChat]=useState([])

    const [userLogado,setUserLogado]=useState(()=>{
            try {
        const userId = localStorage.getItem('user_atual');
        if (!userId) return null;

        const userData = localStorage.getItem(`user_${userId}`);
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        return null;
    }
    })

    const [cadastroServico,setCadastroServico]=useState([])
    useEffect(()=>{
    if(userLogado){
    localStorage.setItem(`user_${userLogado.id_usuario}`, JSON.stringify(userLogado));
    localStorage.setItem('user_atual', userLogado.id_usuario);

    }else{
     const lastId = localStorage.getItem('user_atual');
    if (lastId) localStorage.removeItem(`user_${lastId}`);
    localStorage.removeItem('user_atual');

    }
    },[userLogado])





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