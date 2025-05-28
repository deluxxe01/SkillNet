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
          src="/images/logoRosa.jpg"  
          alt="Menu" 
    
        />
      </button>

       {/* Menu aparece só se isOpen for true */}
       
        <dialog open={isOpen}>
          <div className='ContainerMenu'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolios">Portfólios</a></li>
              <li><a href="#perfil">Perfil</a></li>
            </ul> 
            </div>
          </dialog>
      </div>
    )
}

export default Hamburger;