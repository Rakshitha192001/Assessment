import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState:{
        userName:"abcd",
        password:'123',
    },
   reducers: {
    setLoginStatus:(state, action) =>{

    }
   }
})

export default loginSlice.reducer