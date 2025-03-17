import React from 'react'
import './Landingpage_Tres.css'

function Landingpage_Tres() {
  return (
    <div>
        <div className='containerLanding3'>
            <div className='containerImage'>
                <div className='containerH2'>
                    <h2 className='tituloH2'><span className='spanH2'>A</span> <span className='spanVerde'>solução ideal</span> <br /> para seu <span className='spanVerde'>Projeto</span><br /> está a apenas <br /> um <span className='spanVerde'>clique de <br /> distância</span></h2>
                </div>
                <img className='imgWork' src="./images/img_landing3.png" alt="" />
            </div>
            <div className='containerImage2'>
                <div className='containerH2Titulo'>
                    <h2 className='tituloH2'><span className='spanH2_2'>Transforme suas <br /> ideias</span> em Realidade  <br />com <span className='spanVerde'>soluções <br /> criativas </span>e <br />personalizadas</h2>
                </div>
                <img className='imgWork' src="./images/imgLanding.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Landingpage_Tres