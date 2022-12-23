import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  profile: null ,
  error: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    ProfileRequest: (state, action) => {
      return { ...state, loading: true, error: "" };
    },
    ProfileSuccess: (state, action) => {
      return { ...state, loading: false, error: "", profile: action.payload };
    },
    ProfilePosts: (state, action) => {
      return { loading: false, error: "", profile: {...state.profile , posts: action.payload} };
    },
    ProfileError: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { ProfileRequest , ProfileSuccess , ProfilePosts , ProfileError } = profileSlice.actions;
export default profileSlice.reducer;
