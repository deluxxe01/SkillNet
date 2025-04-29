import React, { useContext, useEffect, useRef, useState } from 'react'
import './CaixaTexto.css'
import { io } from 'socket.io-client'
import { GlobalContext } from '../context/Globalcontext'
import  axios from 'axios'


function CaixaTexto(props) {
  const socket = io('http://localhost:3000', { transports: ['websocket'] })
    const [inptMess,setInptMess]=useState('')
    const {mensagem} = props
    const {chat,setChat}=useContext(GlobalContext)
    const[teste,setTeste]=useState([])
    const [vetorChat,setVetorChat]=useState([])
    const socketRef=useRef(null)
    

    
    
    const MandarMensage = () => {
     if(inptMess==""){
      alert('insira a messagem')

    }else{

        let data = new Date();
        // Pega as horas e minutos
        let horas = data.getHours().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
        let minutos = data.getMinutes().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário

        // Exibe no formato HH:mm
        let horaEminuto = `${horas}:${minutos}`;

       
       let mensagem = {
         nome:props.autor,
         mess:inptMess,
         horario:horaEminuto
         
       }
       
       socket.emit('mandarMensagem',mensagem)
       setInptMess("")

     }
      
      
      
    }  
    // const renderMessage = async() =>{
    //  const resultado = await axios.get('http://localhost:3000/Mensagens') 
    //  setChat(resultado.data)
    // }
    useEffect(()=>{
      if(!socketRef.current){
        socketRef.current=io('http://localhost:3000', { transports: ['websocket'] })
        socketRef.current.on('connect', () => {
          console.log('Conectado ao servidor!');
        });
  
        socketRef.current.on('disconnect', () => {
          console.log('Desconectado do servidor');
        });
  
        socketRef.current.on('connect_error', (err) => {
          console.log('Erro na conexão:', err);
        });
  
        socketRef.current.on('reconnect', (attempt) => {
          console.log('Reconectando, tentativa', attempt);
        });
  
        socketRef.current.on('reconnect_error', (err) => {
          console.log('Erro ao tentar reconectar:', err);
        });
  
        socketRef.current.on('mensagemRecebida', (data) => {
          setChat(data);
        })
      }
      })
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
                  <p>{msg.mess} <span className='spamChat' style={{color:msg.nome!=props.autor ?" #46553C":"#9CB988"}}>{msg.horario}</span></p> 
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
