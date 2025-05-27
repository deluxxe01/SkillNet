import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='containerFooter'>
        <div className='containerOrganizacao'>
          
            <div className='containerSite'>
                <label className='txtMenu'>Menu do site</label>
                <br />
                    <Link to="/" className='buttonFooter'>Home</Link>
                    <Link to="/servico" className='buttonFooter'>Serviços</Link>
                    <Link to="/" className='buttonFooter'>Portifólios</Link>
                    <Link to="/" className='buttonFooter'>Perfil</Link>
            </div>

            <div className='containerSite'>
                <label className='txtMenu'>Endereço</label>
                <br />
                     <Link to="/" className='buttonFooter'>Rua das palmeiras, 789</Link>
                     <Link to="/" className='buttonFooter'>Bairo Coqueiros</Link>
                     <Link to="/" className='buttonFooter'>Floranópolis SC, 88730-201</Link>
            </div>

            <div className='containerSite'>
                <label className='txtMenu'>Desenvolvedores</label>
                <br />
                <a href="https://www.linkedin.com/in/caio-lorram-valente/" className='buttonFooter' target="_blank" rel="noopener noreferrer">
                Caio Lorram Valente
                </a>
                <a href="https://www.linkedin.com/in/vithor-lorram-valente/" className='buttonFooter' target="_blank" rel="noopener noreferrer">
                Vithor Lorram Valente
                </a>
                <a href="https://www.linkedin.com/in/maria-eduarda-klin-de-carvalho/" className='buttonFooter' target="_blank" rel="noopener noreferrer">
                Maria Eduarda Klin de Carvalho
                </a>
            </div>

            <div className='containerSite'>
                <label className='txtMenu'>Contatos</label>
                <br />
                <a href="mailto:skillnet@gmail.com" className='buttonFooter' target="_blank" rel="noopener noreferrer">
                skillnet@gmail.com
                </a>
                <a href="https://wa.me/5548976218562" className='buttonFooter' target="_blank" rel="noopener noreferrer">
                (11) 91234-5678
                </a>
            </div>

        </div>
    </div>
  )
}

export default Footer
