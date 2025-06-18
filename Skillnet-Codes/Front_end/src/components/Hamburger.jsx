import React, { useState } from 'react';
import './Hamburger.css';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

    return(
        <div>
   {/* Botão hamburger */}
   <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <img 
          src="public/images/logoVerde.jpg"  
          alt="Menu" 
    
        />
      </button>

       {/* Menu aparece só se isOpen for true */}
       
       {isOpen && (
  <div className="ContainerMenuWrapper">
    <div className="ContainerMenu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/area_servico_pesquisado">Serviços</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Perfil</a></li>
      </ul>
    </div>
  </div>
)}
      </div>
    )
}

export default Hamburger;