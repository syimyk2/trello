import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import UserProfile from "../UserProfile";

const Layout = () => {
  const showProfile = useSelector((state)=>state.auth.showProfile)

  return (
    <div>
      <header>
        <Headers />
      </header>
      <main>
      {showProfile&&<UserProfile/>}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
