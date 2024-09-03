import React, {  useEffect, useState } from "react";
import { Link ,  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

function Signup() {

   const navigate = useNavigate();
  
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confirmpassword , setConfirmPassword] = useState('');

  function onchangeEmail(event)
  {
    setEmail(event.target.value);
   
  }

  function onChangepassword(event)
  {
    setPassword(event.target.value);
  }
  
  function onChangeConfirmPassword(event)
  {
    setConfirmPassword(event.target.value);
  }



  async function handlesubmit(event)
  { 
    event.preventDefault();
   
    const UserPassword = password;
    const UserConfirmpassword =  confirmpassword;
    
  if(email ==='' || password ==='' )
  {
    console.log("please Enter valid email and passsword")
    return;
  }
    if(UserConfirmpassword !== UserPassword)
    {
      toast.error("Enter same password"); 
      return;
    }

    
   

    const response = await fetch('http://localhost:7000/users/signup' , {
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
      console.log(data);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
      //navigate('/login');// Show success toast
      localStorage.setItem("Token1" , data.token1);
      localStorage.setItem("ExpiryTime" , data.expiretime);
      const timestamp = data.expiretime;
       const date = new Date(timestamp);
      console.log(date.toString());
      }, 2000);
      
      toast.success("Signup successful!"); 
     
    
    }
    else{
      toast.error("Error signup"); 
    }
  
   

    
  }
// useEffect(()=>{
//   handlesubmit();
// })



  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-blue-500">
        <div>
        <h1 className="font-semibold text-slate-900 text-2xl">
            Welcome to Signup page
          </h1>

          <br />

          <form  id = "form" onSubmit={handlesubmit}>
            <label className="font-semibold text-slate-900">
              Enter Email:
              <br />
              <input
                type="text"
                value={email}
                onChange={onchangeEmail}
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
                onChange={onChangepassword}
                placeholder="Enter your password"
              />
            </label>

            <br />
           

            <br />
            <label className="font-semibold text-slate-900">
              Confirm Password:
              <br />
              <input
                type="text"
                 value={confirmpassword}
                onChange={onChangeConfirmPassword}
                placeholder="Enter your password"
              />
            </label>

            <br />
        
            <br />
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Signup
            </button>

            <h3>
              Already registered  ?
              <Link
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                to="/login"
              >
                {" "}
                Login{" "}
              </Link>
              here{" "}
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
