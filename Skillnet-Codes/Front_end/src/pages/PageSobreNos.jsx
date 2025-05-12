import React from 'react'
import './PageSobreNos.css'
import Header from '../components/Header'

function PageSobreNos() {
  return (
    <div className='container_sobreNos'>
        <Header />
        <h1 className='H1Sobrenos'>Sobre Nós</h1>
        <div className='conteiner_infos'>
          <div className='contaiener_P'>
            <p className='pSobre2'>A SkillNet é uma startup para freelancers e empresas formada por quatro estudantes do SENAI, especializados em design, programação, marketing digital e produção de conteúdo. </p>
          </div>
          <div className='contaiener_P'>
            <p className='pSobre'>  Oferecemos soluções criativas e acessíveis para empresas e empreendedores, garantindo entregas de qualidade para diversos tipos de projetos.</p>
          </div>
        </div>
        <div className='divSobreNos'>
          <h1>Objetivos e Propósitos</h1>
        </div>
        
        
    </div>
  )
}

export default PageSobreNos
