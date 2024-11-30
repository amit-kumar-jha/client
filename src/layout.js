import React from "react";
import TopHeader from "./component/topHeader";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <TopHeader />
      <Outlet />
    </main>
  );
}

export default Layout;
