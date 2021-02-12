import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import WishList from "./Pages/WishList";
import Search from "./components/Search";
import RandomSearch from "./components/RandomSearch";
import LatestReleases from "./components/LatestReleases";
import SneakerNews from "./components/SneakerNews";
import NavbarBottom from "./components/NavbarBottom"



// SERVICES

const App = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Route
        path="/"
        exact
        render={() => (
          <React.Fragment>
            <Home />
            <LatestReleases />
            <RandomSearch />
            <SneakerNews />
            <NavbarBottom />
          </React.Fragment>
        )}
      />

    

      <Route
        path="/wishList"
        render={() => (
          <React.Fragment>
            <WishList />
            <NavbarBottom />
          </React.Fragment>
        )}
      />

      <Route
        path="/sneakerSearch"
        render={() => (
          <React.Fragment>
            <Search />
            <NavbarBottom />
          </React.Fragment>
        )}
      />

     
    </BrowserRouter>
  );
};

export default App;
