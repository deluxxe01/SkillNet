import React, { useState, useContext, useEffect ,useRef} from "react";
import { GlobalContext } from '../context/Globalcontext';
import api from "../Services/api";
function Cria_servico() {
  const {
    userLogado,
    setUserLogado,
    cadastroServico,
    setCadastroServico
  } = useContext(GlobalContext);

  const [inptTituloServico, setInptTituloServico] = useState('');
  const [inptImageServico, setInptImageServico] = useState('');
  const [inptDescricaoServico, setInptDescricaoServico] = useState('');
  const [inptAreaServico, setInptAreaServico] = useState('');
  const [inptPrecoMinimo, setInptPrecoMinimo] = useState('');
  const [inptPrazoEntrega, setInptPrazoEntrega] = useState('');
  const [inptIdioma, setInptIdioma] = useState('');
  
const tituloservicos =useRef()
const descricaoservicos =useRef()
const areaservicos =useRef()
const imgservicos =useRef()
const tempoEntrega = useRef()
const precoMinimo = useRef()
const idiomaAtende = useRef()

  async function getServicos() {
    const response = await api.get('/servicos');
    setCadastroServico(response.data); // agora atualiza o contexto global
    console.log(response)
  }

  async function createServicos() {
    await api.post('/servicos',{
      titulo:tituloservicos.current.value,
      area:areaservicos.current.value,
      descricao:descricaoservicos.current.value,
     imagem_capa:imgservicos.current.value,
     tempo_entrega:tempoEntrega.current.value,
    preco_minimo:precoMinimo.current.value,
    idioma:idiomaAtende.current.value,
    


    });
    getServicos()
  }
  
  async function deleteServicos(id) {
    await api.delete(`/servicos/${id}`);
    getServicos(); // recarrega a lista após exclusão
  

  }
  async function UpdateServicos(id) {
    await api.patch(`/servicos/${id}`, {
      titulo:tituloservicos.current.value,
      area:areaservicos.current.value,
      descricao:descricaoservicos.current.value,
     imagem_capa:imgservicos.current.value,
     tempo_entrega:tempoEntrega.current.value,
    preco_minimo:precoMinimo.current.value,
    idioma:idiomaAtende.current.value,
   
   
    });
    getServicos(); // Atualiza a lista
  }







return (
    <div>
      <div className='container_cadastra_servico'>
        <h1>Cadastrar Serviço</h1>

        <label>Título</label>
        <input type="text" value={inptTituloServico} onChange={(e) => setInptTituloServico(e.target.value)} ref={tituloservicos} />

        <label>Link da Imagem</label>
        <input type="text" value={inptImageServico} onChange={(e) => setInptImageServico(e.target.value)} ref={imgservicos}/>

        <label>Descrição</label>
        <input type="text" value={inptDescricaoServico} onChange={(e) => setInptDescricaoServico(e.target.value)} ref={descricaoservicos} />

        <label>area</label>
        <input type="text" value={inptAreaServico} onChange={(e) => setInptAreaServico(e.target.value)} ref={areaservicos} />

       
        
      <label>Preço Mínimo (R$):</label>
      <input
        type="number"
        step="0.01"
        min="0"
        value={inptPrecoMinimo}
        onChange={(e) => setInptPrecoMinimo(e.target.value)}
        ref={precoMinimo}
      />

      <label>Prazo de Entrega:</label>
      <input
        type="text"
        value={inptPrazoEntrega}
        onChange={(e) => setInptPrazoEntrega(e.target.value)}
      ref={tempoEntrega}
      />

      <label>Idioma:</label>
      <input
        type="text"
        value={inptIdioma}
        onChange={(e) => setInptIdioma(e.target.value)}
        ref={idiomaAtende}
      />
        
       
       
        <button onClick={createServicos}>Cadastrar Serviço</button>
      </div>

      <div>
  <h2>Serviços cadastrados:</h2>
  {cadastroServico.map((servico) => (
  <div key={servico.servico_id}>
      <p><strong>Título:</strong> {servico.titulo}</p>
      <p><strong>Área:</strong> {servico.area}</p>
      <img src={servico.imagem_capa} alt={servico.titulo} width="150" />
      <p><strong>Descrição:</strong> {servico.descricao}</p>
      <p>idioma em que atende:{servico.idioma}</p>
      <p>tempo de entrega:{servico.tempo_entrega}</p>
      <p>preço minimo:{servico.preco_minimo}</p>

      <button onClick={() => deleteServicos(servico.servico_id)}>Apagar Serviço</button>
    <button onClick={() => UpdateServicos(servico.servico_id)}>edita servico</button>
    
    
    </div>

  ))}
</div>
  
   
    </div>
  );
}

export default Cria_servico;
