import React, { useState, useRef, useEffect } from 'react';
import './PortfolioUsuario.css';
import Hamburger from '../components/Hamburger';
import Footer from '../components/Footer';

function PortfolioUsuario() {

  const [menuComentarioAtivo, setMenuComentarioAtivo] = useState(false); // Controlar o pop-up de comentário
  const [comentarios, setComentarios] = useState([]); // Armazenar os comentários

  const [novoComentario, setNovoComentario] = useState(""); // Estado para o comentário

  const handleComentarioChange = (event) => {
    setNovoComentario(event.target.value);
  };

  const adicionarComentario = () => {
    if (novoComentario) {
      setComentarios([...comentarios, novoComentario]);
      setNovoComentario(""); // Limpar o campo após adicionar
      setMenuComentarioAtivo(false); // Fechar o pop-up
    }
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

<Hamburger />


<div className='FundoRosa'>
  <img src="public/images/fundoRosa.png" alt="" />  
</div>
      <h1 className='PerfilUsuario'>Portfólio</h1>
      {/* Informações do usuário */}
      <div className="Header-InformacoesUsuarioRosa">

        <div className="Header2-InformacoesUsuarioRosa">
          <div className="CirculoImagemPerfil">
            <img src="public/images/perfilPessoaRosa.png" alt="" />
          </div>
          <div className='Localizacao'>
          <img className='iconLocal'src="public/icons/location.svg" alt="" />
          <label className="Label-Pais" htmlFor="">Brasil</label>
          <label className="Label-Estado" htmlFor="">SP</label>
          </div>
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
            <button className="Button-CompartilharUsuarioRosa">compartilhar</button>
            <button className="Button-ContratarUsuarioRosa">contrate</button>
          </div>

          <div className="Experiencia">
            <label className="Label-ExperienciaUsuarioRosa" htmlFor="">Experiência: </label>
            <label className="Label-AnoExperiencia" htmlFor="">3 anos</label>
          </div>
        </div>
      </div>

      {/* Sobre Mim */}
      <div className="Container-SobreMim">
        <h1 className="Sobremim">Sobre Mim</h1>
        <h2 className="Texto-Sobremim">
          Olá, sou [Seu Nome], [sua profissão] com [x] anos de experiência em [área de atuação]. Sou apaixonado por transformar ideias em soluções criativas e inovadoras. Ao longo da minha carreira, sempre busquei superar expectativas, oferecendo resultados de alta qualidade e personalizados para cada projeto. Fora do trabalho, adoro [hobbies ou interesses]. Se você está procurando uma abordagem única e dedicada para seu projeto, ficarei feliz em conversar e colaborar com você!
        </h2>
      </div>

      {/* Projetos */}
      <div className="Container-Projetos">
        <h1 className="Projetos">Projetos</h1>

        <div className="Carrossel-Container">
          <button className="Seta" ref={setaEsquerdaRef}>&lt;</button>

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
          <button className="Seta" ref={setaDireitaRef}>&gt;</button>
        </div>
      </div>

      {/* Avaliações Recebidas */}
      <div className="Container-Avaliacoes">
        <h1 className="Projetos">Avaliações Recebidas</h1>
        <p className='DeixarAvaliacao'>Deseja deixar uma avaliação?</p>
        <button className='CliqueiAqui' onClick={() => setMenuComentarioAtivo(true)}>CliqueiAqui</button>
        <div className="CarrosselComentarios-Container">

          <div className="Comentarios-Container">
          <div className="comentarios" ref={comentariosRef}>
              {comentarios.map((comentario, index) => (
                <div key={index} className="Comentario">
                  <p>{comentario}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
          <div className='SetasComentarios'>
          <button className="SetaComentarios-Esquerda" ref={setaComentariosEsquerdaRef}>&lt;</button>
          <button className="SetaComentarios-Direita" ref={setaComentariosDireitaRef}>&gt;</button>
          </div>
      </div>


  {/* Pop-up para deixar comentário */}
  {menuComentarioAtivo && (
        <div className="PopupComentario">
          <div className="PopupComentario-Content">
            <h2>Deixe seu comentário:</h2>
            <textarea
              value={novoComentario}
              onChange={handleComentarioChange}
              placeholder="Digite seu comentário..."
            ></textarea>
            <button onClick={adicionarComentario}>Adicionar Comentário</button>
            <button onClick={() => setMenuComentarioAtivo(false)}>Fechar</button>
          </div>
        </div>
)}
  

  <Footer />
    </div>
  );
}

export default PortfolioUsuario;