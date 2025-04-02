import React, { use, useState } from 'react'
import './Cadastro.css'
// importando a bliblioteca de carrosel e alguns de seus modulos
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import { useNavigate } from 'react-router-dom'
function Cadastro() {
  const [checkBox, setCheckBox] = useState()
  const login = useNavigate()



  return (
    <div >
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
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Imagem 1" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Imagem 2" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Imagem 3" className="carrossel-img" />
        </SwiperSlide>
      </Swiper>



   
  </div>
      
      
        
        <div className='container_cadastro'>
          <div className='containerLogin'><button className='btnIrLogin' onClick={() => { login('/Login') }}>LOGIN</button></div>
          <div><h1 className='cadatroH1'><span className='spanH1'>Crie</span> sua conta! </h1></div>
          <div className='divInputs'>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Nome de Usuario</label>
              <input type="text" className='inpt' placeholder='digite seu nome de usuario' />
            </div>


            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Email</label> 
              <input type="text" className='inpt' placeholder='digite seu Email' />
              </div>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Senha</label> 
              <input type="password" className='inpt' placeholder='digite sua senha' /></div>

            <div className='divCheckBox'><div className='inptCheck'></div><p className='pCheck'><span className='spanCheck'>Aceito os</span> termos de serviços</p></div>

          </div>
          <button type='submit' className='btnCadastro'>CADASTRAR</button>
        </div>
      </div>


    </div>
  )
}

export default Cadastro