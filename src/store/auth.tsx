import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"authuntication",
    initialState:{isAuthuntication:false},
    reducers:{
        isLogin(state){
            state.isAuthuntication=true
        },
        isLogout(state){
            state.isAuthuntication=false
        }
    }
});
export const authAction = authSlice.actions;
export default authSlice.reducer;