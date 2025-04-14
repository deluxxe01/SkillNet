import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Area_servico_pesquisado from "../pages/Area_servico_pesquisado.jsx";
import PerfilUsuarioRosa from "../pages/PerfilUsuarioRosa.jsx";
import TrabalhoEscolhido from "../pages/TrabalhoEscolhido.jsx";


const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/Login',element:<Login />},
    {path:'/Cadastro',element:<Cadastro />},
    {path:'/Area_servico_pesquisado',element:< Area_servico_pesquisado />},
    {path:'/PerfilUsuarioRosa', element: <PerfilUsuarioRosa />},
    {path:'/Servico',element:<TrabalhoEscolhido />}
    

]) 

export default router