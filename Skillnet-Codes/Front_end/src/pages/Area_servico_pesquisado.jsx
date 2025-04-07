import React, { useState,useMemo } from 'react'
import Header from '../components/Header'
import "./Area_servico_pesquisado.css"

function Area_servico_pesquisado() {
 const[valorInptPesquisa,setValorInptPesquisa] = useState("")

 const [filtraServico,setFiltraServico] = useState('')
 


  
const servicos = [
  {
    titulo: "Homem-Aranha",
    poster: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-homem-aranha-spider-man-2-c-pop-arte-poster/poparteskins2/15938524040/2fd03f73140e1d62809ced7a7822769f.jpeg",
    sinopse: "Peter Parker ganha superpoderes e precisa equilibrar sua vida de estudante com a de herói."
  },
  {
    titulo: "The Batman",
    poster: "https://agrafica.com.br/wp-content/uploads/2016/01/resolucao_300dpi.jpg",
    sinopse: "Bruce Wayne encara seu lado mais sombrio enquanto investiga crimes misteriosos em Gotham."
  },
  {
    titulo: "Clube da Luta",
    poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
    sinopse: "Um homem forma um clube secreto de luta para lidar com sua vida entediante."
  },
  {
    titulo: "Interestelar",
    poster: "https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png",
    sinopse: "Astronautas buscam um novo lar para a humanidade viajando por buracos de minhoca."
  },
  {
    titulo: "Wall-e",
    poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/WALL-E.jpg/250px-WALL-E.jpg",
    sinopse: "Um pequeno robô solitário vive em uma Terra abandonada até encontrar o amor em EVA."
  },
  {
    titulo: "Homem-Formiga",
    poster: "https://upload.wikimedia.org/wikipedia/pt/9/90/Ant_Man-Poster.jpg",
    sinopse: "Scott Lang se torna o Homem-Formiga, um herói com a habilidade de encolher."
  },
  {
    titulo: "Forest Gump",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/c13db7cab337d48fbac3715065ef255862e2c7e5fc25d6a262a0cf7c35c29d20.jpg",
    sinopse: "Forrest, um homem simples, testemunha e influencia grandes momentos da história americana."
  }
]
const ServicosFiltrados = useMemo(() => {
  const ServicoMinusculo = filtraServico.toLowerCase().trim()
  return servicos.filter((servico) =>
    servico.titulo.toLowerCase().includes(ServicoMinusculo)
  )
}, [filtraServico])
    return (
   
   
   <div>
   
      <div className='container_img_bg '>
     
      <Header/>
     
      <div className='espaço_livre'>
     
      </div>
<div className='container_barra_pesquisa'>
<h1 className='h1_serviços'>serviços</h1>
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
     
<div className="movie-list">
        {ServicosFiltrados.length > 0 ? (
          ServicosFiltrados.map((servico, index) => (
            <div className="movie-item" key={index}>
              <img src={servico.poster} alt={servico.titulo} className="poster" />
              <h3>{servico.titulo}</h3>
              <p>{servico.sinopse}</p>
            </div>
          ))
        ) : (
          <span>Nenhum filme encontrado!</span>
        )}
       

       
       
     
     
     
      </div>


     </div>
       
       
        </div>
  )
}
export default Area_servico_pesquisado