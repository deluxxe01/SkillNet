import React, { useContext, useState,useEffect } from 'react'
import CaixaTexto from '../components/CaixaTexto.Jsx'
import { io } from 'socket.io-client'
import { GlobalContext } from '../context/Globalcontext'


function TrabalhoEscolhido() {
    const [modal,setModal]=useState(true)
    const {chat,setChat}=useContext(GlobalContext)
    
  
  return (
    <div>
       <button  className="btnCadastro" onClick={()=>{setModal(!modal)}}>abrir chat</button>
       
       
        {modal && <CaixaTexto mensagem={chat} />}
        
        
    
     
      
    </div>
  )
}

export default TrabalhoEscolhido
