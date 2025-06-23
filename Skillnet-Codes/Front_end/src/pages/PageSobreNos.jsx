import React from 'react'
import './PageSobreNos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PageSobreNos() {
  return ( <div className="about-container">
 
   <Header />
  {/* Hero Section */}
  <section className="hero">
    <h1>Sobre Nós</h1>
    <div className="hero-text">
      <p>
        A SkillNet é uma startup para freelancers e empresas formada por três estudantes do SENAI,
        especializados em design, programação, marketing digital e produção de conteúdo.
      </p>
      <p>
        Oferecemos soluções criativas e acessíveis para empresas e empreendedores, garantindo entregas
        de qualidade para diversos tipos de projetos.
      </p>
    </div>
    <img src="https://i.imgur.com/hqKjzN5.jpeg" alt="ft nossa" className="hero-img" />
  </section>

  {/* Objetivos */}
  <section className="objectives">
    <h2>Objetivos e Propósitos</h2>
    <div className="cards">
      <div className="card">
        <h3>Oferecer soluções criativas e acessíveis</h3>
        <p>Proporcionar soluções inovadoras e acessíveis para empresas e empreendedores.</p>
      </div>
      <div className="card">
        <h3>Garantir entregas de qualidade</h3>
        <p>Assegurar a qualidade nas entregas de diversos tipos de projetos.</p>
      </div>
      <div className="card">
        <h3>Simplificar a experiência do usuário</h3>
        <p>Criar uma interface organizada e eficiente, eliminando dificuldades na navegação.</p>
      </div>
      <div className="card">
        <h3>Facilitar a busca por freelancers</h3>
        <p>Permitir que o usuário encontre exatamente o que precisa com poucos cliques.</p>
      </div>
    </div>
  </section>

  {/* Equipe */}
  <section className="team">
    <h2>Equipe</h2>
    <p>Conheça as colaborações de cada um</p>
    <div className="team-cards">
      {['cat', 'dog1', 'dog2'].map((img, index) => (
        <div className="team-member" key={index}>
          <img
            src={`https://placekitten.com/200/200?image=${index + 1}`}
            alt="Membro da equipe"
          />
          <div className="socials">🐱 🧑‍💻 📸</div>
          <p>Responsável por design e front-end.</p>
        </div>
      ))}
    </div>
  </section>

<Footer />
</div>
)
}

export default PageSobreNos
