import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel"
//import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";

const Home = () => {
  return (
    <div className="">
      <h1 className="homeTitle">Find Your Sneakers!</h1>
      <Link className="link" to="/sneakerSearch">
      <h3 className="homeSubTitle">Click <em>here</em> to start your search</h3>
      </Link>
      <HomeCarousel />
      
    </div>
  );
};

export default Home;
