import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice' 
import dataReducer from '../slices/dataSlice'

const store = configureStore({
    reducer:{
        userInfo : userReducer,
        dataInfo : dataReducer
    }
})

export default store;