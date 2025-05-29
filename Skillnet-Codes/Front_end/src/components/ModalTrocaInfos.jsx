import React, { useState,useContext } from 'react'
import './ModalTrocaInfos.css'
import axios from 'axios';
import { GlobalContext } from '../context/Globalcontext';
import { useNavigate } from 'react-router-dom';

function ModalTrocaInfos(props) {

    const onClose  = props.onClose
    const [inptNome,setInptNome]=useState('')
    const [inptSenha,setInptSenha]=useState('')
    const [inptEmail,setInptEmail]=useState('')
    const {userLogado,setUserLogado} = useContext(GlobalContext)
    const navigate = useNavigate()

    const updateUser = async() => {

        let infos={
          id:userLogado.id_usuario,
          nome:inptNome,
          email:inptEmail,
          senha:inptSenha
        }
     
        const result =  await axios.put('http://localhost:3000/put_user',infos)
        console.log(result.data)
        setUserLogado(result.data)
        closeModal();
      };

      const deleteUser = async() => {
        let  id = userLogado.id_usuario
        const result =  await axios.delete(`http://localhost:3000/delete_user/${id}`)
          setUserLogado('')
          navigate('/')
          localStorage.removeItem(`user${id}`)
        }

  return (
    
         <dialog open={props.open}   className="modal-overlay-troca-info">
            <div className="modal_troca_info">
            <h2>Alterar Informações</h2>
            <form className='form-troca-info'
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
            <button className="button" onClick={onClose}  style={{ backgroundColor: "#aaa" }}>Fechar</button>
            </div>
        </dialog>
  )
}

export default ModalTrocaInfos
