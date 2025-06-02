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

  function cadastraServico() {
    const novoServico = {
      titulo: inptTituloServico,
      img: inptImageServico,
      descricao: inptDescricaoServico,
      area: inptAreaServico
    };

    setCadastroServico([...cadastroServico, novoServico]);

    // limpa os inputs
    setInptTituloServico('');
    setInptImageServico('');
    setInptDescricaoServico('');
    setInptAreaServico('');
  }
const tituloservicos =useRef()
const descricaoservicos =useRef()
const areaservicos =useRef()
const imgservicos =useRef()

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
     imagem_capa:imgservicos.current.value
    });
    getServicos()
  }
  
  async function deleteServicos(id) {
    await api.delete(`/servicos/${id}`);
    getServicos(); // recarrega a lista após exclusão
  

  }
  async function UpdateServicos(id) {
    await api.patch(`/servicos/${id}`, {
      titulo: tituloservicos.current.value,
      area: areaservicos.current.value,
      descricao: descricaoservicos.current.value,
      imagem_capa: imgservicos.current.value
    });
    getServicos(); // Atualiza a lista
  }





  useEffect(() => {
    getServicos();
  }, []);

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

        <label>Área do Serviço</label>
        <input type="text" value={inptAreaServico} onChange={(e) => setInptAreaServico(e.target.value)} ref={areaservicos} />

        <button onClick={createServicos}>Cadastrar Serviço</button>
      </div>

      <div>
  <h2>Serviços cadastrados:</h2>
  {cadastroServico.map((servico) => (
  <div key={servico.servico_id}>
      <p><strong>Título:</strong> {servico.titulo}</p>
      <p><strong>Área:</strong> {servico.area}</p>
      <img src={servico.imagem_capa || "./images/img_cara_triste.jpg"} alt={servico.titulo} width="150" />
      <p><strong>Descrição:</strong> {servico.descricao}</p>
      <button onClick={() => deleteServicos(servico.servico_id)}>Apagar Serviço</button>
    <button onClick={() => UpdateServicos(servico.servico_id)}>edita servico</button>
    
    <button></button>
    </div>

  ))}
</div>
  
   
    </div>
  );
}

export default Cria_servico;
