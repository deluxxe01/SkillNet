import React, { useState, useRef, useEffect } from 'react';
import './Portfolio.css';
import Hamburger from "../components/Hamburger";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Portfolio() {

  const location = useLocation();
  const dados = location.state;
  
  console.log("Dados recebidos no Portfolio.jsx:", dados); 

  const navigate = useNavigate()

  const irParaOutraPagina = () =>{
    navigate('/portfolioeditar')
  }
  
  return (

    <div className="containerr">
    


    <Hamburger />
  <div className="Container-PortfolioEditar">

    <h1 className="Title-EditarPortfolio">Criar Portfólio</h1>
    <div className="linha1"></div>

    <div className="Formulario">


    {/* {portfolios.map((portfolio) => (
  <div key={portfolio.id_portifolio} className='fotoUsuario'>
    {portfolio.foto_url && (
      <img
          src={portfolio.foto_url}
          alt="Foto do portfólio"
          style={{ 
          width: "15vh", 
          height: "15vh", 
          objectFit: "cover", 
          borderRadius: "10vh", 
          
        }}
      />
    )}
  </div>
))} */}


<div className="ContainerButtons">

  <div className='cliente'>
      <button 
     className="buttonCadastrar"
     onClick={irParaOutraPagina}>
      Editar </button>

  </div>
  

</div>  
 

    </div>


<div className="ConatinerSobremim">
      
        <h2 >Sobre Mim</h2>
        <textarea 
        className="TextArea"
         />

</div>
     

  </div>
  </div>
  );
}

export default Portfolio;