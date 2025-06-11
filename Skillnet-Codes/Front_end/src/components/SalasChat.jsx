import React from 'react'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import { useState } from 'react'
import './salasChat.css'

const socket = io("http://localhost:3000")
function SalasChat() {
    const {userLogado,setUserlogado}=useContext(GlobalContext)
    const [salasUser,setSalasUser]=useState([])



    useEffect(( )=> {

        socket.emit('salasUsuario',({id_usuario:userLogado.id_usuario}),(resposta)=>{

            console.log('salas do usuario',resposta)
            console.log("sala",resposta.salas)
          
            setSalasUser(resposta.salas)
            

        })

        



    },[])

  return (
    <div className='containerPaiContatos'>
          <div>{salasUser.map((sala,)=>(
            <div className='containerContatos'> 
              <p key={sala.id_sala} className='pContatos'>{userLogado.nome==sala.nomeuser1?sala.nomeuser2:sala.nomeuser1}</p>
            </div>


        ))}</div> 
         
    </div>
  )
}

export default SalasChat
