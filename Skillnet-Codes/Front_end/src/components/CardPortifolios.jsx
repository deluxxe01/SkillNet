import React, { use, useState } from 'react'
import './CardPortifolios.css'

function CardPortifolios(props) {
    const {id,nome,autor,img} = props.infos
    const [estrela,setEstrela] = useState('./icons/estrela.svg')
    const [imgUsada,setImgUsada]=useState(false)
  return (
    <div>
        <div className='containerCard'>
            <img src={img} alt="" className='imgCard' />
            <h2 className='tituloCard'>{nome}</h2>
            <p className='pAutor'>{autor}</p>
            <img src={imgUsada ? "./icons/estrelaCheia.svg" : "./icons/estrela.svg"} alt="" className='iconCoracao' onClick={()=>{
              setImgUsada(!imgUsada)
             }} />
        </div>
    </div>
  )
}

export default CardPortifolios