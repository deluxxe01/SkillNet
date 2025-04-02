import React, { use, useState } from 'react'
import './Cadastro.css'
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
    
    }
    
  }


  return (
    <div >
      <div className='container'>

        <img className='imgCadastro' src="./images/Cara_cadastro.svg" alt="" />

        <div className='container_cadastro'>
          <div className='containerLogin'><button className='btnIrLogin' onClick={() => { login('/Login') }}>LOGIN</button></div>
          <div><h1 className='cadatroH1'><span className='spanH1'>Crie</span> sua conta! </h1></div>
          <div className='divInputs'>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Nome de Usuario</label>
              <input type="text" className='inpt' placeholder='digite seu nome de usuario' onChange={(event)=>{setInptNome(event.target.value)}} />
            </div>


            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Email</label> 
              <input type="text" className='inpt' placeholder='digite seu Email' onChange={(e)=>{setInptEmail(e.target.value)}} />
              </div>

            <div className='container_inputs'>
              <label htmlFor="" className='lblCadastro'>Senha</label> 
              <input type="password" className='inpt' placeholder='digite sua senha' onChange={(e)=>{setInptSenha(e.target.value)}}/></div>

            <div className='divCheckBox'>
              <div className='inptCheck' 
              style={ inptCheck ? {backgroundColor: '#304B00' } : {backgroundColor: '#2f4b0000'}} 
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