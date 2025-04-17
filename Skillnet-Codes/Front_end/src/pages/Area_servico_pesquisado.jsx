import React, { useState,useMemo } from 'react'
import Header from '../components/Header'
import "./Area_servico_pesquisado.css"
import { Link } from "react-router-dom"

function Area_servico_pesquisado() {
 const[valorInptPesquisa,setValorInptPesquisa] = useState("")

 const [filtraServico,setFiltraServico] = useState('')
 


  
const servicos = [
  {
    titulo: "Fotografia Profissional",
    poster: "https://assets.querobolsa.com.br/assets/covers/courses/fotografia-e598e34a8f3d4ac1d8376da393c6f4f979ea763f8d482af06630713de014434f.webp",
    sinopse: "Captura momentos inesquecíveis com qualidade e criatividade. Ideal para eventos, ensaios e campanhas.",
    tipo_servico: "Fotografia"
  },
  {
    titulo: "Consultoria de Negócios",
    poster: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sinopse: "Soluções estratégicas para impulsionar o crescimento e a eficiência da sua empresa.",
    tipo_servico: "Consultoria"
  },
  {
    titulo: "Design de Interiores",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhagREYiuYvqOIEIfeFG58TMSMnMZyFTS-dQ&s",
    sinopse: "Transforme espaços com elegância e funcionalidade, de acordo com seu estilo e necessidades.",
    tipo_servico: "Design de Interiores"
  },
  {
    titulo: "Desenvolvimento Web",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdnVsZv7of9Wwxn9ovPj1UX-yg5vaQCYcfA&",
    sinopse: "Criação de sites modernos, responsivos e otimizados para conversão.",
    tipo_servico: "Desenvolvimento"
  },
  {
    titulo: "Personal Trainer",
    poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    sinopse: "Acompanhamento personalizado para atingir seus objetivos de saúde e bem-estar.",
    tipo_servico: "Fitness"
  },
  {
    titulo: "Maquiagem Profissional",
    poster: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
    sinopse: "Realce sua beleza com técnicas modernas para qualquer ocasião.",
    tipo_servico: "Beleza"
  },
  {
    titulo: "Aulas de Música",
    poster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sinopse: "Aprenda a tocar instrumentos ou a cantar com professores experientes.",
    tipo_servico: "Educação"
  },
  {
    titulo: "Serviços de Jardinagem",
    poster: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    sinopse: "Cuidamos do seu jardim com carinho, deixando seu espaço sempre verde e bonito.",
    tipo_servico: "Jardinagem"
  },
  {
    titulo: "Tradução de Documentos",
    poster: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    sinopse: "Traduções precisas e confiáveis para diversas línguas e contextos.",
    tipo_servico: "Tradução"
  },
  {
    titulo: "Marketing Digital",
    poster: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    sinopse: "Campanhas estratégicas para aumentar sua presença online e atrair mais clientes.",
    tipo_servico: "Marketing"
  },
  {
    "titulo": "Serviços Jurídicos",
    "poster": "https://images.unsplash.com/photo-1676145643363-e195aa2213f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Assessoria jurídica especializada para atender às suas necessidades legais com profissionalismo e ética.",
    "tipo_servico": "Advocacia,Mar"
  },
  {
    "titulo": "Consultas Médicas",
    "poster": "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Atendimento médico de qualidade, focado no bem-estar e na saúde preventiva dos pacientes.",
    "tipo_servico": "Medicina"
  },
  {
    "titulo": "Engenharia Civil",
    "poster": "https://plus.unsplash.com/premium_photo-1663100465979-7d42b0f37bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Projetos e execuções de obras com excelência, garantindo segurança e inovação em cada construção.",
    "tipo_servico": "Engenharia"
  },
  {
    titulo: "Fotografia Profissional",
    poster: "https://assets.querobolsa.com.br/assets/covers/courses/fotografia-e598e34a8f3d4ac1d8376da393c6f4f979ea763f8d482af06630713de014434f.webp",
    sinopse: "Captura momentos inesquecíveis com qualidade e criatividade. Ideal para eventos, ensaios e campanhas.",
    tipo_servico: "Fotografia"
  },
  {
    titulo: "Consultoria de Negócios",
    poster: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sinopse: "Soluções estratégicas para impulsionar o crescimento e a eficiência da sua empresa.",
    tipo_servico: "Consultoria"
  },
  {
    titulo: "Design de Interiores",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhagREYiuYvqOIEIfeFG58TMSMnMZyFTS-dQ&s",
    sinopse: "Transforme espaços com elegância e funcionalidade, de acordo com seu estilo e necessidades.",
    tipo_servico: "Design de Interiores"
  },
  {
    titulo: "Desenvolvimento Web",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdnVsZv7of9Wwxn9ovPj1UX-yg5vaQCYcfA&",
    sinopse: "Criação de sites modernos, responsivos e otimizados para conversão.",
    tipo_servico: "Desenvolvimento"
  },
  {
    titulo: "Personal Trainer",
    poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    sinopse: "Acompanhamento personalizado para atingir seus objetivos de saúde e bem-estar.",
    tipo_servico: "Fitness"
  },
  {
    titulo: "Maquiagem Profissional",
    poster: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
    sinopse: "Realce sua beleza com técnicas modernas para qualquer ocasião.",
    tipo_servico: "Beleza"
  },
  {
    titulo: "Aulas de Música",
    poster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sinopse: "Aprenda a tocar instrumentos ou a cantar com professores experientes.",
    tipo_servico: "Educação"
  },
  {
    titulo: "Serviços de Jardinagem",
    poster: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    sinopse: "Cuidamos do seu jardim com carinho, deixando seu espaço sempre verde e bonito.",
    tipo_servico: "Jardinagem"
  },
  {
    titulo: "Tradução de Documentos",
    poster: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    sinopse: "Traduções precisas e confiáveis para diversas línguas e contextos.",
    tipo_servico: "Tradução"
  },
  {
    titulo: "Marketing Digital",
    poster: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    sinopse: "Campanhas estratégicas para aumentar sua presença online e atrair mais clientes.",
    tipo_servico: "Marketing"
  },
  {
    "titulo": "Serviços Jurídicos",
    "poster": "https://images.unsplash.com/photo-1676145643363-e195aa2213f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Assessoria jurídica especializada para atender às suas necessidades legais com profissionalismo e ética.",
    "tipo_servico": "Advocacia,Mar"
  },
  {
    "titulo": "Consultas Médicas",
    "poster": "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Atendimento médico de qualidade, focado no bem-estar e na saúde preventiva dos pacientes.",
    "tipo_servico": "Medicina"
  },
  {
    "titulo": "Engenharia Civil",
    "poster": "https://plus.unsplash.com/premium_photo-1663100465979-7d42b0f37bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sinopse": "Projetos e execuções de obras com excelência, garantindo segurança e inovação em cada construção.",
    "tipo_servico": "Engenharia"
  }



]
const ServicosFiltrados = useMemo(() => {
  const ServicoMinusculo = filtraServico.toLowerCase().trim()
  return servicos.filter((servico) =>
    servico.tipo_servico.toLowerCase().includes(ServicoMinusculo)
  )
}, [filtraServico])
    return (
   
   
   <div className='container_pagina'>
  
      <div className='container_img_bg '>

      <Header/>
    
<div className='container_barra_pesquisa'>
<h1 className='h1_servicos'>Serviços</h1>
<div  className='barra_verde'></div>
<div className=' container_inpt_pesquisa'>
<input 
type="text"
 className='inpt_barra_pesquisa' 
  placeholder='Procure a sua área'
  
  value={filtraServico}

  onChange={(e) =>setFiltraServico (e.target.value)}
  />
</div>


</div>
   <div className='container_categorias_servico'>
    
 <Link>
 <div className='container_botao'>
 <img src="./icons/icon_fotografia.svg" alt="" className='icons_categorias_trabalho' />
 <button>Desenvolvimento web</button>
 </div>
 </Link>

  <Link>
  <div className='container_botao'>
  <img src="./icons/icon_fotografia.svg" alt="" className='icons_categorias_trabalho' />
  <button>Marketing</button>
  </div>
  </Link>
 
  <Link>
  <div className='container_botao'>
  <img src="./icons/icon_fotografia.svg" alt="" className='icons_categorias_trabalho' />
  <button>design gráfico</button>
  </div> 
  </Link>
  
  
  <Link>
  <div className='container_botao'>
  <img src="./icons/icon_fotografia.svg" alt="" className='icons_categorias_trabalho' />
  <button>produção de conteúdos</button>
  </div>
  </Link>
  
  
  
  
  <Link>
  <div className='container_botao'>
   <img src="./icons/icon_fotografia.svg" alt="" className='icons_categorias_trabalho' />
   <button>fotografia e video</button>
    </div></Link>

   </div>  
<div className="lista_serviço">
        
        {ServicosFiltrados.length > 0 ? (
      
        ServicosFiltrados.map((servico, index) => (
            <div className="card_servico" key={index}>
              <img src={servico.poster} alt={servico.titulo} className="poster" />
              <h3>{servico.titulo}</h3>
              <p>{servico.sinopse}</p>
            </div>
          ))
        ) : (
          <span className='span_nFilmes'>Nenhum serviço encontrado!</span>
        )}
       

       
       
     
     
     
      </div>


     </div>
       
       
        </div>
  )
}
export default Area_servico_pesquisado