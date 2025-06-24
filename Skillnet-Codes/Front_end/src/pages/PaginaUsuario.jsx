import React, { useEffect } from 'react'
import { useState } from 'react'
import './PaginaUsuario.css'
import { GlobalContext } from '../context/Globalcontext'
import { useContext } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import UserInfos from '../components/UserInfos'
import UserEditInfos from '../components/UserEditInfos'
import SalasChat from '../components/SalasChat'
import Footer from '../components/Footer'
import Page_meu_servico from '../components/Page_meu_servico'
function PaginaUsuario() {
    const [inptNome,setInptNome]=useState('')
    const [inptSenha,setInptSenha]=useState('')
    const [inptEmail,setInptEmail]=useState('')
    const {userLogado,setUserLogado} = useContext(GlobalContext)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const navigate = useNavigate()
    const [inptShow,setInptShow]=useState(true)
    const [password,setPassword] = useState('password')
    const [paginasUser,setPaginaUser]=useState(0)

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
          let  id = userLogado.id_usuario
          const result =  await axios.delete(`http://localhost:3000/delete_user/${id}`)
            setUserLogado('')
            navigate('/')
            localStorage.removeItem(`user${id}`)
          }

          
  return (
    <div className='containerUserProfile'>
      <Header />
     <div className="container_user">
      <div className="left-panel">
       <div className='optionBtn' onClick={()=>{setPaginaUser(0)}}><img src="./icons/perfilIcon.svg" alt="" className='imgProfile ' /> perfil </div>
       <div className='optionBtn' onClick={()=>{setPaginaUser(1)}}> <img src="./icons/editarIcon.svg" alt="" className='imgProfile' /> editar perfil </div>
       <div className='optionBtn' onClick={()=>{setPaginaUser(2)}}><img src="./icons/chatIcon.svg" alt="" className='imgProfile' />   conversas </div>
       {/* <div className='optionBtn'><img src="./icons/servicosIcon.svg" alt="" className='imgProfile' /> serviços </div> */}
       <div class="dropdown">
      <button class="dropbtn">serviços ▼</button>
      <div class="dropdown-content">
        <a href="#" onClick={()=>{setPaginaUser(3)}}>meus serviços</a>
        <a href="#">Serviço contratado</a>
    </div>
  </div>
       <div className='optionBtn'><img src="./icons/portifolioIcon.svg" alt="" className='imgProfile' />portifolios</div>
      </div>

      <div className="right-panel">
        {paginasUser == 0 && <UserInfos />}
        {paginasUser == 1 && <UserEditInfos /> }
        {paginasUser == 2 && <SalasChat />}
        {paginasUser ==3 && <Page_meu_servico/>}
      </div>
     </div>
     <Footer />
    </div>
    
      
      
  )
}

export default PaginaUsuario
