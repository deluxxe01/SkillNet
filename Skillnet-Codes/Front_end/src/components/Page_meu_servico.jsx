import { useNavigate } from 'react-router-dom';
import './Page_meu_servico.css';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import { Link } from 'react-router-dom';
import api from '../Services/api';

function Page_meu_servico() {
  const { userLogado, cadastroServico, setCadastroServico } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const servicosDoUsuario = Array.isArray(cadastroServico)
    ? cadastroServico.filter(s => Number(s.fk_usuario_id) === Number(userLogado.id_usuario))
    : [];

  const abrirModalConfirmacao = (servico) => {
    setServicoSelecionado(servico);
    setModalConfirmacaoAberto(true);
  };

  const fecharModalConfirmacao = () => {
    setModalConfirmacaoAberto(false);
    setServicoSelecionado(null);
  };

  async function deleteServicos(id) {
    try {
      await api.delete(`/servicos/${id}`);

      // Atualiza o estado removendo o serviço excluído
      const novaLista = cadastroServico.filter(s => s.servico_id !== id);
      setCadastroServico(novaLista);

      fecharModalConfirmacao();
    } catch (error) {
      console.error('Erro ao excluir serviço:', error);
      alert('Erro ao excluir o serviço. Tente novamente.');
    }
  }

  return (
    <div className='container_page_meu_serviço'>
      <div className='conteiner_meu_serviço'>
        <h2>Meus Serviços</h2>

        {servicosDoUsuario.length === 0 && (
          <p>Você ainda não tem serviços cadastrados.</p>
        )}

        <div className="meuservico_lista">
          {servicosDoUsuario.map(servico => (
            <div className='card_meu_servico' key={servico.servico_id}>
              <img
                src={servico.imagem_capa || ''}
                className='poster_meu_servico'
                alt="Imagem do serviço"
              />

              <div className='area_servico_excluir'>
                <p className='categoria_servico_especifico'>{servico.area}</p>
                <button onClick={() => abrirModalConfirmacao(servico)}  className='excluir_servico-bnt'>
                  Excluir
                </button>
              </div>

              <p className='titulo_servico'>{servico.titulo}</p>
              <p>{servico.descricao}</p>
              <p>{servico.preco_minimo} R$</p>

              <Link
                to={`/servico/${servico.servico_id}`}
                className='Link_servico_meu'
              >
                <button className='bnt_ver_mais_servico'>Ver mais</button>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/cadastro_servico')}
          className='bnt_cadastra_servico'
        >
          Cadastrar serviço!
        </button>
      </div>

      {/* Modal de Confirmação */}
      {modalConfirmacaoAberto && (
        <div className="modal-editar-overlay">
          <div className="modal-editar-conteudo">
            <h3>Tem certeza que deseja excluir este serviço?</h3>
            <p><strong>{servicoSelecionado?.titulo}</strong></p>
            <div className="modal-editar-botoes">
              <button onClick={fecharModalConfirmacao}>Cancelar</button>
              <button
                style={{ backgroundColor: '#b22222' }}
                onClick={() => deleteServicos(servicoSelecionado.servico_id)}
              >
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page_meu_servico;
