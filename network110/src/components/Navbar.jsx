import React from "react";
import "../css/navbar.css";
import LeftDrawer from "./Drawer";

const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="left1">
        <h2>Network 110</h2>
      </div>
      <div className="right1">
        <div>
        <span>Services</span>
        <span>About Us</span>
        <span>Contact Us</span>
        </div>
      </div>
      <div className="navbar-menu">
          <LeftDrawer />
        </div>
    </div>
  );
};

export default Navbar;