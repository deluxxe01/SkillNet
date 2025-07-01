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
  
  const corSelecionada = dados.corSelecionada || localStorage.getItem('corSelecionada') || 'default';

  const imagensFundo = {
    rosa: 'public/images/fundoRosa2 (1).png',
    azul: 'public/images/fundoazul.png',
    verde: 'public/images/fundoverde.png',
    default: 'public/images/fundoRosa2 (1).png',
  };

  return (

    <div className="containerr">

     <img src={imagensFundo[corSelecionada]} alt="ImagemFundo" />

    <Hamburger />
  <div className="Container-PortfolioEditar">

    <h1 className="Title-EditarPortfolio">Criar Portfólio</h1>
    <div className={`linha1 ${corSelecionada ? `linha-${corSelecionada}` : ''}`}></div>

    <div className={`Formulario ${corSelecionada ? `formulario-${corSelecionada}` : ''}`}>


    <div className='fotoUsuario'>
    {dados.foto_url ? (
            <img
              src={dados.foto_url}
              alt="Foto do portfólio"
              style={{
                width: "15vh",
                height: "15vh",
                objectFit: "cover",
                borderRadius: "10vh",
              }}
            />
          ) : (
            <p>Foto não disponível</p>
          )}
      </div>
        
        <div className='DivLocalidade'>

       <p className='AreaText'>Localidade:</p>
       <p className='LocalidadeFont'>{dados.localidade}</p>

       </div>
    <div className="ContainerButtons">
         <button 
         className={`buttonOutraTela ${corSelecionada ? `buttonOutra-${corSelecionada}` : ''}`}
         onClick={irParaOutraPagina}>
         Editar 
         </button>
    </div>  
    

    <div className='Container-um'>

     <h1 className='NameH1'>{dados.nome}</h1>
     
     <div className='IconsContainer'>

     <a href={dados.link_linkedin} target="_blank" rel="noopener noreferrer">
     <img 
     src="public/icons/linkedin.png"
     alt="" 
     style={{
      width: "5vh",
      height: "5vh",
      objectFit: "cover",
      borderRadius: "10vh",
    }}/>
</a>

<a href={dados.link_insta} target="_blank" rel="noopener noreferrer">
   <img 
     src="public/icons/mdi_instagram.svg"
     alt="" 
     style={{
      width: "5vh",
      height: "5vh",
      objectFit: "cover",
      borderRadius: "10vh",
    }}/>
</a>


<a href={dados.link_gmail} target="_blank" rel="noopener noreferrer">
<img 
     src="public/icons/gamil 1.svg"
     alt="" 
     style={{
      width: "5vh",
      height: "5vh",
      objectFit: "cover",
      borderRadius: "10vh",
    }}/>
</a>

     </div>

  <div className='ButonContainer'>
  <button className={`CompartilharButton ${corSelecionada ? `buttonCompartilhar-${corSelecionada}` : ''}`}>Compartilhar</button>
  </div>

<div className='TextContainer'>
  <div className='TextUni'>
  <p className='AreaText'>Tempo de Experiência:</p>
  <p className='DadosTransferidos'>{dados.ano_experiencia}</p>
  </div>

  <div className='TextUni'>
  <p className='AreaText'>Área de Atuação:</p>
  <p className='DadosTransferidos'>{dados.area_atuacao}</p>
  </div>
</div>
     </div>

     </div>

    </div>


<div className="ConatineSobremim">
      
        <h2 className={`LabelSobremim ${corSelecionada ? `label-${corSelecionada}` : ''}`}>Sobre Mim</h2>
        <textarea value={dados.sobremim || ''}
          readOnly
        className={`TextArea-Formulario ${corSelecionada ? `textArea-${corSelecionada}` : ''}`}
         />

</div>
     

  </div>
  
  );
}

export default Portfolio;