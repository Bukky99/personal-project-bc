import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import WishList from "./Pages/WishList";
import Search from "./components/Search";
import Login from "./Pages/Login";
import HomeCarousel from "./Pages/HomeCarousel"
//import { MDBCarouselCaption } from "mdbreact";

// SERVICES

const App = () => {
  // const [name, setName] = useState("Bukky");
  // const [shoes, setShoes] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Route
        path="/"
        exact
        render={() => (
          <React.Fragment>
            <Home />
            {/* <HomeCarousel /> */}
          </React.Fragment>
        )}
      />

      {/* <Route
        path="/about"
        render={() => (
          <React.Fragment>
            <About />
          </React.Fragment>
        )}
      /> */}

      <Route
        path="/wishList"
        render={() => (
          <React.Fragment>
            <WishList />
          </React.Fragment>
        )}
      />

      <Route
        path="/sneakerSearch"
        render={() => (
          <React.Fragment>
            <Search />
          </React.Fragment>
        )}
      />

      <Route
        path="/login"
        render={() => (
          <React.Fragment>
            <Login />
            {/*<WishList />*/}
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
