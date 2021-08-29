import React from "react";
import navigation from "../../navigation";
import Navbar from "../Navbar/Navbar";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrap">
      <div className="main-content">{children}</div>
      <Navbar menu={navigation} />
    </div>
  );
};

export default Layout;
