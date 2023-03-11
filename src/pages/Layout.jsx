import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import './styles/Layout.css';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;