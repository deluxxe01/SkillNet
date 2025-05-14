import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
const [paginaAtiva,setPaginaAtiva] = useState(0)


function ativaPagina (index){
  setPaginaAtiva(index)
 
  localStorage.setItem('paginaAtiva', paginaAtiva); // Salva o índice no Local Storage
}
const navigate=useNavigate()
console.log(paginaAtiva)




return (
    <div className='containerHeader'>
     
        <button className={`botaoHeader ${paginaAtiva===1 ? 'ativo' :'inativo'}`}
        onClick={()=>{ativaPagina(1)
        navigate("/area_servico_pesquisado")
          
        }}
     
        >Serviços</button>
       
       
     
        <button className={`botaoHeader ${paginaAtiva===2 ? 'ativo' :'inativo'}`}
        onClick={()=>ativaPagina(2)}>Portifólios</button>
       
       
       
        <button className={`logo ${paginaAtiva===5 ? 'ativo' :'inativo'}`}
        onClick={()=>ativaPagina(5)}>
            <img src="./icons/logo_skill_net_verde.svg" alt=""   />
        </button>
       
       
       
        <button className={`botaoHeader ${paginaAtiva===3 ? 'ativo' :'inativo'}`}
        onClick={()=>{ativaPagina(3)
          navigate('/user')
        }}>Perfil</button>
       
       
        <button className={`botaoHeader ${paginaAtiva===4 ? 'ativo' :'inativo'}`}
        onClick={()=>ativaPagina(4)}>Sobre Nós</button>
  
       
   
   
    </div>
  )
}
export default Header