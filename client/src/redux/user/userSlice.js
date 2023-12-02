import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    loading:false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        signInSuccess:(state,action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signInfailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInfailure} = userSlice.actions;

export default userSlice.reducer;