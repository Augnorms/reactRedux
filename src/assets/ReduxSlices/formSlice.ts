import {createSlice} from '@reduxjs/toolkit'

export interface FormInput{
    name:string;
    email:string,
    gender:string
}


const initialState: FormInput= {
     name:'',
     email:'',
     gender:''
}

const FormInputSlice = createSlice({
    name:'formInput',
    initialState,
    reducers:{
       setName(state, action){
         state.name = action.payload
       }, 
       setEmail(state, action){
         state.email = action.payload
       },
       setGender(state, action){
         state.gender = action.payload
       }
    }
})

export const {setName, setEmail, setGender} = FormInputSlice.actions
export default FormInputSlice.reducer