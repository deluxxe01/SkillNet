import React from 'react'
import './CardPortifolios.css'
function CardPortifolios(props) {
    const {id,nome,curtidas} = props.infos
  return (
    <div>
        <div className='containerCard'>
            <h2>Nome do Trabalhador {nome}</h2>
            <p>Numero  de avaliações {curtidas}</p>
        </div>
    </div>
  )
}

export default CardPortifolios