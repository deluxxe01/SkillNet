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
      <div className='containerImgSobrenos'>
        <img className='imgSobrenos' src="./images/mulherSobrenos.png" alt="" />
      </div>
      <div className='containerPaiAbsolute'>
        <div className='containerPaiSobreNos'>
          <div>
           <h1 className='h1Objetivo'>Objetivos e Propósitos</h1>
           <div className='divImg'>
            <img src="./images/telaFigmaHome.png" alt="" />
           </div>
          </div>
          <div className='containerPsobreNos'>
            <div className='containerPsobreNos2'>
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
            </div>
          
        </div>
        <div className='containerSobreNos2'>
          <div className='containerColunaInfos'>
          <img className='imgColunaSobreNos' src="./images/colunaSobrenos.png" alt="" />
            <div>
              <div>
                  <span className='spanP'> Simplificar a experiência do usuário</span> 
                      <p className='pSobrenos'>
                      Criar uma interface organizada e eficiente, eliminando dificuldades na navegação.
                        </p>
              </div>
              <div>
                  <span className='spanP'>Facilitar a busca por freelancers</span> 
                    <p className='pSobrenos'>
                    Tornar a busca por freelancers rápida e prática, permitindo que o usuário encontre exatamente o que precisa com poucos cliques.
                      </p>
                </div>
            </div>
          </div>
          <div>
              <img src="./images/imgSobreNosLading.png" alt="" className='imgSobreNosLading' />
          </div>
          </div>
      </div>
      <div className='containerEquipes'>
        <h1 className='h1Equipe'>Equipes</h1>
        <h2 className='h1Equipe'>Conheça as colaborações de cada um</h2>
        <div className='containerIntegrantes'>
          <div className='containerCaio'>
            <div className='containerImgCaio'>
              <a href="https://github.com/caiolorramvalente"><img src="./icons/iconGit.png" alt="" className='iconSobreNos' /></a>
              <a href="https://www.linkedin.com/in/caio-lorram-valente-52523334b/"><img src="./icons/iconLinkdin.png" alt="" className='iconSobreNos' /></a>
              <img src="./icons/iconInsta.png" alt=""  className='iconSobreNos'/>
              
            </div>
            <h3 className='h3Equipe'>Responsável pelo desenvolvimento do chatentre freelancer e cliente, além de ter implementado o CRUD de usuários.</h3>

          </div>

          <div className='containerVitor'>
          <div className='containerImgVitor'>
              <img src="./icons/iconGit.png" alt="" className='iconSobreNos' />
              <img src="./icons/iconLinkdin.png" alt="" className='iconSobreNos' />
              <img src="./icons/iconInsta.png" alt=""  className='iconSobreNos'/>
              
            </div>
            <h3 className='h3Equipe'>Responsavél por design e front-end.</h3>
          </div>
          <div className='containerMaria'>
          <div className='containerImgMaria'>
              <img src="./icons/iconGit.png" alt="" className='iconSobreNos' />
              <img src="./icons/iconLinkdin.png" alt="" className='iconSobreNos' />
              <img src="./icons/iconInsta.png" alt=""  className='iconSobreNos'/>
            </div>
            <h3 className='h3Equipe'>Responsavél pela estilização, e crud de portfolio</h3>
          </div>
        </div>
      </div>
    </div>
   <Footer />
</div>
)
}

export default PageSobreNos
