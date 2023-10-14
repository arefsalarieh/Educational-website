import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

const Layout = () => {
  return (
    <div>
      <Header />
      <div><Outlet/></div>
      <Footer />
    </div>
  );
};

export default Layout ;
