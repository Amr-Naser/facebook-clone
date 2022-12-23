import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("darkTheme") ? JSON.parse(Cookies.get("darkTheme")) : false ;

const themeSlice = createSlice({
    name: 'user',
    initialState ,
    reducers: {
        Dark: (state , action) => {
            return true ;
        },
        Light: () => {
            return false ;
        },
       
    }
});

export const { Dark , Light  } = themeSlice.actions ;
export default themeSlice.reducer ;