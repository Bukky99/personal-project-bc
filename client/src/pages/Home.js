import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link className="link" to="/sneakerSearch">
      <h1 className="homeTitle">Find Your Sneakers!</h1>
      </Link>
      
    </div>
  );
};

export default Home;
