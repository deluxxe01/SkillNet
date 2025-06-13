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


    return(
    <div className="Container-PortfolioEditar">
        <h1>Dudaaaa</h1>
       <div className="lala">
        <input type="text" 
        placeholder="maria"
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
        required
        />



       </div>
    </div>
    )
}
export default PortfolioEditar