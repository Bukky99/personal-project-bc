import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import WishList from "./Pages/WishList";
import Search from "./components/Search";
import RandomSearch from "./components/RandomSearch";
import LatestReleases from "./components/LatestReleases";


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
            <RandomSearch />
            <LatestReleases />
          </React.Fragment>
        )}
      />

    

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

     
    </BrowserRouter>
  );
};

export default App;
