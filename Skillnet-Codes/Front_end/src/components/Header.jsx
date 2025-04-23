import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { useState } from 'react'

function Header() {


const [paginaAtiva,setPaginaAtiva] = useState('')


  return (
    <div className='containerHeader'>
      
        <button>Serviços</button>
       
       
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
