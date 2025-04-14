import React, { useState,useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Login() {
  const Cadastro = useNavigate()
  const [inptEmail,setInptEmail]=useState('')
  const [inptSenha,setInptSenha]=useState('')

  const Logar = ()=>{
    
    if(inptEmail == "" || inptSenha == ""){
      alert('porfavor prencha os campos')

    }else{
      // Cadastro("/Area_servico_pesquisado")
      Cadastro('/Servico')
    }
  }
  useEffect(()=>{
    console.log(inptEmail)
    console.log(inptSenha)

  },[])


  return (
    <div>
<div className='container'>

<div className="carrossel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      className="swiper_cadastro"
      
      >
        <SwiperSlide>
          <img src="./images/img_carrosel_onça.jpg" alt="Imagem 1" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img_carrosel_arara.jpg" alt="Imagem 2" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img_carrosel_vaca.jpg" alt="Imagem 3" className="carrossel-img" />
        </SwiperSlide>
      </Swiper>



   
  </div>

<div className='container-login'>
  <div className='containerCadastro'>
    <button className='btnIrCadastro' onClick={()=>{Cadastro('/Cadastro')}}>CADASTRE-SE</button>
  </div>
  <div className='containerTitle'>
    <h1 className='LoginH1'>Faça seu <span className='spanLogin'>Login!</span></h1>
  </div>
  <div className='divInputs'>

  
    <div className='container_inputs'>
      <label htmlFor=""className='lblLogin'>Email</label> 
      <input type="text" className='inptLogin' placeholder='Digite seu email' 
      onChange={(e) => {setInptEmail(e.target.value)}}/>
    </div>

    <div className='container_inputs'>
       <label htmlFor="" className='lblLogin2'>Senha</label>
       <input type="password" className='inptLogin2' placeholder='Digite sua senha' onChange={(e) => {setInptSenha(e.target.value)}} />
    </div>

  </div>
  <button type='submit' className='btnLogin' onClick={Logar}>LOGAR</button>
 </div>
</div>
    </div>
  )
}

export default Login