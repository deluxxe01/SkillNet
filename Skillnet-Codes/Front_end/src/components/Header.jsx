import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Header() {

const [paginaAtiva,setPaginaAtiva] = useState(()=>{
  
  const salvarPagina = localStorage.getItem('paginaAtiva')

  return salvarPagina ? Number(salvarPagina) : 0 

})


function ativaPagina (index){

  setPaginaAtiva(index)
 
  localStorage.setItem('paginaAtiva', index); // Salva o índice no Local Storage

  
}
const navigate=useNavigate()







return (
    <div className='containerHeader'>
     
        <button className={`botaoHeader ${paginaAtiva===1 ? 'ativo' :'inativo'}`}
        onClick={()=>{ativaPagina(1)
        navigate("/area_servico_pesquisado")
          
        }}
     
        >Serviços</button>
       
       
     
        <button className={`botaoHeader ${paginaAtiva===2 ? 'ativo' :'inativo'}`}
        onClick={()=>{ativaPagina(2)
          navigate("/portfolioeditar")
        }}>Portifólio</button>
       
       
       
        <button className={`logo ${paginaAtiva===5 ? 'ativo' :'inativo'}`}
        onClick={()=>ativaPagina(5)}>
            <img src="./icons/logo_skill_net_verde.svg" alt=""   />
        </button>
       
       
       
        <button className={`botaoHeader ${paginaAtiva===3 ? 'ativo' :'inativo'}`}
        onClick={()=>{ativaPagina(3)
          navigate('/user_page')
        }}>Perfil</button>
       
       
        <button className={`botaoHeader ${paginaAtiva===4 ? 'ativo' :'inativo'}`}
        onClick={()=>{
          ativaPagina(4) 
          navigate('/sobre_nos')}}
          >Sobre Nós</button>
  
       
   
   
    </div>
  )
}
export default Header