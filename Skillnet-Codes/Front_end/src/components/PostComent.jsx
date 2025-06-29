import React, { useState } from 'react'
import './PostComent.css'
import Estrelas from './Estrelas'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import axios from 'axios'

function PostComent({fk_id_servico, showModal}) {

  const [inptComent,setInptComent]=useState()

  const {userLogado} = useContext(GlobalContext)

  async function mandarComment (){
      let comment = {
        comentario:inptComent,
        id_usuario:userLogado.id_usuario,
        id_servico:fk_id_servico,
        estrelas:4
      }
      const resultado = await axios.post('/api/postComentarioServico',comment)
      setInptComent('')
      showModal()

  }

  return (
     <div className="overlay-comentServico">
      <div className="container-comentServico">
        <p className="titulo-comentServico">Escreva seu comentario:</p>
        <textarea className="textarea-comentServico" rows="4" value={inptComent}  onChange={(e)=>{
         setInptComent(e.target.value)
        }}/>
        <div className="botoes-comentServico">
          <button className="btn-comentServico-outline" onClick={mandarComment}  >Adicionar comentario</button>
          <button className="btn-comentServico-filled" onClick={showModal}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default PostComent