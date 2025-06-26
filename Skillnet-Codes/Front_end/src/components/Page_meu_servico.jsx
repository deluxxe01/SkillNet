import { useNavigate } from 'react-router-dom';
import './Page_meu_servico.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext'; 

function Page_meu_servico() {
  const { userLogado, cadastroServico } = useContext(GlobalContext);
  const navigate = useNavigate();

  
  if (!userLogado || !cadastroServico) {
    return <p>Carregando...</p>;
  }


  



 const servicosDoUsuario = cadastroServico.filter(
  (s) => Number(s.fk_Usuario_id) === Number(userLogado.id_usuario)
);




console.log("User logado:", userLogado);
console.log("ID do usuário logado:", userLogado.id_usuario);
console.log("Serviços cadastrados:", cadastroServico);

  return (
    <div className='container_page_meu_serviço'>
      <div className='conteiner_meu_serviço'>
        <h2>Meus Serviços</h2>

        {servicosDoUsuario.length === 0 && <p>Você ainda não tem serviços cadastrados.</p>}

        <div className="meuservico_lista">
  {servicosDoUsuario.map(servico => (
  <div key={servico.servico_id}>
      <img src={servico.imagem_capa} className="meuservico_img" alt="Capa do serviço" />
      <h3 className="meuservico_titulo">{servico.titulo}</h3>
      <p className="meuservico_descricao">{servico.descricao}</p>
      <div className="meuservico_categoria_container">
        <span className="meuservico_categoria">{servico.area}</span>
      </div>
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
