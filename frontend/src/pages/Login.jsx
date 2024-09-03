import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import {  useDispatch } from "react-redux";
import {loginDone} from '../redux/Authslice'


function Login() {

 const dispatch = useDispatch();

  const navigate = useNavigate();

  // const[login , setlogin] = useState(false);

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  

  function handleChangeemail(event)
  {
    setEmail(event.target.value);
  }

  function handleChangepassword(event)
  {
    setPassword(event.target.value);
  }

 

 async function handlesubmit(event)
 {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:7000/users/signin', {
  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
    },
    body: JSON.stringify({
      email: email,       // Use the email variable
      password: password  // Use the password variable
    })
          
    });
    if(response.ok)
    { 

     
     const data = await response.json();
     console.log(data.token);
     localStorage.setItem("Token" , data.token);
     localStorage.setItem("ExpiryTime" , data.expiretime);
      setEmail('');
      setPassword('');
     
      dispatch(loginDone())
     
      
      setTimeout(() => {
        navigate('/');
        toast.success("Login successful!"); 
       
      }, 500);
     // Show success toast
      
      
      
     
      console.log("Email and password has been sent to server");

  
    }
    else
    {
      toast.error("Enter Valid Email and Password"); // Show error toast if response is not ok
    }
    
  } catch (error) {
    toast.error("Enter Valid Email and Password"); 
    console.log(error)
    
  }
 }



  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div>
      <h1 className="font-semibold text-slate-900 text-2xl">

            Welcome to login page</h1>

        <br />

        <form onSubmit={handlesubmit} >
          <label className="font-semibold text-slate-900">
            Enter Email:
            <br />
            <input
              type="text"
              value={email}
              onChange={handleChangeemail}
              placeholder="Enter your email address"
            />
          </label>
          <br />
          <label className="font-semibold text-slate-900">
            Enter Password:
            <br />
            <input
              type="text"
              value={password}
              onChange={handleChangepassword}
              placeholder="Enter your password"
            />
          </label>

          <br />
          <br />
          <label className="font-semibold text-slate-900">
            <input
              type="checkbox"
              //  checked={isChecked}
              //  onChange={handleChange}
            />
            Remember me
          </label>
          <br />
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Login
          </button>

          <h3>
            Did not register yet ?
            <Link
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              to="/signup"
            >
              {" "}
              Sign up{" "}
            </Link>
            here{" "}
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
