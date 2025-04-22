import React from 'react'
import './LandingPage.css'
import PainelFiltros from '../components/PainelFiltros'



function LandingPage() {
  return (
    <div className='containerLanding'>
      <div>
       

      </div>
      <div className='container1'>
        <div className='header'>
          <button className='btnLanding'>SERVIÇOS</button>
          <button className='btnLanding'>PORTFÓLIOS</button>
          <img src="./images/logo_SkillNet.svg" alt="" />
          <button className='btnLanding'>SOBRE NÓS</button>
          <button className='btnLanding'>PERFIL</button>

        </div>
      
        <div className='conteinerTitulo'>
          <h1 className='h1TituloLanding'>Conecte-se com os melhores <br/> freelancers e alcance seus objetivos.</h1>
        </div>
        <div className='conteinerText'>
          <p className='pLanding'>Encontre o profissional ideal para o <br/> seu projeto ou exiba suas <br/> habilidades e conquiste novos <br/> clientes.</p>
        </div>
        <div className='divButton'>
          <button className='button1'>INICIAR SESSÃO</button>
          <button className='button2'>COMEÇAR</button>
          <img src="./images/mulher-empresaria.svg" alt="" className='imgEmpresaria' />
        </div>

      </div>
      <div className='conteiner2'>
        <PainelFiltros />
       
        
      </div>
      <div className='conteiner3'>

      </div>
      

    </div>
    
    
    
    
    
    
    
  )
}

export default LandingPage