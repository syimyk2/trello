import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isValid: false, userProfile: {}, showProfile: false, isRegister: false},
    reducers: {
        authention(state, action){
            state.isValid = action.payload
            console.log(action.payload);
            state.userProfile = { ...action.payload}


        },
        showProfile(state, action){
          state.showProfile = action.payload

        },
        registerTrello(state, action){
          state.isRegister = action.payload
        }

    }
})

export const authActions = authSlice.actions
export default authSlice
