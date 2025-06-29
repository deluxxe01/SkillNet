import { useNavigate } from 'react-router-dom';
import './Page_meu_servico.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext'; 

function Page_meu_servico() {
  const { userLogado, cadastroServico } = useContext(GlobalContext);
  const navigate = useNavigate();

  
  const servicosDoUsuario = Array.isArray(cadastroServico)
    ? cadastroServico.filter(s => Number(s.fk_usuario_id) === Number(userLogado.id_usuario))
    : [];

  console.log("Serviços do usuário:", servicosDoUsuario);

  return (
    <div className='container_page_meu_serviço'>
      <div className='conteiner_meu_serviço'>
        <h2>Meus Serviços</h2>

        {servicosDoUsuario.length === 0 && <p>Você ainda não tem serviços cadastrados.</p>}

        <div className="meuservico_lista">
          {servicosDoUsuario.map(servico => (
            <div key={servico.servico_id}>
              <h3 className="meuservico_titulo">{servico.titulo}</h3>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/cadastro_servico')}>
          Cadastrar serviço
        </button>
      </div>
    </div>
  );
}

export default Page_meu_servico;
