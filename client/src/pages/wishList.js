import React, { useEffect, useState } from "react";
import "./WishList.css";
import axios from "axios";
//import {Form, Button, Card} from "react-bootstrap";

const WishList = (props) => {
  const [wishList, setWishList] = useState([]);
  const [,] = useState();

  //object tracking two fields, username & description
  const [input, setInput] = useState({
    email: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newRequest = {
      email: input.email,
      description: input.description,
    };
    axios.post("http://localhost:5000/api/request", newRequest);
  }

  useEffect(() => {
    const myStorage = window.localStorage;
    const foundShoe = myStorage.getItem("wishList");
    console.log(foundShoe);
    setWishList(JSON.parse(foundShoe));
    console.log(setWishList(foundShoe));
  }, []);

  return (
    <div className="container">
      {/*<h1>Create Wish List Page</h1>*/}
      {/*<h1> {props.name}'s Sneaker Wish List!</h1>*/}
      {/*form to go at bottom of page */}
      <p>{wishList}</p>

      <br></br>
      <p>Sneaker Count: </p>
      <label>
        <br></br>
        <b>Request sneakers you would like to get more information about:</b>
      </label>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="email"
            value={input.email}
            autoComplete="off"
            className="form-control"
            placeholder="Email"
          ></input>
        </div>

        {/*User can request to get more info from a shoe if not on the website which will send into database*/}
        {/*User sends form which is attached to thier account*/}
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="description"
            value={input.description}
            autoComplete="off"
            className="form-control"
            placeholder="Sneaker Name/Sneaker Description"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Request Sneaker Info{" "}
        </button>
      </form>
    </div>
  );
};

export default WishList;
