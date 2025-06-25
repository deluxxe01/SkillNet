import { replace, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


const autenticado =() =>{

    return  sessionStorage.getItem('token')
}
const PrivateRoutes = () =>{ 

    return autenticado() ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;