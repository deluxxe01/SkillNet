import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import api from "../Services/api";


function Servico_escolhido() {
 
    const { servico_id } = useParams();
     const { cadastroServico } = useContext(GlobalContext); // nome certo aqui
    
    const servico = cadastroServico.find(s => String(s.servico_id) === String(servico_id));
    if (!servico) return <p>Serviço não encontrado ou carregando...</p>;
    
 
 
    return (
   
   
   
   <div>

<h1>{servico.titulo}</h1>
<p>{servico.descricao}</p>

<p>{servico.area}</p> 

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