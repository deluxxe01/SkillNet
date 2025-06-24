import React from 'react'
import './PageSobreNos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PageSobreNos() {
  return ( 
  <div className="about-container">
   <Header />
   <div className='containerH1Nos'>
    <h1 className='h1Sobrenos'>Sobre Nós</h1>
    <div className='containerH2SobreNos'>
      <h2 className='h2Sobrenos'>A SkillNet é uma startup para freelancers e empresas formada por três estudantes do SENAI, especializados em design, programação, marketing digital e produção de conteúdo. </h2>
      <h2 className='h2Sobrenos'>Oferecemos soluções criativas e acessíveis para empresas e empreendedores, garantindo entregas de qualidade para diversos tipos de projetos.</h2>
    </div>
   </div>
    <div className='containerSobreNos'>
      <div>
        <img className='imgSobrenos' src="./images/bemsa.png" alt="" />
      </div>
      <div className='containerPaiAbsolute'>
        <div className='containerPaiSobreNos'>
          <div>
           <h1 className='h1Objetivo'>Objetivos e Propósitos</h1>
           <div className='divImg'>oi</div>
          </div>
          <div className='containerPsobreNos'>
            <div className='containerPsobreNos2'>
              <section className='sectionSobreNos'>
                <div>
                    <div>
                      <span className='spanP'> Oferecer soluções criativas e acessíveis</span> 
                      <p className='pSobrenos'>
                        Proporcionar soluções inovadoras e acessíveis para empresas e empreendedores.
                      </p>
                    </div>
                    <div>
                      <span className='spanP'> Garantir entregas de qualidade</span> 
                      <p className='pSobrenos'>
                    
                      Assegurar a qualidade nas entregas de diversos tipos de projetos
                      </p>
                  </div>
                </div>
                 <img className='imgColunaSobreNos' src="./images/colunaSobrenos.png" alt="" />
              </section>
            </div>
          </div>
        </div>
        <div>
         
        </div>
      </div>
      <div></div>
    </div>
   <Footer />
</div>
)
}

export default PageSobreNos
