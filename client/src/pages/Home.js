import React from "react";
import "./Home.css";

//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container"
      styles={{
        backgroundImage: "url(' = require (..images/homeBg.png')+ ')",
      }}
    >
      <h1 className="homeTitle">Find Your Sneakers!</h1>
    </div>
  );
};

export default Home;
