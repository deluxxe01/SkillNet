import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Globalcontext'
import axios from 'axios'
import { useEffect } from 'react'
import "./UserEditinfos.css"
import { useNavigate } from 'react-router-dom'
import ModalConfirm from './ModalConfirm'
function UserEditInfos() {
    const {userLogado,setUserLogado} = useContext(GlobalContext)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [inptShow,setInptShow]=useState(true)
    const [password,setPassword] = useState('password')
    const [inputNome,setInputNome]=useState(userLogado.nome)
    const [inputEmail,setInputEmail]=useState(userLogado.email)
    const [inputSenha,setInputSenha]=useState(userLogado.senha)
    const [controladorNome,setControladorNome]=useState()
    const [isReadOnly,setIsReadOnly]=useState(true)
    const navigate=useNavigate()

       const showPassword = () => {
        setInptShow(!inptShow)
        }
       
        const controlarInputs =  async()=> {
          if(isReadOnly){
            setControladorNome(inputNome)
            setIsReadOnly(false)
          }else{
            if(inputNome==userLogado.nome || inputEmail==userLogado.email){
              setInputNome(userLogado.nome);
              setInputEmail(userLogado.email) // Não altera, apenas garante o valor correto
            }
           
            let infos={
              id_usuario:userLogado.id_usuario,
              nome:inputNome,
              email:inputEmail,
              senha:inputSenha
            }
            console.log(userLogado.id_usuario)
            if(inputEmail==userLogado.email || inputNome==userLogado.nome  || inputSenha==userLogado.senha){
              alert("insira valores novos nos campos")
              setIsReadOnly(false)
            }else{
              const result =  await axios.put('/api/put_user',infos)
           
              setUserLogado(infos)
               console.log("nomeUser"+userLogado.id_usuario)
              console.log("resultado do banco",result.data.user)
              setIsReadOnly(true)
            }
         
        }
      }
       const deleteUser = async() => {
         await axios.delete(`http://localhost:3000/delete_user/${userLogado.id_usuario}`)
          console.log("deu certo")
          navigate('/')
       }
        function fecharModal(){
       setIsModalOpen(false)
        
       }

     
       
   
  return (
    <div className='containerEditInfos'>  
      
        <h1 className='h1UserProfile'>Editar Perfil</h1>
        <form >
          <label htmlFor="nome">Nome completo</label>
          <input type="text" id="nome" value={inputNome}  readOnly={isReadOnly} onChange={(e)=>{setInputNome(e.target.value)}} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={inputEmail} readOnly={isReadOnly} onChange={(e)=>{setInputEmail(e.target.value)}} />
          <div className='containerInptPass'>
            <label htmlFor="senha">Senha</label>
            <div>
            <input type={inptShow ? "password" :"text"} id="senha" value={inputSenha} readOnly={isReadOnly} onChange={(e)=>{setInputSenha(e.target.value)}}/> <button type='button' className='btnShowPasword' onClick={showPassword}><img className='imgOlhos' src={inptShow ? "./icons/olhoFechado.png" : "./icons/olho_cheio.png"} alt="" /></button>
            </div>
          </div>
          <button type="button" className="btn salvar" onClick={controlarInputs}>{isReadOnly ?"editar":"salvar"}</button>
          {isReadOnly ? '':<button type="button" className="btn cancelar" onClick={()=>{setIsReadOnly(true)}}>Cancelar</button>}
          {isReadOnly ? <button type='button' className='btn cancelar' onClick={()=>{setIsModalOpen(!isModalOpen)}}>Deletar</button>:''}
        
        </form>
          {isModalOpen ? 
          <ModalConfirm logOut={deleteUser} 
          fecharModal={fecharModal} 
          url={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNTI1MjUyIiBkPSJNMTEgMTZoMnYtNC4xNWwxLjYgMS41NUwxNiAxMmwtNC00bC00IDRsMS40IDEuNGwxLjYtMS41NXptLTYgNVY2SDRWNGg1VjNoNnYxaDV2MmgtMXYxNXoiLz48L3N2Zz4='} 
          titulo={'Deseja excluir sua conta?'} 
          descricao={'Essa ação é permanente e não poderá ser desfeita. Todos os seus dados e mensagens serão apagados do SkillNet.'}
          
          />
           : ''}
    </div>
  )
}
export default UserEditInfos