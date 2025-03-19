import React, { useState } from 'react'
import Header from '../components/Header'
import "./Area_servico_pesquisado.css"

function Area_servico_pesquisado() {
 const[valorInptPesquisa,setValorInptPesquisa] = useState("")
    let cardTrabalhosRango = 
    {titulo:'rango',
    snipose:'Um camaleão que viveu como um animal de estimação se encontra em uma crise de identidade. Rango se questiona',
    capa:'https://i.scdn.co/image/ab67616d0000b27306ed1d9098d927cd5eabd758'
    
    
    
    }
    let cardTrabalhosDuna = 
    {titulo:'Duna',
    snipose:'Um camaleão que viveu como um animal de estimação se encontra em uma crise de identidade. Rango se questiona',
    capa:'https://upload.wikimedia.org/wikipedia/pt/a/a3/Dune_2021.jpeg'
    
    
    
    }
    let cardTrabalhosClick = 
    {titulo:'Click',
    snipose:'Um camaleão que viveu como um animal de estimação se encontra em uma crise de identidade. Rango se questiona',
    capa:'https://m.media-amazon.com/images/S/pv-target-images/e4232de175bdb04555da6115c40d948ed477d80cba98ad39185b2534034328f3.jpg'
    
    
    
    }

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
   <h1 className='h1_serviços_dois'>{valorInptPesquisa || 'serviço'}</h1>
     <div className='container_servicos'>
<div className='card_serviço'>
<h1>{ cardTrabalhosClick.titulo}</h1>
<img src={ cardTrabalhosClick.capa} alt=""  className='img_card' />
<p className='sinopse_card'>{ cardTrabalhosClick.snipose}</p>

</div>
<div className='card_serviço'>
<h1>{cardTrabalhosDuna.titulo}</h1>
<img src={cardTrabalhosDuna.capa} alt=""  className='img_card' />
<p className='sinopse_card'>{cardTrabalhosDuna.snipose}</p>

</div>
<div className='card_serviço'>
<h1>{cardTrabalhosRango.titulo}</h1>
<img src={cardTrabalhosRango.capa} alt=""  className='img_card' />
<p className='sinopse_card'>{cardTrabalhosRango.snipose}</p>

</div>



     </div>
       
       
        </div>
  )
}
export default Area_servico_pesquisado