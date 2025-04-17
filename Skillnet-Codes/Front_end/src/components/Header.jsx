import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"


function Header() {

  return (
    <div className='containerHeader'>
      <Link to={'/Area_servico_pesquisado'}> 
        <button link to={'Area_servico_pesquisado'}>Serviços</button>
        </Link>
       
        <button>Portifólios</button>
        <button className='logo'>
            <img src="./icons/logo_skill_net_verde.svg" alt=""   />
        </button>
        <button>Perfil</button>
        <button>Sobre Nós</button>
    </div>
  )
}

export default Header
