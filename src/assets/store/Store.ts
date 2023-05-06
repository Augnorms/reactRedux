import { configureStore } from "@reduxjs/toolkit";
import formInputReducer from '../ReduxSlices/formSlice'


const store = configureStore({
    reducer:{
       formInputs: formInputReducer,
       
    }
})

export default store