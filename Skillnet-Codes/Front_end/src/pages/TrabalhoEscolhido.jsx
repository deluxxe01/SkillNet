import React, { useContext, useState,useEffect } from 'react'
import CaixaTexto from '../components/CaixaTexto.Jsx'
import { io } from 'socket.io-client'
import { GlobalContext } from '../context/Globalcontext'


function TrabalhoEscolhido() {
    const [modal,setModal]=useState(true)
    const {chat,setChat}=useContext(GlobalContext)
    
    const Rendermensagens = ()=>{
        setChat([])
        const socket =  io('http://localhost:3100',{ 
          transports: ['websocket']
        })
    
        socket.on('connect', () => {
          console.log('✅ Conectado ao servidor Socket.io');
        });
    
        socket.on( "mensagemRecebida", data => {
    
          setChat(data)
          console.log(data)
          console.log(chat)
        })
      }     
    
      useEffect(()=>{
        Rendermensagens()
    
      },[])
  return (
    <div>
       <button  className="btnCadastro" onClick={()=>{setModal(!modal)}}>abrir chat</button>
       
       
        {modal && <CaixaTexto mensagem={chat} />}
        
        
    
     
      
    </div>
  )
}

export default TrabalhoEscolhido
