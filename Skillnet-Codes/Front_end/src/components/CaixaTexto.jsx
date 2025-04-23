import React, { useContext, useEffect, useState } from 'react'
import './CaixaTexto.css'
import { io } from 'socket.io-client'
import { GlobalContext } from '../context/Globalcontext'
import  axios from 'axios'


function CaixaTexto(props) {
  const socket = io('http://localhost:3100', { transports: ['websocket'] })
    const [inptMess,setInptMess]=useState('')
    const {mensagem} = props
    const {chat,setChat}=useContext(GlobalContext)
    const[teste,setTeste]=useState([])
    const [vetorChat,setVetorChat]=useState([])
    

    
    const MandarMensage = () => {
     
      let mensagem = {
        nome:props.autor,
        mess:inptMess
        
      }
      
      
      socket.emit('mandarMensagem',mensagem)
      setInptMess("")
      
      
    }  
    // const renderMessage = async() =>{
    //  const resultado = await axios.get('http://localhost:3000/Mensagens') 
    //  setChat(resultado.data)
    // }

    useEffect(()=>{
      socket.on('mensagemRecebida', (data) => {
        setChat(data)
      })
  
      // Carregar as mensagens do servidor ao montar o componente
      const renderMessage = async () => {
        const resultado = await axios.get('http://localhost:3000/Mensagens')
        setChat(resultado.data)
      }
  
      renderMessage()

    
      
    },[])
   
  return (
    <div>
        <div className='caixa_Texto'>
            <div className='FotosServico'>
              <img className='fotoUser' src="https://s2-ge.glbimg.com/yOQvgQTHWNc03I31rDXdpqEl3Bk=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/E/H/KrKNwMTHAiA2EPCOwCmw/whatsapp-image-2022-09-20-at-17.36.10.jpeg" alt="" />
               <p className='pNomeAutor'>{props.autor}</p>
            </div>
            <div className='corpoChat'>
               {chat.map((msg ,index)=> (
                <div key={index} className='CaixaMensagem' 
                style={
                  {backgroundColor: msg.nome != props.autor ? '#83CF41' : '#004B22',
                  marginRight:msg.nome != props.autor?"50%" :"-50%",
                  marginLeft:msg.nome !=props.autor ?"10px":"-10px"
                  }}>
                  <p>{msg.mess}</p> 
                  </div>
              ))} 
          </div>
             <div className='conteiner_inp_btn'>
              <input type="text" className='submitText' placeholder='insira sua Mensagem para o frelancer 😊' onChange={e => {setInptMess(e.target.value)}} value={inptMess} />
              <button className='btnEnv' onClick={MandarMensage}>
                <img src="./icons/seta.svg" alt="" />
              </button>
             </div>
        </div>
      
    </div>
  )
}

export default CaixaTexto
