import React from 'react'
 import './PaginaUser.css'
 import { useState } from "react";
function PaginaUser() {

    const [user, setUser] = useState({
        name: "João Silva",
        email: "joao.silva@email.com",
        password: "********"
      });
    
      // Estado para controlar a exibição do modal
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      // Função para abrir o modal de edição
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      // Função para fechar o modal
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      // Função para atualizar as informações do usuário
      const updateUser = (name, email, password) => {
        setUser({ name, email, password: "********" });
        closeModal();
      };
    
      // Função para deletar a conta do usuário
      const deleteUser = () => {
        if (window.confirm("Tem certeza que deseja deletar sua conta?")) {
          alert("Conta deletada com sucesso!");
          // Aqui você pode adicionar lógica para deletar o usuário
        }
      };
  return (
    <div>
        <div className="container">
        {/* Tela de Exibição de Informações */}
        <div className="user-info-card">
            <h2>Informações do Usuário</h2>
            <p>
            <strong>Nome:</strong> {user.name}
            </p>
            <p>
            <strong>Email:</strong> {user.email}
            </p>
            <p>
            <strong>Senha:</strong> {user.password}
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
                defaultValue={user.name}
                required
                />
                <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Email"
                defaultValue={user.email}
                required
                />
                <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Senha"
                defaultValue={user.password}
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
