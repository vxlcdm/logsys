import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const RouteProtection = () => {
    const auth =localStorage.getItem("isLoggedUser");

  return  auth?<Outlet/>:<Navigate to={"/login"}/>;

}

export default RouteProtection;