import React from 'react'
import "./PerfilUsuarioRosa.css"

function PerfilUsuarioRosa() {
  return (
    <div className='PerfilUsuarioRosa-Container'>

      <div className='Header-InformacoesUsuarioRosa'>
       
       <div className='Header1-InformacoesUsuarioRosa'>

           <h1 className='NomeUsuarioRosa'>Giovanna da Costa Carvalho</h1> 
           <img src="./public/whatssap.png" alt="" />
           <img src="./public/whatssap.png" alt="" />
           <img src="./public/whatssap.png" alt="" />
           <button className='Button-CompartilharUsuarioRosa'>share</button>
           <button className='Button-ContratarUsuarioRosa'> contrate</button>
            <label className='Label-ExperienciaUsuarioRosa' htmlFor="">Experiência: </label> <label htmlFor="">3 anos</label>

       </div>

       <div className='Header2-InformacoesUsuarioRosa'>

          <div className='CirculoImagemPerfil'></div>

       </div>

       <div className='Header3-InformacoesUsuarioRosa'>


       </div>

      </div>

    </div>
  )
}

export default PerfilUsuarioRosa