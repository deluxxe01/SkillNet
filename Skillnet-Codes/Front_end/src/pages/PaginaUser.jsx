import React, { use } from 'react'
 import './PaginaUser.css'
 import { useState } from "react";
 import { useContext } from 'react';
 import { GlobalContext } from '../context/Globalcontext';
 import axios from 'axios';
function PaginaUser() {

    const {userLogado,setUserLogado,cadastroServico,setCadastroServico}=useContext(GlobalContext)
      // Estado para controlar a exibição do modal
      
      const [isModalOpen, setIsModalOpen] = useState(false);

      const [inptNome,setInptNome]=useState()
      const [inptEmail,setInptEmail]=useState()
      const [inptSenha,setInptSenha]=useState()
      
    //info inputs serviços
const  [inptTituloServico,setInptTituloServico] = useState('blob')
 
const  [inptImageServico,SetInptImageServico] = useState('blab')
 
const [inptDescricaoServico,setInptDescricaoServico] =useState('blub')

const [inptAreaServico,setInptAreaServico] =useState('blib')

console.log(cadastroServico)

function cadastraServico(){
  setCadastroServico({
    titulo:{inptTituloServico},
    img:{inptImageServico},
    descrição:{inptDescricaoServico},
    area:[inptAreaServico]
  })




}

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
         let  id = userLogado.id
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
    
        <div className='container_cadastra_servico'><h1>cadastra Serviços </h1>
          <label htmlFor="">titulo</label>
          <input type="text" onChange={(event)=>setInptTituloServico(event.target.value)} />
          
          <label htmlFor="">link img</label>
          <input type="text" onChange={(event)=>SetInptImageServico(event.target.value)}/>
          
          <label htmlFor="">descrição</label>
          <input type="text" onChange={(event)=>setInptDescricaoServico(event.target.value)}/>
          
          <label htmlFor="">area do seu serviço</label>
          <input type="text" onChange={(event)=>setInptAreaServico(event.target.value)} />
         
         
<button onClick={cadastraServico}>cadastra servico</button>

<h1>{}</h1>
         </div>
        


        </div> 
    </div>
  )
}

export default PaginaUser
