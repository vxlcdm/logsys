import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const HomeProtection = () => {

    const isAuth=localStorage.getItem("isLoggedUser");
     
    return  isAuth? <Outlet/> : <Navigate to={"/u"}/>


}

export default HomeProtection;