import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import './CadastrarServico.css';
import { GlobalContext } from '../context/Globalcontext';
import api from "../Services/api";
import { useNavigate } from 'react-router-dom';

function CadastrarServico() {
  const { userLogado } = useContext(GlobalContext);

  const [inptTituloServico, setInptTituloServico] = useState('');
  const [inptImageServico, setInptImageServico] = useState('');
  const [inptDescricaoServico, setInptDescricaoServico] = useState('');
  const [inptAreaServico, setInptAreaServico] = useState('');
  const [inptFaixapreco, setInptFaixapreco] = useState('');
  const [inptIdioma, setInptIdioma] = useState('');
  const [inptDataInicio, setInptDataInicio] = useState('');
  const [inptDataFim, setInptDataFim] = useState('');
  const [inptSobreFreelancer, setInptSobreFreelancer] = useState('');
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const navigate = useNavigate();

  async function createServicos() {
    try {
      await api.post('/servicos', {
        titulo: inptTituloServico,
        area: inptAreaServico,
        descricao: inptDescricaoServico,
        imagem_capa: inptImageServico,
        preco_minimo: inptFaixapreco,
        idioma: inptIdioma,
        data_inicio_entrega: inptDataInicio,
        data_fim_entrega: inptDataFim,
        sobre_freelancer: inptSobreFreelancer,
        fk_usuario_id: userLogado.id_usuario
      });

      // Limpar inputs
      setInptTituloServico('');
      setInptDescricaoServico('');
      setInptAreaServico('');
      setInptFaixapreco('');
      setInptIdioma('');
      setInptImageServico('');
      setInptDataInicio('');
      setInptDataFim('');
      setInptSobreFreelancer('');

      setMostrarConfirmacao(true);

      setTimeout(() => {
        navigate('/area_servico_pesquisado');
      }, 2000);
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
    }
  }

  return (
    <div>
      <Header />
      <div className='container_h1_titulo_servico'>
        <h1 className='h1_titulo_servico'>Cadastro de serviços</h1>
        <div className='div_linha_verde_cadastra_servico'></div>
      </div>

      <div className='containerServicos'>
        <div className='container_all_inputs'>
          <div className='containerTituloServico'>
            <div className='div_Inputs_servico_titulo'>
              <label>Título</label>
              <input
                type="text"
                className='inpt_titulo_servico'
                placeholder='Título do seu serviço'
                value={inptTituloServico}
                onChange={(e) => setInptTituloServico(e.target.value)}
              />
            </div>

            <div className='div_Inputs_servico_descricao'>
              <label>Descrição</label>
              <textarea
                className='text_descrição_servico'
                placeholder='Escreva detalhadamente sobre seu serviço'
                value={inptDescricaoServico}
                onChange={(e) => setInptDescricaoServico(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className='containerInfoServicos'>
            
             <div className='div_inputs_tempo_entrega'>
               
               <div className='divInputsServico'>
              <label>Data de início</label>

              <input
                type="number"
                className='inptServicosPreco'
                value={inptDataInicio}
                onChange={(e) => setInptDataInicio(e.target.value)}
                placeholder='data incial do serviço'
                />
                </div>
           
            <div className='divInputsServico'>

              <label>Data de entrega</label>
              <input
                type="number"
                className='inptServicosPreco'
                value={inptDataFim}
                onChange={(e) => setInptDataFim(e.target.value)}
                placeholder='data final para entrega do serviço'
                />
                </div>
         
            </div>
            
            
            <div className='divInputsServico'>
              <label>Imagem (URL)</label>
              <input
                type="text"
                className='inptServicos'
                placeholder='https://exemplo.com/sua-imagem.jpg'
                value={inptImageServico}
                onChange={(e) => setInptImageServico(e.target.value)}
              />
            </div>

            <div className='divInputsServico'>
              <label>Área do serviço</label>
              <select
                className='select_area_servico'
                value={inptAreaServico}
                onChange={(e) => setInptAreaServico(e.target.value)}
              >
                <option value="" disabled>Escolha uma das opções</option>
                <option value="matador de rato">Matador de rato</option>
                <option value="desenvolvimento de software">Desenvolvimento de software</option>
                <option value="back end developer">Back End Developer</option>
                <option value="scrum master">Scrum Master</option>
                <option value="design gráfico">Design Gráfico</option>
                <option value="marketing digital">Marketing Digital</option>
                <option value="tradução">Tradução</option>
                <option value="edição de vídeo">Edição de Vídeo</option>
                <option value="fotografia">Fotografia</option>
                <option value="redação">Redação</option>
                <option value="suporte técnico">Suporte Técnico</option>
                <option value="consultoria financeira">Consultoria Financeira</option>
                <option value="gestão de projetos">Gestão de Projetos</option>
                <option value="UX/UI design">UX/UI Design</option>
                <option value="análise de dados">Análise de Dados</option>
                <option value="engenharia civil">Engenharia Civil</option>
                <option value="arquitetura">Arquitetura</option>
                <option value="manutenção elétrica">Manutenção Elétrica</option>
                <option value="desenvolvimento mobile">Desenvolvimento Mobile</option>
                <option value="gestão de tráfego pago">Gestão de Tráfego Pago</option>
                <option value="advocacia">Advocacia</option>
                <option value="coaching de carreira">Coaching de Carreira</option>
                <option value="ilustração">Ilustração</option>
                <option value="criação de conteúdo">Criação de Conteúdo</option>
              </select>
            </div>
          </div>

          <div className='containerInfoServico2'>
            <div className='container_preco_idiomas'>
              <div className='divInputsServico'>
                <label>Faixa de preço</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className='inptServicos'
                  placeholder='R$200 - R$1000'
                  value={inptFaixapreco}
                  onChange={(e) => setInptFaixapreco(e.target.value)}
                />
              </div>

              <div className='divInputsServico'>
                <label>Idiomas que o serviço atende</label>
                <input
                  type="text"
                  className='inptServicosIdioma'
                  placeholder='espanhol, português, inglês'         
                  value={inptIdioma}
                  onChange={(e) => setInptIdioma(e.target.value)}
                />
              </div>
            </div>

           

            

            <div className='div_Inputs_servico_descricao'>
              <label>Sobre o freelancer</label>
              <textarea
                className='text_sobre_freelancer'
                placeholder='Fale um pouco sobre você'
                value={inptSobreFreelancer}
                onChange={(e) => setInptSobreFreelancer(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className='container_buttons'>
         
          <button className='button_cria_servico' onClick={createServicos}>Criar serviço</button>
          <button className='butonn_cancela_servico'>Cancelar</button>
        </div>
      </div>

      {mostrarConfirmacao && (
        <div className="confirmacao-overlay">
          <div className="confirmacao-content">
            <h2>Serviço criado com sucesso!</h2>
            <button onClick={() => setMostrarConfirmacao(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CadastrarServico;
