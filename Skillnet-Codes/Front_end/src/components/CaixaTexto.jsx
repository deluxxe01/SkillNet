import React, { useState } from 'react'
import './CaixaTexto.css'
import { io } from 'socket.io-client'

function CaixaTexto(props) {
    const [inptMess,setInptMess]=useState('')

    const MandarMensage = () => {
        const socket =  io('http://localhost:3100',{ 
            transports: ['websocket']
          })

          let mensagem = {
            nome:"caio",
            mess:inptMess
      
          }
         
              socket.emit('mandarMensagem',mensagem)

    }  
  return (
    <div>
        <div className='caixa_Texto'>
            <div className='FotosServico'>
              <img className='fotoUser' src="https://s2-ge.glbimg.com/yOQvgQTHWNc03I31rDXdpqEl3Bk=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/E/H/KrKNwMTHAiA2EPCOwCmw/whatsapp-image-2022-09-20-at-17.36.10.jpeg" alt="" />
               <p className='pNomeAutor'>BoraBillson da silva</p>
            </div>
            <div className='corpoChat'>
             <div className='conteiner_inp_btn'>
                <input type="text" className='submitText' onChange={e => {setInptMess(e.target.value)}} />
                <button className='btnEnv' onClick={MandarMensage}>
                    <img src="./icons/seta.svg" alt="" />
                </button>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default CaixaTexto
