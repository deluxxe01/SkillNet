import React from 'react'
import './PostComent.css'
function PostComent() {
  return (
     <div className="overlay-comentServico">
      <div className="container-comentServico">
        <p className="titulo-comentServico">Escreva seu comentario:</p>
        <textarea className="textarea-comentServico" rows="4" />
        <div className="botoes-comentServico">
          <button className="btn-comentServico-outline" onClick={onAddComment}>Adicionar comentario</button>
          <button className="btn-comentServico-filled" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default PostComent