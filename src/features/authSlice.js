import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null ;

const authSlice = createSlice({
    name: 'user',
    initialState ,
    reducers: {
        Login: (state , action) => {
            return action.payload ;
        },
        Logout: () => {
            return null ;
        },
        Verify: (state , action) => {
            return { ...state , verified: action.payload} ;
        },
        UpdatePicture: (state , action) => {
            return { ...state , picture: action.payload}
        },
    }
});

export const { Login , Logout , Verify , UpdatePicture } = authSlice.actions ;
export default authSlice.reducer ;