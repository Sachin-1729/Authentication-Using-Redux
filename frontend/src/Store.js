import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './redux/Authslice'


const store = configureStore({
    reducer: AuthSlice

})


export default store;