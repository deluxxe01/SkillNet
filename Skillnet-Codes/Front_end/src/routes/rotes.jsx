import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Area_servico_pesquisado from "../pages/Area_servico_pesquisado.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Portfolios from "../pages/Portfolios.jsx";

import TrabalhoEscolhido from "../pages/TrabalhoEscolhido.jsx";
import PortfolioEditar from "../pages/PortfolioEditar.jsx";
// import PaginaUser from "../pages/PaginaUser.jsx";
import PageSobreNos from "../pages/PageSobreNos.jsx";
import PaginaUsuario from "../pages/PaginaUsuario.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx"
import Cria_servico from "../pages/Cria_servico.jsx";
import CadastrarServico from "../pages/CadastrarServico.jsx";
import Servico_escolhido from "../pages/Servico_escolhido.jsx";

const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/login',element:<Login />},
    {path:'/cadastro',element:<Cadastro />},
    {path:'/criaServico',element:< Cria_servico />},
    {path:'/area_servico_pesquisado',element:< Area_servico_pesquisado />},
    {path:'/portfolio', element: <Portfolio />},
    { path:'/servico/:servico_id',  element: <Servico_escolhido/> },
    {path:'/servico',element:<TrabalhoEscolhido />},
    {path:'sobre_nos',element:<PageSobreNos />},
    {path:'portfolios',element:<Portfolios />},
    {path:'portfolioeditar', element:<PortfolioEditar />},
    {path:'/cadastro_servico',element:<CadastrarServico />},
    {element:<PrivateRoutes />,

        children:[
            
            {path:'user_page',element:<PaginaUsuario />},
        ]

    }
    
]) 

export default router