import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../features/authSlice";
import postsReducer from "../features/postsSlice";
import profileReducer from "../features/profileSlice";
import photosReducer from "../features/photosSlice";
import friendsReducer from "../features/friendsSlice";
import themeReducer from "../features/themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    profile: profileReducer,
    photos: photosReducer,
    friends: friendsReducer,
    theme: themeReducer,
  },
  composeWithDevTools,
});
