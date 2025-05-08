import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Area_servico_pesquisado from "../pages/Area_servico_pesquisado.jsx";
import PerfilRosa from "../pages/PerfilRosa.jsx";
import PerfilAzul from "../pages/PerfilAzul.jsx";
import TrabalhoEscolhido from "../pages/TrabalhoEscolhido.jsx";
import PaginaUser from "../pages/PaginaUser.jsx";



const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/login',element:<Login />},
    {path:'/cadastro',element:<Cadastro />},
    {path:'/area_servico_pesquisado',element:< Area_servico_pesquisado />},
    {path:'/perfilrosa', element: <PerfilRosa />},
    {path:'/perfilazul', element: <PerfilAzul />},
    {path:'/servico',element:<TrabalhoEscolhido />},
    {path:'/user',element:<PaginaUser />}

    

]) 

export default router