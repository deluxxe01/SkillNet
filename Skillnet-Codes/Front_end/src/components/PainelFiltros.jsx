import React from 'react'
import "./PainelFiltros.css"

function PainelFiltros() {
  return (
    <div>
         <div className='conteinerIcons'>
          <div className='conteinerIcon'>
            <img src="./icons/icon_pc.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>DESENVOLVIMENTO WEB</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/icon_marketing.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>MARKETING</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/icon_grafico.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>DESIGN GRÁFICO</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/icon_lapis.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>PRODUÇÃO DE CONTEÚDOS</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/icon_camera.svg" alt="" className='imgPainelFiltor' /> 
            <p className='pFilter'>FOTOGRAFIA E VIDEO</p>
          </div>
        </div>
      
    </div>
  )
}

export default PainelFiltros
