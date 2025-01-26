import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout-container">
        <Navbar />
        <div className="body-container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
