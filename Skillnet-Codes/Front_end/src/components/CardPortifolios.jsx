import React, { use, useEffect, useState } from 'react'
import './CardPortifolios.css'

function CardPortifolios(props) {
    const {id,nome,autor,img,avaliacao} = props.infos
    const [estrela,setEstrela] = useState('./icons/estrela.svg')
    const [imgUsada,setImgUsada]=useState(false)

    const [estrelaIcon1,setEstrelaIcon1] = useState('./icons/estrelaVazia.png') 
    const [estrelaIcon2,setEstrelaIcon2] = useState('./icons/estrelaVazia.png') 
    const [estrelaIcon3,setEstrelaIcon3] = useState('./icons/estrelaVazia.png') 
    const [estrelaIcon4,setEstrelaIcon4] = useState('./icons/estrelaVazia.png') 
    const [estrelaIcon5,setEstrelaIcon5] = useState('./icons/estrelaVazia.png') 

    const estrelasCards = ()=> {

      let estrelas = [
        "./icons/estrelaVazia.png",
        './icons/estrelaVazia.png',
        './icons/estrelaVazia.png',
        "./icons/estrelaVazia.png",
        "./icons/estrelaVazia.png"

      ] 

      const parteInteira = Math.floor(avaliacao);
      const parteDecimal = avaliacao - parteInteira;
      

     
      for(let i=0;i<avaliacao;i++){

         estrelas[i]= "./icons/estrelaCheia.png"

        
        
      }

      if(parteDecimal=>0.5){
        estrelas[parteInteira] = './icons/estrelaMetadeCheia.png' 

      }
      setEstrelaIcon1(estrelas[0])
      setEstrelaIcon2(estrelas[1])
      setEstrelaIcon3(estrelas[2])
      setEstrelaIcon4(estrelas[3])
      setEstrelaIcon5(estrelas[4])
      
      
    }
    useEffect(()=> {estrelasCards()},[])
    
    return (
      <div>
        <div className='containerCard'>
            <img src={img} alt="" className='imgCard' />
            <h2 className='tituloCard'>{nome}</h2>
            <p className='pAutor'>{autor}</p>
             <div>
              <img src={estrelaIcon1} alt="" className='imgEstrela' />
              <img src={estrelaIcon2} alt="" className='imgEstrela' />
              <img src={estrelaIcon3} alt="" className='imgEstrela' />
              <img src={estrelaIcon4} alt="" className='imgEstrela' />
              <img src={estrelaIcon5} alt="" className='imgEstrela' />
             </div>

            <img src={imgUsada ? "./icons/CoracaoCheio.svg" : "./icons/CoracaoVazio.svg"} alt="" className='iconCoracao' onClick={()=>{
              setImgUsada(!imgUsada)
             }} />
        </div>
    </div>
  )
}

export default CardPortifolios