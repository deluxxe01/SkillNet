import React, { useState, useContext, useEffect } from "react";
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

let Servicos = []
async function getServicos(){

 const ServicosFromApi = await api.get('/servicos')
Servicos=ServicosFromApi.data
console.log(Servicos)

}
useEffect(() => {
  getServicos();
}, []);

return (
    <div>
      <div className='container_cadastra_servico'>
        <h1>Cadastrar Serviço</h1>

        <label>Título</label>
        <input type="text" value={inptTituloServico} onChange={(e) => setInptTituloServico(e.target.value)} />

        <label>Link da Imagem</label>
        <input type="text" value={inptImageServico} onChange={(e) => setInptImageServico(e.target.value)} />

        <label>Descrição</label>
        <input type="text" value={inptDescricaoServico} onChange={(e) => setInptDescricaoServico(e.target.value)} />

        <label>Área do Serviço</label>
        <input type="text" value={inptAreaServico} onChange={(e) => setInptAreaServico(e.target.value)} />

        <button onClick={cadastraServico}>Cadastrar Serviço</button>
      </div>

      <div>
        <h2>Serviços cadastrados:</h2>
        {cadastroServico.map((servico, index) => (
          <div key={index}>
            <p><strong>Título:</strong> {servico.titulo}</p>
            <p><strong>Área:</strong> {servico.area}</p>
            <img src={servico.img} alt={servico.titulo} width="150" />
            <p><strong>Descrição:</strong> {servico.descricao}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cria_servico;
