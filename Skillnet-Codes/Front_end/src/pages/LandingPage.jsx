import React from 'react'
import './LandingPage.css'
import PainelFiltros from '../components/PainelFiltros'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'


function LandingPage() {
  return (
    <div className='containerLanding'>
    
      <div className='container1'>
        <div className='header'>
         <Header />
        </div>
      
        <div className='conteinerTitulo'>
          <h1 className='h1TituloLanding'>Conecte-se com os melhores <br/> freelancers e alcance seus objetivos.</h1>
        </div>
        <div className='conteinerText'>
          <p className='pLanding'>Encontre o profissional ideal para o <br/> seu projeto ou exiba suas <br/> habilidades e conquiste novos <br/> clientes.</p>
        </div>
        <div className='divButton'>
          <Button conteudo="INICIAR SESSÃO" local={'/cadastro'} />
          <Button conteudo="COMEÇAR" local={'/login'} />
          <img src="./images/mulher-empresaria.svg" alt="" className='imgEmpresaria' />
        </div>

      </div>
      <div className='conteiner2'>
        <div className='containerPainel'>
         <PainelFiltros />
        </div>
        <div className='containerTiposServico'>
          <div className='containerCabecalho'>
            <h1 className='h1Landing'>SKILLNET</h1>
            <h2 className='h2Landing'>Tudo o que você encontra aqui: </h2>
            <img src='./icons/logo_skill_net_verde.svg' className='logoLanding'/>
          </div>
          <div className='containerConteudos'>
            <div className='contaierContEspecifico'>
              <img src="./images/fogoVerde.svg" alt="" />
              <h3 className='h3Cont'>Portfólios</h3>
              <p className='pCont'>Crie e poste seu portfólio para mais  <br /> pessoas verem </p>
            </div>
            <div className='contaierContEspecifico'>
              <img src="./images/estrelaVerde.svg" alt="" />
              <h3 className='h3Cont'>Avaliações</h3>
              <p className='pCont'>Avalie serviços com sistema de <br /> feedback e adcionar aos <br />  favoritos</p>
            </div>
            <div className='contaierContEspecifico'>
              <img src="./images/raioVerde.svg" alt="" />
              <h3 className='h3Cont'>Serviços</h3>
              <p className='pCont'>Sistema para contratar e <br /> procurar serviços de diversas <br/> áreas</p>
            </div>

          </div>
        </div>
        <div className='containerNumeros'>
          <h1 className='h1Numeros'>
            <span className='spanNumeros'>2000+</span>
            <br/>Serviços</h1>
          <h1 className='h1Numeros'><span className='spanNumeros'>1000+</span> 
          <br/>portifólios</h1>
          <h1 className='h1Numeros'><span className='spanNumeros'>5000+</span>
          <br/>Usuários</h1>
          <h1 className='h1Numeros'><span className='spanNumeros'>3000+</span>
          <br/>Avaliações</h1>
        </div>
        <div className='containerLanding3'>
          <div className='containerMulherLanding'>
            <h2 className='h2Landing'>Transformando ideais em <br />
              <span className='spnLanding'> Obras-primas</span></h2>
              <img src="./images/imgPcSkillnet.svg" alt="" className='imgMulherldp' />
          </div>
          <div>
            <img src="./images/imgCaraLanding.svg" alt="" className='imgCaraLanding' />
          </div>
        </div>
        <div>

        </div>
       
        
      </div>
      <div className='conteiner3'>

      </div>
     <div className='container_Footer_LadingPage'>
     <Footer/>
     </div>
      

    </div>
    
    
    
    
    
    
    
  )
}

export default LandingPage