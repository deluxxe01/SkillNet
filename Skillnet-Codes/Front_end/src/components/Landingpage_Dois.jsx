import React from 'react'
import './Landingpage_Dois.css'

function Landingpage_Dois() {
  return (
    <div>
        <div className='containerLanding2'>
            <div className='divTitulos'>
                <h1 className='tituloSkill'>SKILLNET</h1>
                <p className='subTituloSkill'>Tudo o que você encontra aqui:</p>
                <img className='imgLogo' src="./images/LogoVerde.svg" alt="" />
            </div>
            <div className='containerInfo'>
                <div className='divInfos'>
                    <img src="./images/fogoVerde.svg" alt="" className='iconVerde' />
                    <h2 className='titulo'>Portifólios</h2>
                    <p className='infos'>Crie e poste seu portfólio para <br /> mais pessoas verem</p>
                     </div>

                <div className='divInfos'>
                    <img src="./images/estrelaVerde.svg" alt="" className='iconVerde' />
                    <h2 className='titulo'>Avaliações</h2>
                    <p className='infos'>Avaliação de serviços com <br /> sistema de feedback e adcionar <br />    aos  favoritos</p>
                </div>

                <div className='divInfos'>
                   <img src="./images/raioVerde.svg" alt="" className='iconVerde' />
                    <h2 className='titulo'>Serviços</h2>
                    <p className='infos'>Sistema para contratar e procurar <br /> serviços de diversas áreas</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Landingpage_Dois