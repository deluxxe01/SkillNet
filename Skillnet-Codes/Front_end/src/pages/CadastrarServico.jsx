import React, { useContext, useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import './CadastrarServico.css';
import { GlobalContext } from '../context/Globalcontext';
import api from "../Services/api";
function CadastrarServico() {
  const { cadastroServico, setCadastroServico ,userLogado, setUserLogado,} = useContext(GlobalContext);

  const [inptTituloServico, setInptTituloServico] = useState('');
  const [inptImageServico, setInptImageServico] = useState('');
  const [inptDescricaoServico, setInptDescricaoServico] = useState('');
  const [inptAreaServico, setInptAreaServico] = useState('');
  const [inptFaixapreco, setInptFaixapreco] = useState('');
  const [inptPrazoEntrega, setInptPrazoEntrega] = useState('');
  const [inptIdioma, setInptIdioma] = useState('');

  const tituloservicos = useRef();
  const descricaoservicos = useRef();
  const areaservicos = useRef();
  const imgservicos = useRef();
  const tempoEntrega = useRef();
  const faixaPreco = useRef();
  const idiomaAtende = useRef();





  async function createServicos() {
    await api.post('/servicos',{
      titulo:tituloservicos.current.value,
      area:areaservicos.current.value,
      descricao:descricaoservicos.current.value,
     imagem_capa:imgservicos.current.value,
     tempo_entrega:tempoEntrega.current.value,
    preco_minimo:faixaPreco.current.value,
    idioma:idiomaAtende.current.value,
    fk_usuario_id:userLogado.id



    });
    
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
                ref={tituloservicos}
              />
            </div>

            <div className='div_Inputs_servico_descricao'>
              <label>Descrição</label>
              <textarea
                className='text_descrição_servico'
                placeholder='Escreva detalhadamente sobre seu serviço'
                value={inptDescricaoServico}
                onChange={(e) => setInptDescricaoServico(e.target.value)}
                ref={descricaoservicos}
              ></textarea>
            </div>
          </div>

          <div className='containerInfoServicos'>
            <div className='divInputsServico'>
              <label>Tempo de entrega</label>
              <input
                type="text"
                className='inptServicos'
                placeholder='10-11 dias'
                value={inptPrazoEntrega}
                onChange={(e) => setInptPrazoEntrega(e.target.value)}
                ref={tempoEntrega}
              />
            </div>

            <div className='divInputsServico'>
              <label>Imagem (URL)</label>
              <input
                type="text"
                className='inptServicos'
                placeholder='https://exemplo.com/sua-imagem.jpg'
                value={inptImageServico}
                onChange={(e) => setInptImageServico(e.target.value)}
                ref={imgservicos}
              />
            </div>

            <div className='divInputsServico'>
              <label>Área do serviço</label>
              <select
                className='select_area_servico'
                value={inptAreaServico}
                onChange={(e) => setInptAreaServico(e.target.value)}
                ref={areaservicos}
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
                  ref={faixaPreco}
                />
              </div>

              <div className='divInputsServico'>
                <label>Idiomas que o serviço atende</label>
                <input
                  type="text"
                  className='inptServicos'
                  placeholder='espanhol, português, inglês'         
                  value={inptIdioma}
                  onChange={(e) => setInptIdioma(e.target.value)}
                  ref={idiomaAtende}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container_buttons'>
          <button className='botton_edita_servico'>Editar serviço</button>
          <button className='button_cria_servico' onClick={createServicos}>Criar serviço</button>
          <button className='butonn_cancela_servico'>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default CadastrarServico;
