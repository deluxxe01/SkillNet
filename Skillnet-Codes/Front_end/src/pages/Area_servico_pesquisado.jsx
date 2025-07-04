import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import './Area_servico_pesquisado.css';
import { Link } from 'react-router-dom';
import PainelFiltros from '../components/PainelFiltros';
import { useContext,useEffect, } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import CadastrarServico from './CadastrarServico';
import api from '../Services/api';
import Footer from '../components/Footer';
import axios from 'axios';
import { motion } from 'framer-motion';
function Area_servico_pesquisado() {
  const [filtraServico, setFiltraServico] = useState('');
 
  const {userLogado,setUserLogado,cadastroServico,setCadastroServico}=useContext(GlobalContext)
  const [valorSelect,setValorSelect]=useState()

  
  async function getServicos() {
    const response = await api.get('/servicos');
    setCadastroServico(response.data); // agora atualiza o contexto global
    console.log(response)
  }

  async function getServicoEspecifico(){

    const resultado = await axios.get(`/api/servicoEspecifico/${valorSelect}`)

    console.log("serviço especifico",resultado.data.resultado)

    setCadastroServico(resultado.data.resultado)


  }


  useEffect(() => {
    getServicos();
  }, []); // roda apenas uma vez ao montar

  useEffect(() => {
  if (valorSelect) {
    getServicoEspecifico();
  }
}, [valorSelect]);

  return (
    <div className='container_pagina_servico_pesquisado'>
      <div className='container_img_bg '>
        <Header />

        <div className='container_barra_pesquisa'>
          <h1 className='h1_servicos'>Serviços</h1>
          <div className='barra_verde'></div>
          <div className='container_inpt_pesquisa'>
            <input
              type='text'
              className='inpt_barra_pesquisa'
              placeholder='Procure a sua área'
              value={filtraServico}
              onChange={(e) => setFiltraServico(e.target.value)}
              />
          </div>
        </div>

              </div>
        <div className='painel_filtros'>
          <PainelFiltros />
        </div>

        <div className='filtrosSelect'>
          <select className='select_orcamentoServico'>
            <option value='faixa' disabled selected>
              Orçamento
            </option>
            <option value='valor1'>op 1</option>
            <option value='valor2'>op 2</option>
            <option value='valor3'>op 3</option>
            <option value='valor4'>op 4</option>
          </select>

          <select className='select_opc_servico'  onChange={(e)=>{
            setValorSelect(e.target.value)
          }}>
            <option value='faixa' disabled selected>
              opções de serviço
            </option>
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

          <select className='select_prazo_entrega'>
            <option value='faixa' disabled selected>
              prazo de entrega
            </option>
            <option value='valor1'>op 1</option>
            <option value='valor2'>op 2</option>
            <option value='valor3'>op 3</option>
            <option value='valor4'>op 4</option>
          </select>
        </div>

       <div className='lista_serviço'>
 {cadastroServico
  .filter((servico) =>
    servico.area.toLowerCase().includes(filtraServico.toLowerCase())
  )
  .map((servico, index) => (
    <Link
      key={servico.servico_id}
      to={`/servico/${servico.servico_id}`}
      className='Link_servico'
    >
      <motion.div
        className='card_servico'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <img src={servico.imagem_capa || null} className='poster' />
        <p className='categoria_servico_especifico'>{servico.area}</p>
        <p className='titulo_servico'>{servico.titulo}</p>
        <p>{servico.descricao}</p>
        <p>{servico.preco_minimo} R$</p>
      </motion.div>
    </Link>
))}
</div>
     
      <div className='container_footer_servico'>

     <Footer/>
      </div>
    
     
  
    </div>
    
  );
}

export default Area_servico_pesquisado;
