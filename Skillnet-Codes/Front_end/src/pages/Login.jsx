import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const Cadastro = useNavigate()


  return (
    <div>
<div className='container'>

<img className='imgCadastro' src="./images/imageLogin.jpg" alt="" />

<div className='container_cadastro'>
  <div className='containerCadastro'><button className='btnIrLogin' onClick={()=>{Cadastro('/Cadastro')}}>CADASTRE-SE</button></div>
  <div className='containerTitle'><h1 className='LoginH1'>Faça seu <span className='spanH1'>Login</span>! </h1></div>
  <div className='divInputs'>

  
    <div className='container_inputs'><label htmlFor=""className='lblLogin'>Email</label> <input type="text" className='inptLogin' placeholder='Digite seu email'/></div>

    <div className='container_inputs'><label htmlFor="" className='lblLogin2'>Senha</label> <input type="password" className='inptLogin2' placeholder='Digite sua senha' /></div>

  </div>
  <button type='submit' className='btnLogin'>LOGAR</button>
 </div>
</div>
    </div>
  )
}

export default Login