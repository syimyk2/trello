import styled from "styled-components";
import React from 'react'
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import WorkSpace from "./components/pages/WorkSpace";
import Archive from "./components/pages/Archive";
import Favorite from "./components/pages/Favorite";
import Recent from "./components/pages/Recent";
import NotFoundPage from "./components/pages/NotFoundPage";
import SinglePaage from "./components/pages/SinglePaage";
import RequireAuth from "./helpers/hoc/RequireAuth";
import { Suspense } from "react";
import Loading from "./components/UI/Loading";
const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Auth = React.lazy(() => import("./components/Auth"));
const HomePage = React.lazy(() => import("./components/pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform:'translate(50%, 50%)'
    }}><Loading/></div>}>
      <Routes>
        <Route path="/login-page" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index path="/" element={<HomePage />} />
          <Route path="workspace" element={<WorkSpace />} />
          <Route path="recent" element={<Recent />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="favorite/:id" element={<SinglePaage />} />
          <Route path="archive" element={<Archive />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

const Wrapper = styled.div`
  background: url(${(props) => (!props.authIsValid ? props.img : "")});
  background-size: cover;
  height: ${(props) => (!props.authIsValid ? "100vh" : "")};
  display: ${(props) => (!props.authIsValid ? "flex" : "")};
`;

export default App;
