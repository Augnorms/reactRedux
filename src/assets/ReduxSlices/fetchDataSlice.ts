import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'


const api = axios.create({
    baseURL:'https://restcountries.com/v2/all'
})


const fetchData = async()=>{
    const response = await api.get('/')
     return response.data
} 



const fetchSlice = createSlice({
    name:'fetch data',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    reducers:{
       getDataStart:(state)=>{
          state.isLoading = true;
       },
       
       getDataSuccess:(state:any, action:PayloadAction<any[]>)=>{
         
         state.isLoading = false;
         state.data = action.payload;

       },

       getDataFailure:(state:any, action:PayloadAction<string>)=>{
         state.isLoading = false;
         state.error = action.payload
       }
    }
})

export const {getDataStart, getDataSuccess, getDataFailure} = fetchSlice.actions

export const fetchAllData = ()=>async(dispatch:any)=>{
   try{
      dispatch(getDataStart())
      const data = await fetchData()
      dispatch(getDataSuccess(data))
   }catch(err:any){
      dispatch(getDataFailure(err.message))
   }
}

export default fetchSlice.reducer