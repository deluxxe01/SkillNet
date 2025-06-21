import React from 'react'
import './ModalConfirm.css'


function ModalConfirm({logOut,fecharModal,url,titulo,descricao}) {
  return (
   
        <dialog className='modalTest' open={true}>
            <img className='iconTrash' src={url} alt="" />
            <h1 className='h1Sair'>{titulo}</h1>
            <h2 className='h2Sair'>{descricao}</h2>
            <div>
                <button className='btnAceitar' onClick={logOut}>sim</button>
                <button className='btnNegar' onClick={fecharModal}>não</button>
            </div>
        </dialog>
    
  )
}

export default ModalConfirm
