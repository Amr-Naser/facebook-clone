import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: null ,
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    PostsRequest: (state, action) => {
      return { ...state, loading: true, error: "" };
    },
    PostsSuccess: (state, action) => {
      return { ...state, loading: false, error: "", posts: action.payload };
    },
    PostsError: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { PostsRequest, PostsSuccess, PostsError } = postsSlice.actions;
export default postsSlice.reducer;
