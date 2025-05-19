import React from 'react'
import { useState } from 'react'
import './PaginaUsuario.css'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function PaginaUsuario() {
    const [inptNome,setInptNome]=useState('')
    const [inptSenha,setInptSenha]=useState('')
    const [inptEmail,setInptEmail]=useState('')
    const {userLogado,setUserLogado} = useContext(GlobalContext)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const navigate = useNavigate()

      const updateUser = async() => {

        let infos={
          id:userLogado.id,
          nome:inptNome,
          email:inptEmail,
          senha:inptSenha
        }
     
        const result =  await axios.put('http://localhost:3000/put_user',infos)
        console.log(result.data)
        setUserLogado(result.data)
        closeModal();
      };

    const closeModal = () =>{
      setIsModalOpen(false)
    }

    const openModal = () => {

      setIsModalOpen(true)

    }
      // Função para deletar a conta do usuário
      const deleteUser = async() => {
          let  id = userLogado.id
          const result =  await axios.delete(`http://localhost:3000/delete_user/${id}`)
            setUserLogado('')
            navigate('/')
            localStorage.removeItem(`user${id}`)
            

          }
  return (
    <div>
      <Header />
     <div className="container_user">
      <div className="left-panel">
        <img src={'https://images.memphistours.com/large/237d118c34877083620f9cdbabc57bae.jpg'} alt="Imagem de fundo" />
      </div>
      <div className="right-panel">
        <div className="logo">🔗</div>
        <h1>Editar Perfil</h1>

        <form>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" id="nome" value={userLogado.nome} readOnly />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={userLogado.email} readOnly />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value={userLogado.senha} readOnly />

          <button type="button" className="btn salvar" onClick={openModal}>Editar</button>
          <button type="button" className="btn cancelar">Cancelar</button>
        </form>
      </div>
     </div>
    <div  className={`modal-overlay ${isModalOpen ? "show" : ""}`}>
            <div className="modal">
            <h2>Alterar Informações</h2>
            <form
                onSubmit={e => {
                e.preventDefault();
                updateUser(e.target.name.value, e.target.email.value, e.target.password.value);
                }}
            >
                <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Nome"
                onChange={(e)=>{
                  setInptNome(e.target.value)

                }}
                required
                />
                <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Email"
                onChange={(e)=>{
                  setInptEmail(e.target.value)
                }}
                required
                />
                <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Senha"
                onChange={(e)=>{
                  setInptSenha(e.target.value)
                }}
                required
                />
                <button type="submit" className="button">Alterar Informações</button>
                <button
                type="button"
                className="button danger-button"
                onClick={deleteUser}
                >
                Deletar Conta
                </button>
            </form>
            <button className="button" onClick={closeModal} style={{ backgroundColor: "#aaa" }}>Fechar</button>
            </div>
        
        
      
        </div>
    </div>
  )
}

export default PaginaUsuario
