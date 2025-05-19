import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Area_servico_pesquisado from "../pages/Area_servico_pesquisado.jsx";
import PortfolioRosa from "../pages/PortfolioRosa.jsx";
import PortfolioAzul from "../pages/PortfolioAzul.jsx";
import PortfolioVerde from "../pages/PortfolioVerde.jsx";
import TrabalhoEscolhido from "../pages/TrabalhoEscolhido.jsx";
// import PaginaUser from "../pages/PaginaUser.jsx";
import PortfolioUsuarioRosa from "../pages/PortfolioUsuarioRosa.jsx";
import PageSobreNos from "../pages/PageSobreNos.jsx";
import PaginaUsuario from "../pages/PaginaUsuario.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx"



const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/login',element:<Login />},
    {path:'/cadastro',element:<Cadastro />},
    {path:'/area_servico_pesquisado',element:< Area_servico_pesquisado />},
    {path:'/portfoliorosa', element: <PortfolioRosa />},
    {path:'/portfolioazul', element: <PortfolioAzul />},
    {path:'/portfolioverde', element: <PortfolioVerde />},
    {path:'/servico',element: <TrabalhoEscolhido />},
    {path:'/portfoliousuariorosa', element: <PortfolioUsuarioRosa />},
    {path:'/servico',element: <TrabalhoEscolhido />},
    {path:'sobre_nos',element: <PageSobreNos />},
    {element: <PrivateRoutes />,
        children:[
            
            {path:'user_page',element:<PaginaUsuario />},
        ]

    }
    
]) 

export default router