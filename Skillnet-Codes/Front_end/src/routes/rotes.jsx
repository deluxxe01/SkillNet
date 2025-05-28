import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Area_servico_pesquisado from "../pages/Area_servico_pesquisado.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import PortfolioUsuario from "../pages/PortfolioUsuario.jsx";
import TrabalhoEscolhido from "../pages/TrabalhoEscolhido.jsx";
import PortfolioEditar from "../pages/PortfolioEditar.jsx";
// import PaginaUser from "../pages/PaginaUser.jsx";
import PageSobreNos from "../pages/PageSobreNos.jsx";
import PaginaUsuario from "../pages/PaginaUsuario.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx"
import Cria_servico from "../pages/Cria_servico.jsx";


const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/login',element:<Login />},
    {path:'/cadastro',element:<Cadastro />},
    {path:'/area_servico_pesquisado',element:< Area_servico_pesquisado />},
<<<<<<< HEAD
    {path:'/portfoliorosa', element: <PortfolioRosa />},
    {path:'/portfolioazul', element: <PortfolioAzul />},
    {path:'/portfolioverde', element: <PortfolioVerde />},
    {path:'/servico',element:<TrabalhoEscolhido />},
    {path:'/servico',element:<TrabalhoEscolhido />},
    {path:'sobre_nos',element:<PageSobreNos />},
    {path:'user_page',element:<PaginaUsuario />},
      {path:'/cadastro_servico',element:<Cria_servico />},
    {element:<PrivateRoutes />,
=======
    {path:'/servico',element: <TrabalhoEscolhido />},
    {path:'/portfolio', element: <Portfolio />},
    {path:'/portfoliousuario', element: <PortfolioUsuario />},
    {path:'/portfolioeditar', element: <PortfolioEditar />},
    {path:'/servico',element: <TrabalhoEscolhido />},
    {path:'sobre_nos',element: <PageSobreNos />},
    {element: <PrivateRoutes />,
>>>>>>> e7d6692f6493721f0383825ce6433e793248ff30
        children:[
            
            {path:'user_page',element:<PaginaUsuario />},
        ]

    }
    
]) 

export default router