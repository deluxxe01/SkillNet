import React from 'react'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import { useState } from 'react'

const socket = io("http://localhost:3000")
function SalasChat() {
    const {userLogado,setUserlogado}=useContext(GlobalContext)
    const [salasUser,setSalasUser]=useState('')



    useEffect(( )=> {

        socket.emit('salasUsuario',({id_usuario:userLogado.id_usuario}),(resposta)=>{

            console.log('salas do usuario',resposta)
            setSalasUser(resposta.salas)
            

        })

        



    },[])

  return (
    <div>testezim

         {/* <div>{salasUser.map((sala)=>{

            <p>salas {sa}</p>

        })}</div> */}
         
    </div>
  )
}

export default SalasChat
