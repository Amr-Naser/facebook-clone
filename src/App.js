import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { PostsRequest, PostsSuccess, PostsError } from "./features/postsSlice";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Reset from "./pages/reset";
import Friends from "./pages/friends";
import CreatePostPopup from "./components/createPostPopup";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { user , theme } = useSelector((state) => state);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      dispatch(PostsRequest());
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if(data){
        dispatch(PostsSuccess(data));
      }
    } catch (err) {
      dispatch(PostsError(err.response.data.message));
    }
  };

  return (
    <div className={theme && "dark"}>
      {visible && (
        <CreatePostPopup
          user={user}
          setVisible={setVisible}
          posts={posts}
          dispatch={dispatch}
        />
      )}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/"
            element={
              <Home
                setVisible={setVisible}
                posts={posts}
                getAllPosts={getAllPosts}
              />
            }
            exact
          />
          <Route
            path="/profile"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/profile/:username"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends/:type"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>

        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} exact />
      </Routes>
    </div>
  );
};

export default App;

// const { loading, profile, error } = useSelector((state) => state.profile);
// const getProfile = async () => {
//   try {
//     dispatch(ProfileRequest());
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
//       {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       }
//     );
//     if(data.ok === false){
//       navigate("/profile");
//     } else {
//       dispatch(ProfileSuccess(data));
//     }
//     console.log(data)

//   } catch (err) {
//     dispatch(ProfileError(err.response.data.message));
//   }
// };
