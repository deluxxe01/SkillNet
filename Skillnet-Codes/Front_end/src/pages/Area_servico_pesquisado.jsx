import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import './Area_servico_pesquisado.css';
import { Link } from 'react-router-dom';
import PainelFiltros from '../components/PainelFiltros';
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext';

function Area_servico_pesquisado() {
  const [filtraServico, setFiltraServico] = useState('');
 
  const {userLogado,setUserLogado,cadastroServico,setCadastroServico}=useContext(GlobalContext)

  const servicos = [
    {
      titulo: 'Fotografia Profissional',
      poster: 'https://assets.querobolsa.com.br/assets/covers/courses/fotografia-e598e34a8f3d4ac1d8376da393c6f4f979ea763f8d482af06630713de014434f.webp',
      sinopse: 'Captura momentos inesquecíveis com qualidade e criatividade.',
      tipo_servico: ['Fotografia'],
    },
    {
      titulo: 'Consultoria de Negócios',
      poster: 'https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f',
      sinopse: 'Soluções estratégicas para impulsionar o crescimento da empresa.',
      tipo_servico: ['Consultoria'],
    },
    {
      titulo: 'Design de Interiores',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhagREYiuYvqOIEIfeFG58TMSMnMZyFTS-dQ&s',
      sinopse: 'Transforme espaços com elegância e funcionalidade.',
      tipo_servico: ['Design de Interiores', 'Arquitetura'],
    },
    {
      titulo: 'Desenvolvimento Web',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdnVsZv7of9Wwxn9ovPj1UX-yg5vaQCYcfA&',
      sinopse: 'Criação de sites modernos, responsivos e otimizados.',
      tipo_servico: ['Desenvolvimento', 'Tecnologia'],
    },
    {
      titulo: 'Personal Trainer',
      poster: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      sinopse: 'Acompanhamento personalizado para saúde e bem-estar.',
      tipo_servico: ['Fitness', 'Saúde'],
    },
    {
      titulo: 'Maquiagem Profissional',
      poster: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702',
      sinopse: 'Realce sua beleza com técnicas modernas.',
      tipo_servico: ['Beleza'],
    },
    {
      titulo: 'Aulas de Música',
      poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
      sinopse: 'Aprenda com professores experientes.',
      tipo_servico: ['Educação', 'Música'],
    },
    {
      titulo: 'Serviços de Jardinagem',
      poster: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
      sinopse: 'Cuidamos do seu jardim com carinho.',
      tipo_servico: ['Jardinagem'],
    },
    {
      titulo: 'Tradução de Documentos',
      poster: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514',
      sinopse: 'Traduções precisas para diversas línguas.',
      tipo_servico: ['Tradução', 'Idiomas'],
    },
    {
      titulo: 'Marketing Digital',
      poster: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd',
      sinopse: 'Campanhas para aumentar sua presença online.',
      tipo_servico: ['Marketing', 'Publicidade'],
    },
    {
      titulo: 'Serviços Jurídicos',
      poster: 'https://images.unsplash.com/photo-1676145643363-e195aa2213f7',
      sinopse: 'Assessoria jurídica especializada.',
      tipo_servico: ['Advocacia', 'Jurídico'],
    },
    {
      titulo: 'Consultas Médicas',
      poster: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f',
      sinopse: 'Atendimento médico de qualidade.',
      tipo_servico: ['Medicina', 'Saúde'],
    },
    {
      titulo: 'Engenharia Civil',
      poster: 'https://plus.unsplash.com/premium_photo-1663100465979-7d42b0f37bbc',
      sinopse: 'Projetos e execuções com excelência.',
      tipo_servico: ['Engenharia', 'Construção'],
    },
  ];



 


  const ServicosFiltrados = useMemo(() => {
    const servicoMinusculo = filtraServico.toLowerCase().trim();
    return servicos.filter((servico) =>
      servico.tipo_servico.some((tipo) =>
        tipo.toLowerCase().includes(servicoMinusculo)
      )
    );
  }, [filtraServico]);

  return (
    <div className='container_pagina'>
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

          <select className='select_opc_servico'>
            <option value='faixa' disabled selected>
              opções de serviço
            </option>
            <option value='valor1'>op 1</option>
            <option value='valor2'>op 2</option>
            <option value='valor3'>op 3</option>
            <option value='valor4'>op 4</option>
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
          {ServicosFiltrados.length > 0 ? (
            ServicosFiltrados.map((servico, index) => (
              <div className='card_servico' key={index}>
                <img
                  src={servico.poster}
                  alt={servico.titulo}
                  className='poster'
                />
               
               
               
                <div className='container_cat_servico' >
  {servico.tipo_servico.map((tipo, index) => (
    <span key={index} className="categoria_servico_especifico">{tipo}</span>
  ))}
</div>
                

                
                
                <h3 className='titulo_servico'>{servico.titulo}</h3>
                <p >{servico.sinopse}</p>
              </div>
            ))
          ) : (
            <span className='span_nFilmes'>Nenhum serviço encontrado!</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Area_servico_pesquisado;
