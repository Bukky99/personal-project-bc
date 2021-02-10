import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navBar">
      <Link className="link" to="/">
        Home
      </Link> 
      {/* <Link className="link" to="/about">
        About
      </Link> */}
      <Link className="link" to="/sneakerSearch">
       Sneaker Search
      </Link>
      <Link className="link" to="/wishList">
        My Wish List
      </Link>
      {/* <Link className="link" to="/login">
        Login
      </Link> */}
    </div>
  );
};

export default Navbar;
