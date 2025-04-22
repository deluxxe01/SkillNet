import React from 'react'
import "./PainelFiltros.css"

function PainelFiltros() {
  return (
    <div>
         <div className='conteinerIcons'>
          <div className='conteinerIcon'>
            <img src="./icons/iconPc.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>DESENVOLVIMENTO WEB</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/MegaFone.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>MARKETING</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/iconLampada.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>DESIGN GRÁFICO</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/iconFolha.svg" alt="" className='imgPainelFiltor' />
            <p className='pFilter'>PRODUÇÃO DE CONTEÚDOS</p>
          </div>
          <div className='conteinerIcon'>
            <img src="./icons/iconCinema.svg" alt="" className='imgPainelFiltor' /> 
            <p className='pFilter'>FOTOGRAFIA E VIDEO</p>
          </div>
        </div>
      
    </div>
  )
}

export default PainelFiltros
