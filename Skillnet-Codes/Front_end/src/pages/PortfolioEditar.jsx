import { useState, useEffect } from "react";
import "../pages/PortfolioEditar.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hamburger from "../components/Hamburger";

function PortfolioEditar() {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioSelect, setPortfolioSelect] = useState(null)
  const [inputNome, setInputNome] = useState('')
  const [inputLinkInsta, setInputLinkInsta] = useState('')
  const [inputLinkLinkedin, setInputLinkLinkedin] = useState('')
  const [inputLinkGmail, setInputLinkGmail] = useState('')
  const [inputLocalidade, setInputLocalidade] = useState('')
  const [inputAnoExperiencia, setInputAnoExperiencia] = useState('')
  const [inputAreaAtuacao, setInputAreaAtuacao] = useState('')
  const [inputFotoUrl, setInputFotoUrl] = useState('')
  const [inputSobreMim, setInputSobreMim] = useState('')

  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para controle do popup

  const [corSelecionada, setCorSelecionada] = useState('')

  const navigate = useNavigate()

  const irParaVisualizacao = () => {
    const dadosPortfolio = {
      nome: inputNome,
      link_insta: inputLinkInsta,
      link_linkedin: inputLinkLinkedin,
      link_gmail: inputLinkGmail,
      localidade: inputLocalidade,
      ano_experiencia: inputAnoExperiencia,
      area_atuacao: inputAreaAtuacao,
      foto_url: inputFotoUrl,
      sobremim: inputSobreMim,
      corSelecionada
    }

    console.log("Dados enviados para visualização:", dadosPortfolio); 
    navigate('/portfolio', { state: dadosPortfolio })
  }

  useEffect(() => {
    const savedCor = localStorage.getItem('corSelecionada');
    if (savedCor) {
      setCorSelecionada(savedCor)
    }
  }, []);

  useEffect(() => {
    if (corSelecionada) {
      localStorage.setItem('corSelecionada', corSelecionada)
    }
  }, [corSelecionada])

  const selecionarCor = (cor) => {
    setCorSelecionada(cor)
    setMostrarMenu(false); // opcional: fecha o menu após a escolha
  }

  const imagensMaterial = {
    rosa: 'public/icons/material 2.svg',
    azul: 'public/icons/material 3.svg',
    verde: 'public/icons/material 4.svg',
    default: 'public/icons/material 2.svg',
  }

  const imagensFundo = {
    rosa: 'public/images/fundoRosa2 (1).png',
    azul: 'public/images/fundoazul.png',
    verde: 'public/images/fundoverde.png',
    default: 'public/images/fundoRosa2 (1).png',
  }

  const fetchPortfolios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/portfolios')
      setPortfolios(response.data)
    } catch (error) {
      console.error('Erro ao buscar portfolios:', error)
    }
  };

  useEffect(() => {
    fetchPortfolios()
    const savedInputs = JSON.parse(localStorage.getItem('portfolioInputs'))
    if (savedInputs) {
      setInputNome(savedInputs.inputNome ||'')
      setInputLinkInsta(savedInputs.inputLinkInsta || '')
      setInputLinkLinkedin(savedInputs.inputLinkLinkedin || '')
      setInputLinkGmail(savedInputs.inputLinkGmail || '')
      setInputLocalidade(savedInputs.inputLocalidade || '')
      setInputAnoExperiencia(savedInputs.inputAnoExperiencia || '')
      setInputAreaAtuacao(savedInputs.inputAreaAtuacao || '')
      setInputFotoUrl(savedInputs.inputFotoUrl || '')
      setInputSobreMim(savedInputs.inputSobreMim || '')
    }
  }, [])

  useEffect(() => {
    const inputs = {
      inputNome,
      inputLinkInsta,
      inputLinkLinkedin,
      inputLinkGmail,
      inputLocalidade,
      inputAnoExperiencia,
      inputAreaAtuacao,
      inputFotoUrl,
      inputSobreMim
    }

    localStorage.setItem('portfolioInputs', JSON.stringify(inputs))
  }, [inputNome, inputLinkInsta, inputLinkLinkedin, inputLinkGmail, inputLocalidade, inputAnoExperiencia, inputAreaAtuacao, inputFotoUrl, inputSobreMim])

  const cadastrarPortfolio = async () => {
    try {
      const portfolio = {
        nome: inputNome,
        link_insta: inputLinkInsta,
        link_linkedin: inputLinkLinkedin,
        link_gmail: inputLinkGmail,
        localidade: inputLocalidade,
        ano_experiencia: inputAnoExperiencia,
        area_atuacao: inputAreaAtuacao,
        foto_url: inputFotoUrl,
        sobremim: inputSobreMim
      };

      const response = await axios.post('http://localhost:3000/portfolios', portfolio)
      if (response.status === 201) {
        fetchPortfolios()
        setMostrarPopup(true)
       // Fecha o popup automaticamente após 3 segundos (3000 milissegundos)
       setTimeout(() => {
        setMostrarPopup(false);
        irParaVisualizacao();  // Redireciona para a visualização do portfólio
      }, 3000);
    }
    } catch (error) {
      console.error('Erro ao adicionar portfolio', error)
    }
  };

  const salvarPortfolio = async () => {
    try {
      const portfolio = {
        nome: inputNome,
        link_insta: inputLinkInsta,
        link_linkedin: inputLinkLinkedin,
        link_gmail: inputLinkGmail,
        localidade: inputLocalidade,
        ano_experiencia: inputAnoExperiencia,
        area_atuacao: inputAreaAtuacao,
        foto_url: inputFotoUrl,
        sobremim: inputSobreMim
      };

      const response = await axios.put(`http://localhost:3000/portfolios/${portfolioSelect.id_portifolio}`, portfolio)
      if (response.status === 200) {
        fetchPortfolios();
        setPortfolioSelect(null)
        setMostrarPopup(true); // Abrir o popup de sucesso
      // Fecha o popup automaticamente após 3 segundos (3000 milissegundos)
      setTimeout(() => {
        setMostrarPopup(false);
        irParaVisualizacao();  // Redireciona para a visualização do portfólio
      }, 3000);
    }
    } catch (error) {
      console.error('Erro ao atualizar portfolio', error)
    }
  };

  const buscarPortfolioId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/portfolios/${id}`)
      setPortfolioSelect(response.data)
      exibirPortfolio(response.data)
    } catch (error) {
      console.error('Erro ao buscar portfolio por ID:', error)
    }
  };

  const deletarPortfolio = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/portfolios/${id}`)
      if (response.status === 200 || response.status === 204) {
        setPortfolios((prevPortfolios) =>
        prevPortfolios.filter((portfolio) => portfolio.id_portifolio !== id)
        );
        limparForm()
      }
    } catch (error) {
      console.error('Erro ao deletar portfolio:', error)
    }
  };

  function limparForm() {
    setInputNome('')
    setInputLinkInsta('')
    setInputLinkGmail('')
    setInputLinkLinkedin('')
    setInputLocalidade('')
    setInputAnoExperiencia('')
    setInputAreaAtuacao('')
    setInputFotoUrl('')
    setInputSobreMim('')
  }

  function exibirPortfolio(portfolio) {
    setInputLinkInsta(portfolio.link_insta || '')
    setInputLinkLinkedin(portfolio.link_linkedin || '')
    setInputLinkGmail(portfolio.link_gmail || '')
    setInputLocalidade(portfolio.localidade || '')
    setInputAnoExperiencia(portfolio.ano_experiencia || '')
    setInputAreaAtuacao(portfolio.area_atuacao || '')
    setInputFotoUrl(portfolio.foto_url || '')
    setInputSobreMim(portfolio.sobremim || '')
  }

  // Função para alternar a visibilidade do menu de cores
  const toggleMenu = () => {
    setMostrarMenu(prev => !prev);
  };

  // Função para fechar o popup
  const fecharPopup = () => {
    setMostrarPopup(false);
    irParaVisualizacao(); // Redirecionar para a visualização do portfólio
  };

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
                  Editar
                </button>

                <button 
                 className={`buttonEditar ${corSelecionada ? `button2-${corSelecionada}` : ''}`}
                 onClick={() => deletarPortfolio(portfolio.id_portifolio)}>
                  Deletar
                </button>
              </div>
            ))}
          </div>

          <div className="Container-Inpts">
            <div className="inputContainer">
              <label>Nome de usuário: </label>
              <input 
                className={`Inpt-Formulario ${corSelecionada ? `input-${corSelecionada}` : ''}`}
                type="text" 
                value={inputNome}
                onChange={e => setInputNome(e.target.value)} />
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

        <div className="ConatinerSobremim">
          <h2  className={`LabelSobremim ${corSelecionada ? `label-${corSelecionada}` : ''}`}>Sobre Mim</h2>
          <textarea 
            className={`TextArea-Formulario ${corSelecionada ? `textArea-${corSelecionada}` : ''}`}
            value={inputSobreMim}
            onChange={e => setInputSobreMim(e.target.value)} />
        </div>

        {/* Popup de Sucesso */}
        {mostrarPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Alterações Salvas com Sucesso!</h2>
              {/* <button onClick={fecharPopup}>Fechar</button> */}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PortfolioEditar;
