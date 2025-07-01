import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Globalcontext";
import './Servico_escolhido.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaixaTexto from "../components/CaixaTexto";
import PostComent from '../components/PostComent';
import axios from "axios";
import api from '../Services/api'; 

function Servico_escolhido() {
  const [openModal, setOpenModal] = useState(false);
  const [modalComent, setModalComent] = useState(false);
  const [arrayComentarios, setArrayComentarios] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [area, setArea] = useState('');
  const [idioma, setIdioma] = useState('');
  const [imagem, setImagem] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [sobreFreelancer, setSobreFreelancer] = useState('');

  const { servico_id } = useParams();
  const { cadastroServico, setCadastroServico, userLogado } = useContext(GlobalContext);

  const servico = cadastroServico.find(s => String(s.servico_id) === String(servico_id));
  if (!servico) return <p>Serviço não encontrado ou carregando...</p>;

  useEffect(() => {
    setTitulo(servico.titulo);
    setDescricao(servico.descricao);
    setPreco(servico.preco_minimo);
    setArea(servico.area);
    setIdioma(servico.idioma);
    setImagem(servico.imagem_capa);
    setDataInicio(servico.data_inicio_entrega);
    setDataFim(servico.data_fim_entrega);
    setSobreFreelancer(servico.sobre_freelancer);
  }, [servico]);

  function showModalComment() {
    setModalComent(!modalComent);
  }

  async function getComent() {
    const comentarios = await axios.get(`/api/getComentsServicos/${servico.servico_id}`);
    setArrayComentarios(comentarios.data.Comentarios);
  }

  useEffect(() => {
    if (servico?.servico_id) getComent();
  }, [servico?.servico_id]);

  const ServicoDoUsuario = servico && userLogado
    ? Number(servico.fk_usuario_id) === Number(userLogado.id_usuario)
    : false;


async function UpdateServicos(id) {
  await api.patch(`/servicos/${id}`, {
    titulo,
    descricao,
    preco_minimo: preco,
    area,
    idioma,
    imagem_capa: imagem,
    data_inicio_entrega: dataInicio,
    data_fim_entrega: dataFim,
    sobre_freelancer: sobreFreelancer
  });

  const response = await api.get('/servicos');
  setCadastroServico(response.data); // atualiza contexto com os dados mais recentes
}

    
 
 
    return (
   <div>
      <div className="container_header_servico_escolhido">
        <Header />
      </div>

      <main>
        {modoEdicao ? (
          <input
            className="input-editar"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        ) : (
          <h2 className="servico_titulo">{servico.titulo}</h2>
        )}

        <div className="freelancer">Feito por {servico.nome_usuario} @</div>

        {ServicoDoUsuario && (
          <div className="container_bnt_meu_servico">
            {!modoEdicao ? (
              <button onClick={() => setModoEdicao(true)} className="bnt_editar_servico">
                editar seu serviço
              </button>
            ) : (
              <>
                <button
                  className="cta-button"
                  onClick={() => {
  UpdateServicos(servico.servico_id);
  setModoEdicao(false);
}}
                >
                  Salvar
                </button>
                <button
                  className="cta-button"
                  style={{ marginLeft: '10px', background: '#999' }}
                  onClick={() => {
                    setTitulo(servico.titulo);
                    setDescricao(servico.descricao);
                    setPreco(servico.preco_minimo);
                    setArea(servico.area);
                    setIdioma(servico.idioma);
                    setImagem(servico.imagem_capa);
                    setDataInicio(servico.data_inicio_entrega);
                    setDataFim(servico.data_fim_entrega);
                    setSobreFreelancer(servico.sobre_freelancer);
                    setModoEdicao(false);
                  }}
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        )}

        <div className="service-content">
          <div className="service-image">
            {modoEdicao ? (
              <input
                className="input-editar"
                type="text"
                placeholder="URL da imagem"
                value={imagem || ''}
                onChange={(e) => setImagem(e.target.value)}
              />
            ) : (
              <img src={servico.imagem_capa || ''} alt="" />
            )}
          </div>

          <div className="service-details">
            <div className="description">
              <h1 className="h1_descrição_servico">descrição</h1>
              {modoEdicao ? (
                <textarea
                  className="input-editar_textea"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  rows={6}
                />
              ) : (
                <p>{servico.descricao}</p>
              )}
            </div>

            <div className="price">
              <h4>Preço:</h4>
              {modoEdicao ? (
                <input
                  className="input-editar"
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
              ) : (
                <>R$ {servico.preco_minimo}</>
              )}
            </div>

            <div className="tags">
              <h4>Área:</h4>
              {modoEdicao ? (
                <select
                  className="select_area_servico_escolhido"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
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
              ) : (
                <span className="tag_servico_especifico">{servico.area}</span>
              )}
            </div>

            <button className="cta-button" onClick={() => setOpenModal(!openModal)}>
              Entrar em Contato
            </button>

            {openModal && (
              <CaixaTexto autor={servico.nome_usuario} id_frela={servico.fk_usuario_id} />
            )}
          </div>
        </div>

        <section>
          <h3 className="section-title">Sobre o Freelancer</h3>
          <div className="freelancer-about">
            {modoEdicao ? (
              <textarea
                className="input-editar_textea"
                rows={4}
                value={sobreFreelancer}
                onChange={(e) => setSobreFreelancer(e.target.value)}
              />
            ) : (
              <p>{servico.sobre_freelancer}</p>
            )}
          </div>
        </section>

        <section>
          <h3 className="section-title">Perguntas Frequentes</h3>
          <div className="faq">
            <div className="faq-item">
              <h4>Quanto tempo leva para entregar?</h4>
              {modoEdicao ? (
                <>
                  <label>Início:</label>
                  <input
                    className="select_area_servico_escolhido"
                    type="number"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                  />
                  <label>Fim:</label>
                  <input
                    className="select_area_servico_escolhido"
                    type="number"
                    value={dataFim}
                    onChange={(e) => setDataFim(e.target.value)}
                  />
                </>
              ) : (
                <p><span className="span_data">{servico.data_inicio_entrega}</span> a <span className="span_data">{servico.data_fim_entrega}</span> dias úteis</p>
              )}
            </div>

            <div className="faq-item">
              <h4>Qual idioma o serviço atende?</h4>
              {modoEdicao ? (
                <input
                  className="select_area_servico_escolhido"
                  type="text"
                  value={idioma}
                  onChange={(e) => setIdioma(e.target.value)}
                />
              ) : (
                <p>O serviço atende em: <span className="span_data">{servico.idioma}</span></p>
              )}
            </div>
          </div>
        </section>

        <button className="cta-button" onClick={showModalComment}>Avaliar</button>
        {modalComent && (
          <PostComent showModal={showModalComment} fk_id_servico={servico.servico_id} />
        )}
    <section>
      <h3 className="section-title">Avaliações</h3>
      <div className="reviews">
      {arrayComentarios.length > 0 ? (arrayComentarios.map((comentario) =>(
         <div key={comentario.id_comentario} className="review">
          <div className="stars">★★★★★</div>
          <strong>{comentario.nome}</strong> {comentario.comentario}
        </div>

       ))):(
        <p>Não possui comentarios</p>
       )}
      </div>
    </section>

  </main>
<Footer/>


    </div>
  )
}

export default Servico_escolhido


