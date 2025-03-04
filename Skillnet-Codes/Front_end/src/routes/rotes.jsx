import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro.jsx'
import Login from "../pages/Login.jsx";



const router = createBrowserRouter([
    {path:'/',element:<Cadastro />},
    {path:'/Login',element:<Login />}
]) 

export default router