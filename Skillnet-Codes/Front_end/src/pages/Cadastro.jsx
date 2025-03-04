import React from 'react'
import './Cadastro.css'
function Cadastro() {
  return (
    <div >
      <div className='container'>

      <img className='imgCadastro' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F1-mZskCCUZidmPBIM60PPKu0zhiXqXA6A&s" alt="" />

      <div className='container_cadastro'>
        <div className='containerLogin'><button>login</button></div>
        <div><h1 className='cadatroH1'><span className='spanH1'>Crie</span> sua conta ! </h1></div>
        <div className='divInputs'>

          <div className='container_inputs'><label htmlFor="">Nome de isuario</label><input type="text" className='inpt'/></div>

          <div className='container_inputs'><label htmlFor="">Email</label> <input type="text" className='inpt'/></div>

          <div className='container_inputs'><label htmlFor="">Senha</label> <input type="password" className='inpt' /></div>

        </div>
        <button type='submit' className='btnCadastro'>Cadastrar</button>
       </div>
      </div>

        
    </div>
  )
}

export default Cadastro