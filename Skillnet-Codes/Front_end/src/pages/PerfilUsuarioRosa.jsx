import React from 'react'
import "./PerfilUsuarioRosa.css"

function PerfilUsuarioRosa() {
  return (
    <div className='PerfilUsuarioRosa-Container'>


        <div class="hamburguer" id="hamburguer">
            <img src="logoverdeescuro.png" alt="Logo" class="logo-img"/> 
        </div>

        <div class="menu" id="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>

      <div className='Header-InformacoesUsuarioRosa'>
       
       <div className='Header1-InformacoesUsuarioRosa'>

           <h1 className='NomeUsuarioRosa'>Giovanna da Costa Carvalho</h1> 

           <a href="https://web.whatsapp.com/" target="_blank"> 
           <img src="whatssap 1.svg" alt="" width="200"/> </a>

           <a href="https://web.whatsapp.com/" target="_blank"> 
           <img src="whatssap 1.svg" alt="" width="200"/> </a>

           <a href="https://web.whatsapp.com/" target="_blank"> 
           <img src="whatssap 1.svg" alt="" width="200"/> </a>
 
           <button className='Button-CompartilharUsuarioRosa'> compartilhar <img src="share2.svg"/></button>
           <button className='Button-ContratarUsuarioRosa'> contrate</button>

           <label className='Label-ExperienciaUsuarioRosa' htmlFor="">Experiência: </label> <label  className= 'Label-AnoExperiencia' htmlFor="">3 anos</label>
 
       </div>

       <div className='Header2-InformacoesUsuarioRosa'>

          <div className='CirculoImagemPerfil'></div>

          <label className='Label-Pais' htmlFor=""> Brasil</label>
          <label className='Label-Estado' htmlFor=""> SP</label>
       </div>

       <div className='Header3-InformacoesUsuarioRosa'>

       <button className='Button-EditarPerfil'> 
        Editar Perfil</button>

    <div className='CategoriasUsuario'>
        <button className='Button-CategoriaPerfil'> 
        Design gráfico</button>

        <button className='Button-CategoriaPerfil'> 
        Desenvoledor web</button>

        <button className='Button-CategoriaPerfil'> 
        Marketing</button>
    </div>
       </div>

      </div>


       {/* <div className='ContainerFundoRosa'> 
       
       </div> */}
    </div>
  )
}

export default PerfilUsuarioRosa