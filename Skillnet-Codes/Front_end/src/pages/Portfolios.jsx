import React, { useState, useMemo, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import '../pages/Portfolios.css';
import { GlobalContext } from '../context/Globalcontext';

function Portfolios() {
   
return(
<div className="Container">


<div className="Container-Portfolios">
    <Header />
    
     <h1  onClick={irParaCadastro} className='clique'>Clique Aqui para criar um portfolio!</h1>

  

    <div className='FormulárioPortfolios'>
        <div className='ListsPortfolios'>


        </div>
    </div>
</div>

</div>
)
}
export default Portfolios