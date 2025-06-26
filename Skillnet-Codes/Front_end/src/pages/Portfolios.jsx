import React, { useState, useMemo, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import '../pages/Portfolios.css';
import { GlobalContext } from '../context/Globalcontext';

function Portfolios() {
    const [filtraServico, setFiltraServico] = useState('');
 
    const {portfolios, setPortfolios}=useContext(GlobalContext)
  
    
    async function getServicos() {
      const response = await api.get('/servicos');
      setCadastroServico(response.data); // agora atualiza o contexto global
      console.log(response)
    }

    const navigate = useNavigate();

    const irParaCadastro = () => {
      navigate('/portfolioeditar');
    }
  
    useEffect(() => {
      getServicos();
    }, []); // roda apenas uma vez ao montar
  
return(
<div className="Container">


<div className="Container-Portfolios">
    <Header />
    
     <h1  onClick={irParaCadastro} className='clique'>Clique Aqui para criar um portfolio!</h1>

    <div className='container_barra_pesquisa'>
          <h1 className='h1_servicos'>Portfolios</h1>
          <div className='barra_verde'></div>
          <div className='container_inpt_pesquisa'>
            <input
              type='text'
              className='inpt_barra_pesquisa'
              placeholder='Procure a sua área'
              value={filtraServico}
              onChange={(e) => setFiltraServico(e.target.value)}
              />
          </div>
     </div>

    <div className='FormulárioPortfolios'>
        <div className='ListsPortfolios'>

{portfolios.map((portfolio) => (
   <Link  key={servico.servico_id} to={`/servico/${servico.servico_id}`} className='Link_servico'>

  <div className='card_servico'>
      <img src={servico.imagem_capa || null} className='poster' />
      <p className="categoria_servico_especifico">{servico.area}</p>
      <p className='titulo_servico'>{servico.titulo}</p>
      <p><strong></strong> {servico.descricao}</p>
      <p>{servico.preco_minimo}R$</p>

      {/* <button onClick={() => deleteServicos(servico.servico_id)}>Apagar Serviço</button>
    <button onClick={() => UpdateServicos(servico.servico_id)}>edita servico</button> */}
    
    
  </div>
    </Link>

  ))}
        </div>
    </div>
</div>

</div>
)
}
export default Portfolios