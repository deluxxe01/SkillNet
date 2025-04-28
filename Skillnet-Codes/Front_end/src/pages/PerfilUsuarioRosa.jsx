import React, { useState, useRef, useEffect } from 'react';
import "./PerfilUsuarioRosa.css";

function PerfilUsuarioRosa() {
    // Estado para controlar a visibilidade do menu
    const [menuAtivo, setMenuAtivo] = useState(false);

    // Função para alternar o menu
    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    // Referências para os elementos do carrossel
    const setaEsquerdaRef = useRef(null);
    const setaDireitaRef = useRef(null);
    const imagensRef = useRef(null);

    let index = 0; // Controla o índice das imagens visíveis

    const atualizarCarrossel = () => {
        if (imagensRef.current) {
            imagensRef.current.style.transform = `translateX(-${index * 600}px)`; // Mover as imagens
        }
    };

    useEffect(() => {
        const setaEsquerda = setaEsquerdaRef.current;
        const setaDireita = setaDireitaRef.current;

        // Funções de navegação
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

        // Adiciona os event listeners
        if (setaEsquerda) setaEsquerda.addEventListener("click", handleSetaEsquerdaClick);
        if (setaDireita) setaDireita.addEventListener("click", handleSetaDireitaClick);

        // Limpeza dos event listeners ao desmontar o componente
        return () => {
            if (setaEsquerda) setaEsquerda.removeEventListener("click", handleSetaEsquerdaClick);
            if (setaDireita) setaDireita.removeEventListener("click", handleSetaDireitaClick);
        };
    }, [index]); // Dependência em "index" para atualizar o carrossel


    return (
        <div className='PerfilUsuarioRosa-Container'>
            {/* Menu Hamburguer */}
            <div className="hamburguer" id="hamburguer" onClick={toggleMenu}>
                <img src="logoverdeescuro.png" alt="Logo" className="logo-img" />
            </div>

            {/* Menu Lateral - Condicionalmente renderizado */}
            <div className={`menu ${menuAtivo ? 'active' : ''}`} id="menu-Side">
                <ul>
                    <li><a href="/Servico">Serviços</a></li>
                    <li><a href="/PerfilUsuarioRosa">Portfólios</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Perfil</a></li>
                </ul>
            </div>

            <div className='Header-InformacoesUsuarioRosa'>
                <div className='Header1-InformacoesUsuarioRosa'>
                    <h1 className='NomeUsuarioRosa'>Giovanna da Costa Carvalho</h1>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img className='zap' src="public/icons/whatssap 1.svg" alt="" width="200" />
                    </a>

                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img  src="public/icons/mdi_instagram.svg" alt="" width="200" className='insta' />
                    </a>

                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="public/icons/gamil 1.svg" alt="" width="200" className='email'/>
                    </a>
<div className='botoes'>
                    <button className='Button-CompartilharUsuarioRosa'>
                    compartilhar  {/* <img className= 'imgShare' src="public/icons/share 2.svg" /> */}
                    </button>
                    <button className='Button-ContratarUsuarioRosa'> contrate</button>
</div>

<div className='Experiencia'>
                    <label className='Label-ExperienciaUsuarioRosa' htmlFor="">Experiência: </label>
                    <label className='Label-AnoExperiencia' htmlFor="">3 anos</label>

</div>
                </div>

                <div className='Header2-InformacoesUsuarioRosa'>
                    <div className='CirculoImagemPerfil'></div>
                    <label className='Label-Pais' htmlFor=""> Brasil</label>
                    <label className='Label-Estado' htmlFor=""> SP</label>
                </div>

                <div className='Header3-InformacoesUsuarioRosa'>
                    <button className='Button-EditarPerfil'> Editar Perfil</button>

                    <div className='CategoriasUsuario'>
                        <button className='Button-CategoriaPerfil'> Design gráfico</button>
                        <button className='Button-CategoriaPerfil'> Desenvoledor web</button>
                        <button className='Button-CategoriaPerfil'> Marketing</button>
                    </div>
                </div>
            </div>

             <div className='Container-SobreMim'>
                <h1 className='Sobremim'>Sobre Mim</h1>

                <h2 className='Texto-Sobremim'>
                Olá, sou [Seu Nome], [sua profissão] com [x] anos de experiência em [área de atuação]. Sou apaixonado por transformar ideias em soluções criativas e inovadoras. Ao longo da minha carreira,
                sempre busquei superar expectativas, oferecendo resultados de alta qualidade e personalizados para cada projeto.Fora do trabalho, adoro [hobbies ou interesses]. Se você está procurando 
                uma abordagem única e dedicada para seu projeto, ficarei feliz em conversar e colaborar com você!

                </h2>
             </div>

             <div className='Container-Projetos'>

                <h1 className='Projetos'>Projetos</h1>

                <div className='Carrossel-Container'>
                    <button className='Seta' ref={setaEsquerdaRef}>&lt;</button>

                    <div className='Carrossel'>
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

            
             <div className='Container-Avaliacoes'>
                    <h1 className='Projetos'>Avaliações Recebidas</h1>
                    
                   
                    <div className='CarrosselComentarios-Container'>
               <div className='Comentarios-Container'>
                    <div className="comentarios" >
                            <img src="public/images/Group 64.png" alt="Imagem 1" />
                            <img src="public/images/Group 65.png" alt="Imagem 2" />
                            <img src="public/images/Group 65 (1).png" alt="Imagem 3" />
                            <img src="public/images/Rectangle 193.png" alt="Imagem 4" />
                            <img src="public/images/Rectangle 194.png" alt="Imagem 5" />
                            <img src="public/images/Rectangle 193a.png" alt="Imagem 6" />
                    </div>

               </div>
                    </div>
                    <div className='SetasComentarios'>

                    <button className='SetaComentarios-Esquerda' >&lt;</button> 
                    <button className="SetaComentarios-Direita" >&gt;</button>

                    </div>  
                </div>
        </div>
    );
}

export default PerfilUsuarioRosa;