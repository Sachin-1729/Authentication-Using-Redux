import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { logoutDone } from '../redux/Authslice';
import { useEffect } from 'react';

function Dashboard() {
  function isTokenExpired() {
    const expiryTime = localStorage.getItem('ExpiryTime');
    const currentTime = Date.now();
    return currentTime > expiryTime;
}

function getToken() {
  if (isTokenExpired()) {
      console.log('Token expired. Please log in again.');
      // Handle token expiration (e.g., redirect to login page)
      localStorage.removeItem('Token');
      localStorage.removeItem('ExpiryTime');
      return null;
  } else {
      return localStorage.getItem('Token');
  }
}
 useEffect(()=>{
  const token = getToken();
  if(token)
  {
    console.log(token);
    const Currenntdate = new Date(Date.now());
    const expiredata = localStorage.getItem('ExpiryTime')
    console.log(expiredata , "nfnwkr");
    const expiryDate = new Date(expiredata);
    console.log(expiryDate.toString());
    console.log("Date: ",Currenntdate.toString());
  }
  
 }, []);

//  const login = useSelector((state)=> state.login)
 
//  console.log(login);
 const dispatch = useDispatch();

  return (
    <div>Dashboard
        
         <button
          onClick={()=> dispatch(logoutDone())}
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Logout
          </button>


    </div>
  )
}

export default Dashboard