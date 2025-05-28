import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Tela_portifolio from "../pages/Tela_portifolio";
import Teste from "../pages/Teste"



const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "Port", element: <Tela_portifolio />},



])

export default router;
