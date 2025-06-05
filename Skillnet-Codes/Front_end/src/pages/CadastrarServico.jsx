import React from 'react'
import Header from '../components/Header'
import './CadastrarServico.css'

function CadastrarServico() {
  return (
    <div className>
        <div><Header /></div>
        <div><h1>Cadastro de seviços</h1></div>
        <div className='containerServicos'>
         <div className='containerTituloServico'> 
            <div className='divInputsServico'>
                <label htmlFor="">Titulo</label>
                <input type="text" className='inptServicos' />
            </div>

            <div className='divInputsServico'>
                <label htmlFor="">descrição</label>
                <input type="text"  className='inptServicos' />
            </div>

        </div>
        <div className='containerInfoServicos'> 
            <div className='divInputsServico'>
                <label htmlFor="">tempo de entrega</label>
                <input type="text"  className='inptServicos' />
            </div>

            <div className='divInputsServico'>
                <label>img URL</label>
                <input type="text" />
            </div>
            <div className='divInputsServico'>
                <label htmlFor="">Escolha a área que define seu serviço</label>
                <input type="text"  className='inptServicos' />
            </div>
        </div>
         <div className='containerInfoServico2'>
            <div  className='divInputsServico'>
                <label htmlFor="">faixa de preço</label>
                <input type="text"  className='inptServicos' />
            </div>
            <div className='divInputsServico'>
                <label htmlFor="">idiomas</label>
                <input type="text"  className='inptServicos' />
            </div>
         </div>
        </div>
    </div>
  )
}

export default CadastrarServico