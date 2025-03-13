import React, { useEffect, useState } from 'react'
import './Landinpage4.css'
import axios from 'axios'
import CardPortifolios from'../components/CardPortifolios'


function Landinpage4() {
  const [vetorPortifolios,setVetorPortifolios] = useState([]) 

const melhoresPortifolios = async()=>{
   const resultado =  await axios.get('http://localhost:3000/') 
   setVetorPortifolios(resultado.data)
   console.log(resultado.data)
}
useEffect(()=>{
  melhoresPortifolios()
  

},[])


  return (
    <div className=''>
        <div className='container_landingPage4'>
          <div>
            <h1 className='h1Titulo'>PORTIFÓLI<span className='spanBarraVerde'>OS MAIS</span> CURTIDOS</h1>
          </div>          
          <div className='containerMaisCurtidos'>
            {vetorPortifolios.map(portifolio=>(<CardPortifolios key={portifolio.id} infos={portifolio} />))}
          </div>
        </div>
    </div>
  )
}

export default Landinpage4