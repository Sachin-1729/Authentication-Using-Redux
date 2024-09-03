import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';


function Authlayout() {
    const isLogin = useSelector((state)=> state.login)

    console.log(isLogin, "Login hai kya");


  return (
    <>
    {
        isLogin
          ?
                <Dashboard/>    
          
          :
          <Navigate to="/login" />
    }
      </>
  )
}

export default Authlayout;
