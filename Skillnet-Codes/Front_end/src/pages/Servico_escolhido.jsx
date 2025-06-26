import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Globalcontext";
import api from "../Services/api";
import './Servico_escolhido.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaixaTexto from "../components/CaixaTexto"


function Servico_escolhido() {

  const [openModal,setOpenModal] = useState(false)
 
    const { servico_id } = useParams();
     const {cadastroServico,setCadastroServico,userLogado,setUserLogado} = useContext(GlobalContext); // nome certo aqui
    
    const servico = cadastroServico.find(s => String(s.servico_id) === String(servico_id));
    if (!servico) return <p>Serviço não encontrado ou carregando...</p>;
    
 
 
    return (
   <div >
<div className="container_header_servico_escolhido"> 
<Header/>
</div>

<main>
    <h2 className="servico_titulo">{servico.titulo}</h2>
    <div className="freelancer">Feito por {servico.nome_usuario} @ </div>

    <div className="service-content">
      <div className="service-image">
        <img src={servico.imagem_capa || null} alt="" />
      </div>

      <div class="service-details">
        <div className="description">
         <h1 className="h1_descrição_servico">descrição</h1>
         {servico.descricao}
        </div>

        <div className="price">R$ {servico.preco_minimo}</div>

        <div className="tags">
          <span className="tag_servico_especifico">{servico.area}</span>
          
        </div>

        <button className="cta-button" onClick={()=>{
          setOpenModal(!openModal)
        }}>Entrar em Contato</button>
        { openModal &&<CaixaTexto />}
      </div>
    </div>

    <section>
      <h3 className="section-title">Sobre o Freelancer</h3>
      <div className="freelancer-about">
        <p>Sou designer especializada em UX/UI com 5 anos de experiência. Já criei interfaces para startups, e-commerce e produtos educacionais. Prezo por entregas rápidas, acessíveis e alinhadas com o objetivo do cliente.</p>
      </div>
    </section>

    <section>
      <h3 className="section-title">Avaliações</h3>
      <div className="reviews">
        <div className="review">
          <div className="stars">★★★★★</div>
          <strong>Ana Pereira:</strong> "Trabalho impecável! Minha landing ficou linda e rápida."
        </div>
        <div className="review">
          <div className="stars">★★★★☆</div>
          <strong>Carlos Mendes:</strong> "Ótimo atendimento e entrega antes do prazo."
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-title">Perguntas Frequentes</h3>
      <div className="faq">
        <div className="faq-item">
          <h4>Quanto tempo leva para entregar?</h4>
          <p>{servico.tempo_entrega} úteis, dependendo da complexidade do serviço.</p>
        </div>
        <div className="faq-item">
          <h4>Você entrega o código-fonte?</h4>
          <p>Sim, todo o material é entregue organizado e pronto para publicação.</p>
        </div>
      </div>
    </section>
  </main>
<Footer/>


    </div>
  )
}

export default Servico_escolhido

























// export default function TrabalhoEscolhido() {
//  const { servico_id } = useParams();
//   const { cadastroServico } = useContext(GlobalContext); // nome certo aqui

//   const servico = cadastroServico.find(s => String(s.servico_id) === String(servico_id));

//   if (!servico) return <p>Serviço não encontrado ou carregando...</p>;

//   return (
//     <div>
//       <h1>{servico.titulo}</h1>
//       <p>{servico.descricao}</p>
//    
//        <p>{servico.area}</p>    
//     </div>
//   );
// }