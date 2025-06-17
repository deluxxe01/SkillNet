import React from 'react'
import './ModalConfirm.css'


function ModalConfirm() {
  return (
    <div>
        <dialog className='modalTest' open={true}>
            <img className='iconTrash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="" />
            <h1 className='h1Sair'>Você tem certeza que <br/> deseja excluir?</h1>
            <h2 className='h2Sair'>Esse processo não poderá ser desfeito</h2>
            <div>
                <button className='btnAceitar'>sim</button>
                <button className='btnNegar'>não</button>
            </div>
        </dialog>
    </div>
  )
}

export default ModalConfirm
