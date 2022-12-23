import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null ,
  error: "",
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    FriendsRequest: (state, action) => {
      return { ...state, loading: true, error: "" };
    },
    FriendsSuccess: (state, action) => {
      return { ...state, loading: false, error: "", data: action.payload };
    },
    FriendsError: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { FriendsRequest, FriendsSuccess, FriendsError } = friendsSlice.actions;
export default friendsSlice.reducer;