import React from 'react'
import Header from '../components/Header'
import './CadastrarServico.css'

function CadastrarServico() {
  return (
    <div className>
        <div><Header /></div>
        <div className='container_h1_titulo_servico'><h1 className='h1_titulo_servico'>Cadastro de seviços</h1><div className='div_linha_verde_cadastra_servico'></div></div>
        
        
        <div className='containerServicos'>
         
         <div className='container_all_inputs' >

         <div className='containerTituloServico'> 
            
            <div className='div_Inputs_servico_titulo'>
                <label htmlFor="" >Titulo</label>
                <input type="text" className='inpt_titulo_servico'  placeholder='Titulo do seu serviço'/>
            </div>

            <div className='div_Inputs_servico_descricao'>
                <label htmlFor="">descrição</label>
               <textarea name="" id="" className='text_descrição_servico' placeholder='escreva detalhadamente sobre seu serviço'></textarea>
            </div>

        </div>
        <div className='containerInfoServicos'> 
            <div className='divInputsServico'>
                <label htmlFor="">tempo de entrega</label>
                <input type="text"  className='inptServicos'  placeholder='10-11 dias'/>
            </div>

            <div className='divInputsServico'>
                <label>img URL</label>
                <input type="text"  className='inptServicos' placeholder='https://exemplo.com/sua-imagem.jpg'/>
            </div>
            <div className='divInputsServico'>
                <label htmlFor="">Escolha a área que define seu serviço</label>
                <select name="" id="" className='select_area_servico'>
                <option value='faixa' disabled selected>
              escolha umas das opções
            </option>
                <option value="">matador de rato</option>
                <option value="">desenvolvimento de software</option>
                <option value="">back end devoloper</option>
                <option value="">scrum master</option>
                
                </select>
            </div>
        </div>
         <div className='containerInfoServico2'>
           <div className='container_preco_idiomas'>

            <div  className='divInputsServico'>
                <label htmlFor="">faixa de preço</label>
                <input type="text"  className='inptServicos'placeholder='R$200 - R$1000' />
            </div>
            <div className='divInputsServico'>
                <label htmlFor="">idiomas que o serviço atende</label>
                <input type="text"  className='inptServicos' placeholder='espanhol,portugues,ingles'/>
         
            </div>

           </div>

         </div>
         </div>
         <div className='container_buttons'>

<button className='botton_edita_servico'>editar serviço</button>

<button className='button_cria_servico'>criar serviço</button>

<button className='butonn_cancela_servico'>cancelar</button>


         </div>



        </div>
    </div>
  )
}

export default CadastrarServico