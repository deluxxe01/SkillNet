import React, { useContext, useState,useEffect } from 'react'
import CaixaTexto from '../components/CaixaTexto.Jsx'
import { io } from 'socket.io-client'
import { GlobalContext } from '../context/Globalcontext'


function TrabalhoEscolhido() {
    const [modal,setModal]=useState(true)
    const {chat,setChat}=useContext(GlobalContext)
    const[inptNome,setInptNome]=useState()
    
  
  return (
    <div>
       <button  className="btnCadastro" onClick={()=>{setModal(!modal)}}>abrir chat</button>
        {modal && <CaixaTexto autor={inptNome} />} 
        
        <input type="text" onChange={(e) =>{setInptNome(e.target.value)}} />
        <button>seu nome</button>
    </div>
  )
}

export default TrabalhoEscolhido
