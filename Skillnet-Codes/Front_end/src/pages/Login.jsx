import React, { useState,useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from 'axios';
import { GlobalContext } from '../context/Globalcontext';
import { useContext } from 'react';
import ModalError from '../components/ModalError';


function Login() {
  const Cadastro = useNavigate()
  const [inptEmail,setInptEmail]=useState('')
  const [inptSenha,setInptSenha]=useState('')
  const {userLogado,setUserLogado} = useContext(GlobalContext)
  const [open,setOpen]=useState()
  const [titulo,setTitulo]=useState()
  const [descricao,setDescricao]=useState()

  const Logar = async()=>{
    
    if(inptEmail == "" || inptSenha == ""){
      setOpen(true)
      setTitulo("Erro")
      setDescricao("porfavor prencha os campos")
      tempoModal()

      
      

    }else{

      const infos={
        email:inptEmail,
        senha:inptSenha
      }

      const result = await axios.post('http://localhost:3000/login_user',infos)
      console.log(result)
      
      
      if(result.data == false){
          setOpen(true)
          setTitulo("Erro no Login")
          setDescricao("Usuário não encontrado ou dados incorretos. Por favor, verifique e tente novamente.");
          tempoModal()
          console.log("deu merda")
      
      }else{
        localStorage.setItem('token',1)
        setUserLogado(result.data)
        
        console.log(result.data)
        Cadastro('/area_servico_pesquisado')

      }
    }
  }
  useEffect(()=>{
    console.log(inptEmail)
    console.log(inptSenha)

  },[]
)

function tempoModal(){
  setTimeout(()=>{
    setOpen(false)

  },5000)
}



  return (
    <div>
<div className='containerPageLogin'>

<div className="carrossel-container-Login">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      className="swiper_Login"
      
      >
        <SwiperSlide>
          <img src="./images/img_carrosel_onça.jpg" alt="Imagem 1" className="carrossel-img-login" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img_carrosel_arara.jpg" alt="Imagem 2" className="carrossel-img-login" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img_carrosel_vaca.jpg" alt="Imagem 3" className="carrossel-img-login" />
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
{open?<ModalError titulo={titulo} text={descricao} />:''}
    </div>
  )
}

export default Login