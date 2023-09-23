import React from "react";
import Navbar from "./Navbar";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
