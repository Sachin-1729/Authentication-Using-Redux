import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   login: localStorage.getItem('Token'),
  
};



const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginDone: (state , action)=>{
           console.log(state.login, "Login ki state")
            //  const logincheck = action.payload;
            //  state.login = logincheck;
             if(state.login !== ''){
                //const value = localStorage.getItem('Token');
                // localStorage.setItem('Token' , value);
                state.login = localStorage.getItem('Token');
             }
        },
        logoutDone: (state , action)=>{
            //  state.login = false;
            localStorage.removeItem('Token');
            state.login = localStorage.getItem('Token');
        
            
        },
    },
    extraReducers: (builder) => {
      
    }
});

export const { loginDone , logoutDone } = authSlice.actions;

export default authSlice.reducer;
