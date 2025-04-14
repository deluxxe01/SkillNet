import React, { useEffect } from 'react'
import './LadingPage_Um.css'
import './Header.jsx'
import Header from './Header.jsx'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/Globalcontext.jsx'
import { useContext } from 'react'
import { io } from 'socket.io-client'



function LadingPage_Um() {
  const navigate = useNavigate()

  const {chat,setChat}=useContext(GlobalContext)

  

  const Chat = ()=>{
    const socket =  io('http://localhost:3100',{ 
      transports: ['websocket']
    })

    socket.on('connect', () => {
      console.log('✅ Conectado ao servidor Socket.io');
    });

    socket.on( "mensagemRecebida", data => {

      setChat([...chat,data])

      console.log(chat)
      console.log(data)
    })
    let mensagem = {
      "nome":"caio",
      "mess":"vai toma no cu "

    }

    socket.emit('mandarMensagem',mensagem)
  }

  useEffect(()=>{
    Chat()

  },[])
  return (
    <div>
         <Header />
        <div className='div'>
         <div>
            <h1 className='h1TitleLanding'>
               <span className='spanTitleLanding'> Conecte-se com os melhores</span><br />freelancers e alcance seus objetivos. 
          
            </h1>
         </div>
         <div className='containerH3'>
          <h3 className='h3Landing'>Encontre o profissional ideal para o seu projeto ou <br /> exiba suas habilidades e conquiste novos clientes.</h3>
         </div>
         <div>
          <button className='btnLanding1' onClick={()=>{navigate("/Cadastro")}}>Iniciar Sessão</button>
          <button className='btnLanding2' onClick={()=>{
            navigate('/login')
          }}>Começar</button>
         </div>
        </div>
    </div>
  )
}

export default LadingPage_Um