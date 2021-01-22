import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import data from "./models/trainers.json";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
//import Trainer from "./Components/Trainer";
import WishList from "./Pages/WishList";
import Search from "./Components/Search";
import Login from "./Pages/Login";

// SERVICES

const App = () => {
  const [name, setName] = useState("Bukky");
  const [shoes, setShoes] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Route
        path="/"
        exact
        render={() => (
          <React.Fragment>
            <Home />
            {/*<Login />*/}
          </React.Fragment>
        )}
      />

      <Route
        path="/about"
        render={() => (
          <React.Fragment>
            <About />
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
