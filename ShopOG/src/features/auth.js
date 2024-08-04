import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name:'auth',
    initialState: {
        name:'',
        password:'',
        authUser:false
    },
    reducers:{
       login:(state,action)=> {

       },
       logout:(state,action)=> {

       },
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;