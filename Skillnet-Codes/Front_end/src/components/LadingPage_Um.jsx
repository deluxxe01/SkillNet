import React from 'react'
import './LadingPage_Um.css'
import './Header.jsx'
import Header from './Header.jsx'

function LadingPage_Um() {
  return (
    <div>
         <Header />
        <div className='div'>
         <div>
            <h1 className='h1TitleLanding'>
              <span className='spanTitleLanding'> Conecte-se com os melhores</span><br />freelancers e alcance seus objetivos.
            </h1>
         </div>
         <div className='containerH3'>
          <h3 className='h3Landing'>Encontre o profissional ideal para o seu projeto ou <br /> exiba suas habilidades e conquiste novos clientes.</h3>
         </div>
         <div>
          <button className='btnLanding1'>Iniciar Sessão</button>
          <button className='btnLanding2'>Começar</button>
         </div>
        </div>
    </div>
  )
}

export default LadingPage_Um