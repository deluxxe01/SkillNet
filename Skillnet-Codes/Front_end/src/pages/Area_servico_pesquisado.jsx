import React, { useState } from 'react'
import Header from '../components/Header'
import "./Area_servico_pesquisado.css"

function Area_servico_pesquisado() {
 const[valorInptPesquisa,setValorInptPesquisa] = useState("")
    
    return (
    <div>
   
      <div className='container_img_bg '>
     
      <Header/>
     
      <div className='espaço_livre'>
     
      </div>
<div className='container_barra_pesquisa'>
<h1 className='h1_serviços'>serviços</h1>
<div className=' container_inpt_pesquisa'>
<input 
type="text"
 className='inpt_barra_pesquisa' 
  placeholder='Procure a sua área'
  
  value={valorInptPesquisa}

      onChange={(event)=>{setValorInptPesquisa(event.target.value)}}
  />
</div>
</div>
     
      </div>
   <h1 className='h1_serviços_dois'>{valorInptPesquisa}</h1>
     <div className='container_servicos'></div>
       
       
        </div>
  )
}
export default Area_servico_pesquisado