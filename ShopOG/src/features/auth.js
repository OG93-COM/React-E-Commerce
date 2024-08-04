import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name:'',
            password:'',
            authUser:false
        }
    },
    reducers:{
       login:(state,action)=> {
            const userId = action.payload;
            const userValidation = /^[A-Za-z-a-zA-Z0-9]/.test(userId.name);
            const passwordValidation =
            /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
              userId.password
            );
            console.log(userValidation + " " + passwordValidation)
            try {
                state.user = userId
                if(!userValidation || !passwordValidation){
                    state.user.authUser = false
                } else {
                    state.user.authUser = true
                    const saveState = JSON.stringify(userId)
                    sessionStorage.setItem("authUser", saveState)
                }
            } catch (error) {
                return error
            }
       },
       logout:(state,action)=> {
        const userId = {
            name:'',
            password:'',
            authUser:false
        }
        state.user = userId
        sessionStorage.clear()
       },
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;