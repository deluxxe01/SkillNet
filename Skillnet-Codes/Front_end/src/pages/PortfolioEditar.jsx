import { useState, useEffect } from "react"
import "../pages/PortfolioEditar.css"
import axios from 'axios';

function PortfolioEditar(){
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioSelect, setPortfolioSelect] = useState(null);

  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputLinkedin, setInputLinkedin] = useState('')
  const [inputEndereco, setInputEndereco] = useState('')
  const [inputCategoria, setInputCategoria] = useState('')
  const [inputExperiencia, setInputExperiencia] = useState('')

  const fetchPortfolios = async () => {
    try{
        const response = await axios.get('http://localhost:3000/portfolios');
        setPortfolios(response.data);
          } catch (error) {
            console.error('Erro ao buscar portfolios:', error);
        }
    };
   

    useEffect(() =>{
        fetchPortfolios();
    }, []);

    useEffect(() =>{
        console.log(portfolios);
    }, [portfolios]);

    const cadastrarPortfolio = async () => {
        try {
            const portfolio = {
                nome: inputNome,
                email: inputEmail,
                linkedin: inputLinkedin,
                endereco: inputEndereco,
                categoria: inputCategoria,
                experiencia: inputExperiencia
            };
            const response = await axios.post('http://localhost:3000/portfolios', portfolio);
            if (response.status === 201) {
                fetchPortfolios();
                limparForm();
            }
        }catch (error) {
            console.error('Erro ao adicionar portfolio', error);
        }
    };

    const salvarPortfolio = async () => {
        try {
            const portfolio = {
                nome: inputNome,
                email: inputEmail,
                linkedin: inputLinkedin,
                endereco: inputEndereco,
                categoria: inputCategoria,
                experiencia: inputExperiencia
            }
            const response= await axios.put(`http://localhost:3000/portfolios/${portfolioSelect.id}`, portfolio);
            if (response.status === 200) {
                fetchPortfolios() ;
                setPortfolioSelect(null);
                limparForm();
            }
        } catch (error) {
            console.error('erro ao atualizar portfolio', error);
        }
    }

    const buscarPortfolioId = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/portfolios/${id}`);
            setPortfolioSelect(response.data);
            exibirPortfolio(response.data)
        } catch (error) {
            console.error('Erro ao buscar portfolio por ID:', error);
        }
        
    }

     const deletarPortfolio = async (id) => {
        try {
            const response = await axios.delete (`http://localhost:3000/portfolios/${id}`)
            if (response.status === 200) {
                fetchPortfolios()
            }
        }catch (error) {
            console.error('Erro ao deletar portfolio:', error)
        }
     }

     function limparForm(){
        setInputNome('')
        setInputEmail('')
        setInputLinkedin('')
        setInputEndereco('')
        setInputCategoria('')
        setInputExperiencia('')
     }

     function exibirPortfolio(portfolio){
         setInputNome(portfolio.nome || '')
         setInputEmail(portfolio.email || '')
         setInputLinkedin(portfolio.linkedin || '')
         setInputEndereco(portfolio.endereco || '')
         setInputCategoria(portfolio.categoria || '')
         setInputExperiencia(portfolio.experiencia || '')
     }


    return(
    <div className="Container-PortfolioEditar">
        <h1>Dudaaaa</h1>

<div className="lala">

<div className="inputContainer">
        <label>Nome Completo </label>
        <input type="text" 
        placeholder="Usuario "
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
        required
        />
</div>

<div className="inputContainer">
    <label>Link Email </label>
         <input type="text" 
        placeholder="https;ksjdksd"
        value={inputEmail}
        onChange={(event) => setInputEmail(event.target.value)}
        required
        />
</div>

<div className="inputContainer">
    <label>Link Linkedin </label>
       <input type="text" 
        placeholder="https;ksjdksd"
        value={inputLinkedin}
        onChange={(event) => setInputLinkedin(event.target.value)}
        required
        />
</div>

<div className="inputContainer"> 
    <label>Localidade </label>    
       <input type="text" 
        placeholder="Brasil SP"
        value={inputEndereco}
        onChange={(event) => setInputEndereco(event.target.value)}
        required
        />
</div>

<div className="inputContainer"> 
    <label>Área de Trabalho </label>    
       <input type="text" 
        placeholder="Desenvolvedor Web"
        value={inputCategoria}
        onChange={(event) => setInputCategoria(event.target.value)}
        required
        />
</div>

<div className="inputContainer"> 
    <label>Tempo de Experiencia</label>    
       <input type="text" 
        placeholder="2 anos"
        value={inputExperiencia}
        onChange={(event) => setInputExperiencia(event.target.value)}
        required
        />
</div>

 </div>

{portfolioSelect && <button type="button" onClick={salvarPortfolio}>Salvar Alterações</button>}
{!portfolioSelect && <button type="button" onClick={cadastrarPortfolio}>Cadastrar Cliente</button>}


    <section className='portfolios'>
                {portfolios.map((portfolio) => (
                    <div key={portfolio.id} className='cliente'>
                        <h2>{portfolio.nome}</h2>
                        <p>{portfolio.email}</p>
                        <p>{portfolio.telefone}</p>
                        <p>{portfolio.endereco}</p>
                        <p>{portfolio.id}</p>
                        <button onClick={() => buscarPortfolioId(portfolio.id)}>Editar</button>
                        <button onClick={() => deletarPortfolio(portfolio.id)}>Deletar</button>
                    </div>
                ))}
            </section>
</div>

    )
}
export default PortfolioEditar