import React, { useEffect } from 'react'
import { useState } from 'react'
import './PaginaUsuario.css'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import ModalTrocaInfos from '../components/ModalTrocaInfos'

function PaginaUsuario() {
    const [inptNome,setInptNome]=useState('')
    const [inptSenha,setInptSenha]=useState('')
    const [inptEmail,setInptEmail]=useState('')
    const {userLogado,setUserLogado} = useContext(GlobalContext)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const navigate = useNavigate()
    const [inptShow,setInptShow]=useState(true)
    const [password,setPassword] = useState('password')

    const showPassword = () => {
    setInptShow(!inptShow)
    }

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
          <div className='containerInptPass'>
            <label htmlFor="senha">Senha</label>
            <div>
            <input type={inptShow ? "password" :"text"} id="senha" value={userLogado.senha} readOnly /> <button type='button' className='btnShowPasword' onClick={showPassword}><img className='imgOlhos' src={inptShow ? "./icons/olhoFechado.png" : "./icons/olho_cheio.png"} alt="" /></button>
            </div>
          </div>
          <button type="button" className="btn salvar" onClick={()=>{setIsModalOpen(!isModalOpen)}}>Editar</button>
          <button type="button" className="btn cancelar">Cancelar</button>
        </form>
      </div>
     </div>
     {isModalOpen ?<ModalTrocaInfos open={isModalOpen} onClose={closeModal}/>:''}
    </div>
  )
}

export default PaginaUsuario
