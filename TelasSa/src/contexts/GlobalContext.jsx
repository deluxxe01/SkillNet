import { createContext, useState } from "react";

export const GlobalContext = createContext()
export const GlobalContextProvider = ({children}) => {


    const [usuarioLogado, setUsuarioLogado] = useState('Gill Bates')
    let idadeUsuario = '55'

    const [imagensPort, setImagensPort] = useState([
        {
            id: 1,
            img: 'https://preview.redd.it/meu-gato-%C3%A9-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.jpg?width=640&crop=smart&auto=webp&s=52de2578fe227e639db822d551bba33c6d28a2f1'
        },
        {
            id: 2,
            img: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img648efbd5b00b28.10275519.jpg?lastEdited=1687092187&w=600&h=600&f=webp'
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRICJntjQCYdSblUDurLcUCtrbei788JC3Q&s'
        },
        {
            id: 4,
            img: 'https://preview.redd.it/meu-gato-%C3%A9-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.jpg?width=640&crop=smart&auto=webp&s=52de2578fe227e639db822d551bba33c6d28a2f1'
        },
        {
            id: 5,
            img: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img648efbd5b00b28.10275519.jpg?lastEdited=1687092187&w=600&h=600&f=webp'
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRICJntjQCYdSblUDurLcUCtrbei788JC3Q&s'
        },
        
    ])

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            imagensPort,
            setImagensPort
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
