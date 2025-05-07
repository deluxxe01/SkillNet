import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
function Button(props) {
  const navigate =useNavigate()
  const navegar = (local) => {

    navigate(local)

  }
  return (
    <div>
        <button className='btnComponent' onClick={()=>{navegar(props.local)}}>{props.conteudo}</button>
    </div>
  )
}

export default Button
