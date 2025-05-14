import React from 'react'
import { useState } from 'react'
import './PaginaUsuario.css'
function PaginaUsuario() {
    const [inptNome,setInptNome]=useState('')
    const [inptSenha,setInptSenha]=useState('')
    const [inptEmail,setInptEmail]=useState('')
  return (
    <div>
     <div className="container_user">
      <div className="left-panel">
        <img src={'https://images.memphistours.com/large/237d118c34877083620f9cdbabc57bae.jpg'} alt="Imagem de fundo" />
      </div>
      <div className="right-panel">
        <div className="logo">🔗</div>
        <h1>Editar Perfil</h1>

        <form>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" id="nome" value="Maria Eduarda Klin" readOnly />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value="maria_ek_carvalho@estudante.sesi..." readOnly />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value="********" readOnly />

          <button type="submit" className="btn salvar">Salvar</button>
          <button type="button" className="btn cancelar">Cancelar</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default PaginaUsuario
