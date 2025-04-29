import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
        <button className='btnComponent'>{props.conteudo}</button>
    </div>
  )
}

export default Button
