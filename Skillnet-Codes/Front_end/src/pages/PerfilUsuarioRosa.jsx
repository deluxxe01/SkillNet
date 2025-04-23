import React, { useState } from 'react';
import "./PerfilUsuarioRosa.css";

function PerfilUsuarioRosa() {
    // Estado para controlar a visibilidade do menu
    const [menuAtivo, setMenuAtivo] = useState(false);

    // Função para alternar o menu
    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

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
                        <img src="whatssap 1.svg" alt="" width="200" />
                    </a>

                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="whatssap 1.svg" alt="" width="200" />
                    </a>

                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="whatssap 1.svg" alt="" width="200" />
                    </a>

                    <button className='Button-CompartilharUsuarioRosa'>
                        compartilhar <img src="share2.svg" />
                    </button>
                    <button className='Button-ContratarUsuarioRosa'> contrate</button>

                    <label className='Label-ExperienciaUsuarioRosa' htmlFor="">Experiência: </label>
                    <label className='Label-AnoExperiencia' htmlFor="">3 anos</label>
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

          
        </div>
    );
}

export default PerfilUsuarioRosa;