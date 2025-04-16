import React, { use, useState } from 'react'
import './Cadastro.css'
// importando a bliblioteca de carrosel e alguns de seus modulos
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios'

function Cadastro() {
  const [checkBox, setCheckBox] = useState()
  const login = useNavigate()
  const [inptCheck,setInptCheck]=useState(false)

  const [inptNome,setInptNome] = useState()
  const [inptEmail,setInptEmail]=useState()
  const [inptSenha,setInptSenha]=useState()
  
  const cadastroConta = () => {
    
    if(inptCheck == false|| inptEmail=="" || inptNome =="" || inptSenha==""){
      alert('porfavor prencha os campos e aceite nossos termos')
    }else{
      let usuario = {
        nome:inptNome,
        email:inptEmail,
        senha:inptSenha
        
      } 
      console.log(usuario)
      const resultado =axios.post('http://localhost:3000/UsuarioLogado',usuario) 
      login('/Area_servico_pesquisado')
    
    }
    
  }


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
          <img src="./images/img_carrosell_soin.jpg" alt="Imagem 1" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/favela_verde.jpg" alt="Imagem 2" className="carrossel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img_carrosel_prog.jpg" alt="Imagem 3" className="carrossel-img" />
        </SwiperSlide>
      </Swiper>



   
  </div>
      
      
        
        <div className='container_cadastro'>
          <div className='containerLogin'><button className='btnIrLogin' onClick={() => { login('/Login') }}>LOGIN</button></div>
          <div><h1 className='cadatroH1'><span className='spanH1'>Crie</span> sua conta! </h1></div>
          <div className='divInputs'>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Nome de Usuario</label>
              <input type="text" className='inpt_nome' placeholder='digite seu nome de usuario' onChange={(event)=>{setInptNome(event.target.value)}} />
            </div>


            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Email</label> 
              <input type="text" className='inpt_email' placeholder='digite seu Email' onChange={(e)=>{setInptEmail(e.target.value)}} />
              </div>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Senha</label> 
              <input type="password" className='inpt_senha' placeholder='digite sua senha' onChange={(e)=>{setInptSenha(e.target.value)}}/></div>

            <div className='divCheckBox'>
              <div className='inptCheck' 
              style={ inptCheck ? {backgroundColor: '#83CF41' } : {backgroundColor: '#2f4b0000', backgroundImage:"url()"}} 
              onClick={()=>{setInptCheck(!inptCheck)}}>
              </div>
              <p className='pCheck'><span className='spanCheck'>Aceito os</span> termos de serviços</p>
            </div>

          </div>
          <button type='submit' className='btnCadastro' onClick={cadastroConta}>CADASTRAR</button>
        </div>
      </div>


    </div>
  )
}

export default Cadastro