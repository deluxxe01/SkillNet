import React, { useState } from 'react'
import './ModalError.css'

function ModalError(props) {
    const [isOpen,setIsOpen]=useState(true)
  return (
    <div >
 <dialog className={`notifications-container-alert ${isOpen ? 'aberto' : ''}`}>
  <div class="error-alert">
    <div class="flex">
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg"> </svg>
      <div class="error-prompt-container">
        <p class="error-prompt-heading">{props.titulo}
        </p><div class="error-prompt-wrap">
            <p className='pError'>{props.text} </p>
      </div>
      
      </div>
      
    </div>
   </div>
    <div className='baraDuraçao'></div>
</dialog>
        
      
    </div>
  )
}

export default ModalError
