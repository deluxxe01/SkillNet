import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='containerFooter'>
        <div className='containerOrganizacao'>
            <div className='containertxtLogo'>
                <img src="./logo_SkillNet.svg" alt="" />
                <label>CONTATE-NOS</label>
            </div>
            <div className='containerMenuSite'>
                <label className='txtMenu'>Menu do site</label>
                <br />
                <button>Home</button>
                <button>Serviços</button>
                <button>Portifólios</button>
                <button>Perfil</button>
            </div>
            <div className='containerEndereço'>
                <label className='txtEnd'>Endereço</label>
                <br />
                <label>Rua das palmeiras, 789</label>
                <label>Bairo Coqueiros</label>
                <label>Floranópolis SC, 88730-201</label>
            </div>
            <div className='containerContatos'>
                <label className='txtCntt'>Contatos</label>
                <div className='email'>
                    <img src="./gmail.svg" alt="" />
                    <label>skillnet@gmail.com</label>
                </div>
                <br />
                <div className='telefone'>
                    <img src="./telefone.svg" alt="" />
                    <label>(48)97621-8562</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
