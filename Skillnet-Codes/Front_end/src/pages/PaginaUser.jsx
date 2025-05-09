import React, { use } from 'react'
 import './PaginaUser.css'
 import { useState } from "react";
 import { useContext } from 'react';
 import { GlobalContext } from '../context/Globalcontext';
 import axios from 'axios';
function PaginaUser() {

    const {userLogado,setUserLogado}=useContext(GlobalContext)
      // Estado para controlar a exibição do modal
      
      const [isModalOpen, setIsModalOpen] = useState(false);

      const [inptNome,setInptNome]=useState()
      const [inptEmail,setInptEmail]=useState()
      const [inptSenha,setInptSenha]=useState()
      
    
      // Função para abrir o modal de edição
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      // Função para fechar o modal
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      // Função para atualizar as informações do usuário
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
    
      // Função para deletar a conta do usuário
      const deleteUser = async() => {
        if (window.confirm("Tem certeza que deseja deletar sua conta?")) {
         
          // Aqui você pode adicionar lógica para deletar o usuário
         let  id =userLogado.id
          const result =  await axios.delete(`http://localhost:3000/delete_user/${id}`)

          setUserLogado('')
        }
      };
  return (
    <div>
        <div className="container">
        {/* Tela de Exibição de Informações */}
        <div className="user-info-card">
            <h2>Informações do Usuário</h2>
            <p>
            <strong>Nome:</strong> {userLogado.nome}
            </p>
            <p>
            <strong>Email:</strong> {userLogado.email}
            </p>
            <p>
            <strong>Senha:</strong> {userLogado.senha}
            </p>
            <button className="button" onClick={openModal}>Alterar Informações</button>
        </div>

        {/* Modal de Edição */}
        <div className={`modal-overlay ${isModalOpen ? "show" : ""}`}>
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
    </div>
  )
}

export default PaginaUser
