import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";
import LandingPage from "../pages/LandingPage.jsx";



const router = createBrowserRouter([
    {path:'/',element:<LandingPage />},
    {path:'/Login',element:<Login />},
    {path:'/Cadastro',element:<Cadastro />}
]) 

export default router