import { useState, useEffect } from "react";
import "../pages/PortfolioEditar.css";
import axios from 'axios';
import Hamburger from "../components/Hamburger";

function PortfolioEditar() {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioSelect, setPortfolioSelect] = useState(null);

  const [inputLinkInsta, setInputLinkInsta] = useState('');
  const [inputLinkLinkedin, setInputLinkLinkedin] = useState('');
  const [inputLinkGmail, setInputLinkGmail] = useState('');
  const [inputLocalidade, setInputLocalidade] = useState('');
  const [inputAnoExperiencia, setInputAnoExperiencia] = useState('');
  const [inputAreaAtuacao, setInputAreaAtuacao] = useState('');
  const [inputFotoUrl, setInputFotoUrl] = useState('');
  const [inputSobreMim, setInputSobreMim] = useState('');

  const [mostrarMenu, setMostrarMenu] = useState(false);
  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const [corSelecionada, setCorSelecionada] = useState('');
  const selecionarCor = (cor) => {
    setCorSelecionada(cor);
    setMostrarMenu(false); // opcional: fecha o menu após a escolha
  };

  const imagensMaterial = {
    rosa: 'public/icons/material 2.svg',
    azul: 'public/icons/material 3.svg',
    verde: 'public/icons/material 4.svg',
    default: 'public/icons/material 2.svg',
  };

  const imagensFundo = {
    rosa: 'public/images/fundoRosa2 (1).png',
    azul: 'public/images/fundoazul.png',
    verde: 'public/images/fundoverde.png',
    default: 'public/images/fundoRosa2 (1).png',
  };
  const fetchPortfolios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/portfolios');
      setPortfolios(response.data);
    } catch (error) {
      console.error('Erro ao buscar portfolios:', error);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const cadastrarPortfolio = async () => {
    try {
      const portfolio = {
        link_insta: inputLinkInsta,
        link_linkedin: inputLinkLinkedin,
        link_gmail: inputLinkGmail,
        localidade: inputLocalidade,
        ano_experiencia: inputAnoExperiencia,
        area_atuacao: inputAreaAtuacao,
        foto_url: inputFotoUrl,
        sobremim: inputSobreMim
      };

      const response = await axios.post('http://localhost:3000/portfolios', portfolio);
      if (response.status === 201) {
        fetchPortfolios();
        // limparForm();
      }
    } catch (error) {
      console.error('Erro ao adicionar portfolio', error);
    }
  };

  const salvarPortfolio = async () => {
    try {
      const portfolio = {
        link_insta: inputLinkInsta,
        link_linkedin: inputLinkLinkedin,
        link_gmail: inputLinkGmail,
        localidade: inputLocalidade,
        ano_experiencia: inputAnoExperiencia,
        area_atuacao: inputAreaAtuacao,
        foto_url: inputFotoUrl,
        sobremim: inputSobreMim
      };

      const response = await axios.put(`http://localhost:3000/portfolios/${portfolioSelect.id_portifolio}`, portfolio);
      if (response.status === 200) {
        fetchPortfolios();
        setPortfolioSelect(null);
        // limparForm();
      }
    } catch (error) {
      console.error('Erro ao atualizar portfolio', error);
    }
  };

  const buscarPortfolioId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/portfolios/${id}`);
      setPortfolioSelect(response.data);
      exibirPortfolio(response.data);
    } catch (error) {
      console.error('Erro ao buscar portfolio por ID:', error);
    }
  };

  const deletarPortfolio = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/portfolios/${id}`);
      if (response.status === 200 || response.status === 204) {
        setPortfolios((prevPortfolios) =>
        prevPortfolios.filter((portfolio) => portfolio.id_portifolio !== id)
        
        );
        limparForm()
      }
    } catch (error) {
      console.error('Erro ao deletar portfolio:', error);
    }
  };

  function limparForm() {
    setInputLinkInsta('');
    setInputLinkLinkedin('');
    setInputLinkGmail('');
    setInputLocalidade('');
    setInputAnoExperiencia('');
    setInputAreaAtuacao('');
    setInputFotoUrl('');
    setInputSobreMim('');
  }

  function exibirPortfolio(portfolio) {
    setInputLinkInsta(portfolio.link_insta || '');
    setInputLinkLinkedin(portfolio.link_linkedin || '');
    setInputLinkGmail(portfolio.link_gmail || '');
    setInputLocalidade(portfolio.localidade || '');
    setInputAnoExperiencia(portfolio.ano_experiencia || '');
    setInputAreaAtuacao(portfolio.area_atuacao || '');
    setInputFotoUrl(portfolio.foto_url || '');
    setInputSobreMim(portfolio.sobremim || '');
  }

  return (
    <div className="containerr">
      <img src={corSelecionada ? imagensFundo[corSelecionada] : imagensFundo.default} alt="" />


      <Hamburger />
    <div className="Container-PortfolioEditar">

      <h1 className="Title-EditarPortfolio">Criar Portfólio</h1>
      <div className={`linha1 ${corSelecionada ? `linha-${corSelecionada}` : ''}`}></div>

      <div className={`Formulario ${corSelecionada ? `formulario-${corSelecionada}` : ''}`}>



      {portfolios.map((portfolio) => (
    <div key={portfolio.id_portifolio} className='fotoUsuario'>
      {portfolio.foto_url && (
        <img
          src={portfolio.foto_url}
          alt="Foto do portfólio"
          style={{ 
            width: "15vh", 
            height: "15vh", 
            objectFit: "cover", 
            borderRadius: "10vh", 
            
          }}
        />
      )}
    </div>
  ))}


<div className="ContainerButtons">

      {portfolioSelect ? (
  <button 
    className={`buttonCadastrar ${corSelecionada ? `button-${corSelecionada}` : ''}`}
    onClick={salvarPortfolio}
  >
    Salvar Alterações
  </button>
) : (
  portfolios.length === 0 && (
    <button 
      className={`buttonCadastrar ${corSelecionada ? `button-${corSelecionada}` : ''}`}
      onClick={cadastrarPortfolio}
    >
      Cadastrar Portfólio
    </button>
  )
)}
{portfolios.map((portfolio) => (
    <div key={portfolio.id_portifolio} className='cliente'>
      <button
       className={`buttonEditar ${corSelecionada ? `button2-${corSelecionada}` : ''}`}
       onClick={() => buscarPortfolioId(portfolio.id_portifolio)}>
        Editar</button>

      <button 
       className={`buttonEditar ${corSelecionada ? `button2-${corSelecionada}` : ''}`}
       onClick={() => deletarPortfolio(portfolio.id_portifolio)}>
        Deletar</button>
    </div>
  ))}
</div>  
        <div className="Container-Inpts">
        <div className="inputContainer">
          <label>Nome de usuário: </label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text" 
           />
        </div>

        <div className="inputContainer">
          <label>Link instagram:</label>
          <input 
           className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
           type="text" 
           value={inputLinkInsta}
           onChange={e => setInputLinkInsta(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Link Linkedin:</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text"
          value={inputLinkLinkedin}
          onChange={e => setInputLinkLinkedin(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Link Email (Gmail):</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text" 
          value={inputLinkGmail} 
          onChange={e => setInputLinkGmail(e.target.value)} />
        </div>

        </div>

        <div className="Container-Inpts2">
        <div className="inputContainer">
          <label>Localidade:</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text"
          value={inputLocalidade} 
          onChange={e => setInputLocalidade(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Ano de Experiência:</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text" 
          value={inputAnoExperiencia} 
          onChange={e => setInputAnoExperiencia(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Área de Atuação:</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text"
          value={inputAreaAtuacao} 
          onChange={e => setInputAreaAtuacao(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Foto URL:</label>
          <input 
          className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
          type="text"
          value={inputFotoUrl}
          onChange={e => setInputFotoUrl(e.target.value)} />
        </div>

        </div>

        <img 
  className="material" 
  src={corSelecionada ? imagensMaterial[corSelecionada] : imagensMaterial.default} 
  alt="menu"
  onClick={toggleMenu}
  style={{ cursor: 'pointer' }}
/>

{mostrarMenu && (
  <div className="menu-popup">
    <ul>
     <li className="Lirosa" onClick={() => selecionarCor('rosa')}>Rosa</li>
      <li className="Liazul" onClick={() => selecionarCor('azul')}>Azul</li>
      <li className="Liverde" onClick={() => selecionarCor('verde')}>Verde</li>
    </ul>
  </div>
)}
      </div>

      {/* {portfolioSelect ? (
        <button onClick={salvarPortfolio}>Salvar Alterações</button>
      ) : (
        <button onClick={cadastrarPortfolio}>Cadastrar Portfólio</button>
      )} */}

<div className="ConatinerSobremim">
        
          <h2  className={`LabelSobremim ${corSelecionada ? `label-${corSelecionada}` : ''}`}>Sobre Mim</h2>
          <textarea 
          className={`TextArea-Formulario ${corSelecionada ? `textArea-${corSelecionada}` : ''}`}
          value={inputSobreMim}
           onChange={e => setInputSobreMim(e.target.value)} />

</div>
       {/* <section className='portfolios'>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id_portifolio} className='cliente'>
            <h2>{portfolio.link_insta || 'Instagram não informado'}</h2>
            <p>{portfolio.link_gmail}</p>
            <p>{portfolio.link_linkedin}</p>
            <p>{portfolio.localidade}</p>
            <p>{portfolio.ano_experiencia}</p>
            <p>{portfolio.area_atuacao}</p>
            <p>{portfolio.sobremim}</p>
            {portfolio.foto_url && (
        <img
          src={portfolio.foto_url}
          alt="Foto do portfólio"
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px", margin: "10px 0" }}
        />
      )}
             <button onClick={() => buscarPortfolioId(portfolio.id_portifolio)}>Editar</button>
            <button onClick={() => deletarPortfolio(portfolio.id_portifolio)}>Deletar</button>  

        </div>
        ))}
      </section>  */}

    </div>
    </div>
  );
}

export default PortfolioEditar;
