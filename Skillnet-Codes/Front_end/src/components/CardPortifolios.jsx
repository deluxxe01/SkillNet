import React from 'react'
import './CardPortifolios.css'
function CardPortifolios(props) {
    const {id,nome,autor,img} = props.infos
  return (
    <div>
        <div className='containerCard'>
            <img src={img} alt="" className='imgCard' />
            <h2 className='tituloCard'>{nome}</h2>
            <p className='pAutor'>{autor}</p>
        </div>
    </div>
  )
}

export default CardPortifolios