import React from 'react'
import './Header.css'

function Header() {

  return (
    <div className='containerHeader'>
        <button>Serviços</button>
        <button>Portifólios</button>
        <button className='logo'>
            <img src="./logo_SkillNet.svg" alt="" />
        </button>
        <button>Perfil</button>
        <button>Sobre Nós</button>
    </div>
  )
}

export default Header
