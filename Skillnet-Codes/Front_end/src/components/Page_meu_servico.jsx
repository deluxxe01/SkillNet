import { useNavigate } from 'react-router-dom';
import './Page_meu_servico.css';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import { Link } from 'react-router-dom';
function Page_meu_servico() {
  const { userLogado, cadastroServico } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [modalAberto, setModalAberto] = useState(false);





  const servicosDoUsuario = Array.isArray(cadastroServico)
    ? cadastroServico.filter(s => Number(s.fk_usuario_id) === Number(userLogado.id_usuario))
    : [];

  return (
    <div className='container_page_meu_serviço'>
      <div className='conteiner_meu_serviço'>
        <h2>Meus Serviços</h2>

        {servicosDoUsuario.length === 0 && <p>Você ainda não tem serviços cadastrados.</p>}

        <div className="meuservico_lista">
          {servicosDoUsuario.map(servico => (
            <Link
                 key={servico.servico_id}
                 to={`/servico/${servico.servico_id}`}
                 className='Link_servico'
               >
           <div  className='card_meu_servico'>
              <img src={servico.imagem_capa || ''} className='poster_meu_servico' />
              <p className='categoria_servico_especifico'>{servico.area}</p>
              <p className='titulo_servico'>{servico.titulo}</p>
              <p>{servico.descricao}</p>
              <p>{servico.preco_minimo} R$</p>
              <button onClick={() => setModalAberto(true)}>Editar serviço</button>
           
            </div>
               </Link>
          ))}
        </div>

        <button onClick={() => navigate('/cadastro_servico')} className='bnt_cadastra_servico'>
          Cadastrar serviço!
        </button>
      </div>

  
    </div>
  );
}

export default Page_meu_servico;
