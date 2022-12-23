import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  photos: null ,
  error: "",
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    PhotosRequest: (state, action) => {
      return { ...state, loading: true, error: "" };
    },
    PhotosSuccess: (state, action) => {
      return { ...state, loading: false, error: "", photos: action.payload };
    },
    PhotosError: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { PhotosRequest, PhotosSuccess, PhotosError } = photosSlice.actions;
export default photosSlice.reducer;