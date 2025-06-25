import React from 'react'
import { useNavigate } from 'react-router-dom'



function Page_meu_servico() {
  
  const navigate=useNavigate()
  
  return (
    <div className='container_page_meu_serviço'>

<button onClick={()=>{navigate('/cadastro_servico')}}>cadastar servico</button>

    </div>
  )
}

export default Page_meu_servico