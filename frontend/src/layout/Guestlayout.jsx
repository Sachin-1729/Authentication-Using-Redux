import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
function Guestlayout() {

const isLogin = useSelector((state)=> state.login)
 

  // If the user is logged in, navigate to the home page
  if (isLogin) {
    return <Navigate to="/" replace  = {true}/>;
  }

  // Otherwise, render the nested routes
  return <Outlet />;
} 



export default Guestlayout;
