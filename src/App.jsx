import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import AllPosts from "./pages/allPosts";
import MyPosts from "./pages/myPosts";

function App({ postService }) {
  const history = useNavigate();

  const onAllPosts = () => {
    history.push("/");
  };

  // const onMyPosts = () => {
  //   history.push(`/${user.userid}`);
  // };

  const onLogout = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      history.push("/");
    }
  };
  return (
    <>
      <div className="app">
        <Header
          // userid={user.userid}
          onLogout={onLogout}
          onAllPosts={onAllPosts}
          // onMyPosts={onMyPosts}
        ></Header>
        <Routes>
          (
          <>
            <Route
              exact
              path="/"
              element={<AllPosts postService={postService} />}
            ></Route>
            <Route
              exact
              path="/:userid"
              element={<MyPosts postService={postService} />}
            ></Route>
          </>
          )
        </Routes>
      </div>
    </>
  );
}

export default App;
