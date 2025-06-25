import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Page_meu_servico.css'


function Page_meu_servico() {
  
  const navigate=useNavigate()
  
  return (
    <div className='container_page_meu_serviço'>

<div className='conteiner_meu_serviço'>


 <div className='card_servico'>
      <img src={'https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936256.jpg' || null} className='poster' />
      <p className="categoria_servico_especifico">sssssss</p>
      <p className='titulo_servico'></p>
      <p>texto muito foda</p>
      <p>100R$</p>

      {/* <button onClick={() => deleteServicos(servico.servico_id)}>Apagar Serviço</button>
    <button onClick={() => UpdateServicos(servico.servico_id)}>edita servico</button> */}
    
    
    </div>






<button onClick={()=>{navigate('/cadastro_servico')}}>cadastar servico</button>


</div>



    </div>
  )
}

export default Page_meu_servico