import React, { useState, useRef, useEffect } from 'react';
import './PortfolioVerde.css';

function PortfolioVerde() {
  // Estado para controlar a visibilidade do menu
  const [menuAtivo, setMenuAtivo] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  // Referências para os carrosséis
  const setaEsquerdaRef = useRef(null);
  const setaDireitaRef = useRef(null);
  const imagensRef = useRef(null);

  const setaComentariosEsquerdaRef = useRef(null);
  const setaComentariosDireitaRef = useRef(null);
  const comentariosRef = useRef(null);

  // Índices dos carrosséis
  let index = 0; // Carrossel de imagens
  const [comentarioIndex, setComentarioIndex] = useState(0); // Carrossel de comentários

  // Função para atualizar o carrossel de imagens
  const atualizarCarrossel = () => {
    if (imagensRef.current) {
      imagensRef.current.style.transform = `translateX(-${index * 600}px)`; // Mover as imagens
    }
  };

  // Função para atualizar o carrossel de comentários
  const atualizarCarrosselComentarios = () => {
    if (comentariosRef.current) {
      comentariosRef.current.style.transform = `translateX(-${comentarioIndex * 600}px)`; // Mover os comentários
    }
  };

  // Efeito para configurar a navegação do carrossel de imagens
  useEffect(() => {
    const setaEsquerda = setaEsquerdaRef.current;
    const setaDireita = setaDireitaRef.current;

    const handleSetaEsquerdaClick = () => {
      if (index > 0) {
        index--;
      } else {
        index = 3; // Volta para o início do carrossel
      }
      atualizarCarrossel();
    };

    const handleSetaDireitaClick = () => {
      if (index < 3) {
        index++;
      } else {
        index = 0; // Volta para o início do carrossel
      }
      atualizarCarrossel();
    };

    if (setaEsquerda) setaEsquerda.addEventListener("click", handleSetaEsquerdaClick);
    if (setaDireita) setaDireita.addEventListener("click", handleSetaDireitaClick);

    return () => {
      if (setaEsquerda) setaEsquerda.removeEventListener("click", handleSetaEsquerdaClick);
      if (setaDireita) setaDireita.removeEventListener("click", handleSetaDireitaClick);
    };
  }, [index]);

  // Efeito para configurar a navegação do carrossel de comentários
  useEffect(() => {
    const setaComentariosEsquerda = setaComentariosEsquerdaRef.current;
    const setaComentariosDireita = setaComentariosDireitaRef.current;

    const handleComentariosSetaEsquerdaClick = () => {
      if (comentarioIndex > 0) {
        setComentarioIndex(comentarioIndex - 1);
      } else {
        setComentarioIndex(3); // Volta para o início do carrossel
      }
      atualizarCarrosselComentarios();
    };

    const handleComentariosSetaDireitaClick = () => {
      if (comentarioIndex < 3) {
        setComentarioIndex(comentarioIndex + 1);
      } else {
        setComentarioIndex(0); // Volta para o início do carrossel
      }
      atualizarCarrosselComentarios();
    };

    if (setaComentariosEsquerda) setaComentariosEsquerda.addEventListener("click", handleComentariosSetaEsquerdaClick);
    if (setaComentariosDireita) setaComentariosDireita.addEventListener("click", handleComentariosSetaDireitaClick);

    return () => {
      if (setaComentariosEsquerda) setaComentariosEsquerda.removeEventListener("click", handleComentariosSetaEsquerdaClick);
      if (setaComentariosDireita) setaComentariosDireita.removeEventListener("click", handleComentariosSetaDireitaClick);
    };
  }, [comentarioIndex]);

  return (
    <div className="PerfilUsuarioRosa-Container">

      {/* Menu Hamburguer */}
      <div className="hamburguer" id="hamburguer" onClick={toggleMenu}>
        <img src="logoverdeescuro.png" alt="Logo" className="logo-img" />
      </div>

      {/* Menu Lateral - Condicionalmente renderizado */}
      <div className={`menu ${menuAtivo ? 'active' : ''}`} id="menu-Side">
        <ul>
          <li><a href="/Servico">Serviços</a></li>
          <li><a href="/PerfilRosa">Portfólios</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </div>

<div className='FundoRosa'>
  {/* <img src="public/images/fundoverde.png" alt="" />   */}
</div>
      <h1 className='PerfilUsuarioVerde'>Portfólio</h1>
      {/* Informações do usuário */}
      <div className="Header-InformacoesUsuarioVerde">

        <div className="Header2-InformacoesUsuarioVerde">
          <div className="CirculoImagemPerfil">
            <img src="public/images/perfilPessoaRosa.png" alt="" />
          </div>
          <div className='Localizacao'>
          <img className='iconLocal'src="public/icons/location.svg" alt="" />
          <label className="Label-Pais" htmlFor="">Brasil</label>
          <label className="Label-Estado" htmlFor="">SP</label>
          </div>
          <button className="Button-EditarPerfilVerde">Editar Perfil</button> 
        </div>
        
        <div className="Header1-InformacoesUsuarioRosa">
            <div className='NomeUsuario'>
          <h1>Giovanna da Costa Carvalho</h1>
          </div>
           <a href="https://web.whatsapp.com/" target="_blank">
            <img className="zap" src="public/icons/whatssap 1.svg" alt="" width="200" />
          </a>

          <a href="https://web.whatsapp.com/" target="_blank">
            <img src="public/icons/mdi_instagram.svg" alt="" width="200" className="insta" />
          </a>

          <a href="https://web.whatsapp.com/" target="_blank">
            <img src="public/icons/gamil 1.svg" alt="" width="200" className="email" />
          </a>

          <div className="botoes">
            <button className="Button-CompartilharUsuarioVerde">compartilhar</button>
            <button className="Button-ContratarUsuarioVerde">contrate</button>
          </div>

          <div className="Experiencia">
            <label className="Label-ExperienciaUsuarioRosa" htmlFor="">Experiência: </label>
            <label className="Label-AnoExperiencia" htmlFor="">3 anos</label>
          </div>
        </div>

        
      </div>

      {/* Sobre Mim */}
      <div className="Container-SobreMim">
        <h1 className="SobremimVerde">Sobre Mim</h1>
        <h2 className="Texto-SobremimVerde">
          Olá, sou [Seu Nome], [sua profissão] com [x] anos de experiência em [área de atuação]. Sou apaixonado por transformar ideias em soluções criativas e inovadoras. Ao longo da minha carreira, sempre busquei superar expectativas, oferecendo resultados de alta qualidade e personalizados para cada projeto. Fora do trabalho, adoro [hobbies ou interesses]. Se você está procurando uma abordagem única e dedicada para seu projeto, ficarei feliz em conversar e colaborar com você!
        </h2>
      </div>

      {/* Projetos */}
      <div className="Container-Projetos">
        <h1 className="ProjetosVerde">Projetos</h1>

        <div className="Carrossel-Container">
          <button className="SetaVerde" ref={setaEsquerdaRef}>&lt;</button>

          <div className="Carrossel">
            <div className="imagens" ref={imagensRef}>
              <img src="public/images/Rectangle 192 (1).png" alt="Imagem 1" />
              <img src="public/images/Rectangle 192.png" alt="Imagem 2" />
              <img src="public/images/Rectangle194.png" alt="Imagem 3" />
              <img src="public/images/Rectangle 193.png" alt="Imagem 4" />
              <img src="public/images/Rectangle 194.png" alt="Imagem 5" />
              <img src="public/images/Rectangle 193a.png" alt="Imagem 6" />
            </div>
          </div>
          <button className="SetaVerde" ref={setaDireitaRef}>&gt;</button>
        </div>
      </div>

      {/* Avaliações Recebidas */}
      <div className="Container-Avaliacoes">
        <h1 className="ProjetosVerde">Avaliações Recebidas</h1>
        
        <div className="CarrosselComentarios-ContainerVerde">

          <div className="Comentarios-Container">
            <div className="comentarios" ref={comentariosRef}>
              <img src="public/images/Group 64.png" alt="Imagem 1" />
              <img src="public/images/Group 65.png" alt="Imagem 2" />

            </div>
          </div>
        </div>
          <div className='SetasComentarios'>
          <button className="SetaComentarios-EsquerdaVerde" ref={setaComentariosEsquerdaRef}>&lt;</button>
          <button className="SetaComentarios-DireitaVerde" ref={setaComentariosDireitaRef}>&gt;</button>
          </div>
      </div>
    </div>
  );
}

export default PortfolioVerde;