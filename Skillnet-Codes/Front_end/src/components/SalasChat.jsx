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
    const [inptMenssagen,setInptMenssagen]=useState()
    const [salasUser,setSalasUser]=useState([])
    const [arrayMess,setArrayMess]=useState([])
    const [salaSelecionada,setSalaSelecionada]=useState('')



    useEffect(( )=> {

        socket.emit('salasUsuario',({id_usuario:userLogado.id_usuario}),(resposta)=>{

            console.log('salas do usuario',resposta)
            console.log("sala",resposta.salas)
          
            setSalasUser(resposta.salas)
            

        })

        



    },[])
    function mandarMess(){

        let data = new Date();
        // Pega as horas e minutos
        let horas = data.getHours().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
        let minutos = data.getMinutes().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário

        // Exibe no formato HH:mm
        let horaEminuto = `${horas}:${minutos}`;

      let mensagen={
        menssagen:inptMenssagen,
        horas:horaEminuto,
        fk_id_usuario:userLogado.id_usuario,
        id_sala:salaSelecionada

      }

      socket.emit('menssagens',({mensagen}),(resposta)=>{
        
        setArrayMess([...arrayMess,resposta.mensagens])
        console.log('vetor',arrayMess)
      })
      setInptMenssagen('')


    }

     function selecionarSala(id_sala) {
    setSalaSelecionada(id_sala)
    setArrayMess([]) // limpar mensagens antigas

    socket.emit('salas', id_sala, (resposta) => {
      console.log('Entrou na sala', resposta)
    })
  }

  function menssagens(id_sala){
    socket.emit('puxarMenssagen',({id_sala}),(resposta)=>{

      console.log(resposta)

       setArrayMess(resposta.res)

    })
  }

  return (
    <div className='containerPaiContatos'>
      <div>
          <div>{salasUser.map((sala,)=>(
            <div className='containerContatos' onClick={()=>{selecionarSala(sala.id_sala)
              menssagens(sala.id_sala)
            }} key={sala.id_sala}> 
            <img src="./icons/iconUserChat.svg" alt="" className='iconUserChat' />
              <p key={sala.id_sala} className='pContatos' >{userLogado.nome==sala.nomeuser1?sala.nomeuser2:sala.nomeuser1}</p>
            </div>


        ))}</div> 
         </div>
<div className='divChat'>
  <div className='corpoChat2'>
    {arrayMess.map(mess =>(
      <div className='CaixaMensagem' style={{
                  backgroundColor:mess.fk_id_usuario != userLogado.id_usuario ? '#83CF41' : '#004B22',
                  marginRight:mess.fk_id_usuario != userLogado.id_usuario?"50%" :"-50%",
                  marginLeft:mess.fk_id_usuario != userLogado.id_usuario ?"10px":"-10px"}}>
        <p className=''>{mess.menssagen}</p>
        <p className='spamChat'>{mess.horas}</p>
      </div>
    ))}
  </div>
  <div className='footerChat'>
    <input
      type="text"
      className='submitText'
      value={inptMenssagen}
      onChange={(e)=>{setInptMenssagen(e.target.value)}}
    />
    <button onClick={mandarMess} className='buttonChat'>  <img src="./icons/seta.svg" alt="" /></button>
  </div>
</div>
    </div>
  )
}

export default SalasChat
