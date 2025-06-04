import './UserInfos.css'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Globalcontext'
import { useNavigate } from 'react-router-dom'
function UserInfos(){
const navigate = useNavigate()
const {userLogado,setUserLogado} = useContext(GlobalContext) 
const [isModalOpen,setIsModalOpen]=useState(false)
const [inptShow,setInptShow]=useState(true)
const [password,setPassword] = useState('password')

   const showPassword = () => {
    setInptShow(!inptShow)
    }
    const logOut= () => {
        navigate('/')
        setUserLogado('')
        localStorage.removeItem("token")
        

    }

    


    return (
        <div>
             <h1 className='h1UserProfile'>Olá {userLogado.nome}, seja bem-vindo!</h1>
             <form >
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
        <button class="noselect" onClick={logOut}><span class="text">Sair</span>
        <span class="icon">
        <img className='imgLogOut' src="./icons/seta-esquerda.png" alt="" />
         </span></button>
        </form>

        </div>

    )
}


export default UserInfos