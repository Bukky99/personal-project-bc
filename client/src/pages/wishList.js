import React, { useEffect, useState } from "react";
import "./WishList.css";
import axios from "axios";
//import {Form, Button, Card} from "react-bootstrap";

const WishList = () => {
  const [foundShoes, setFoundShoes] = useState([]);
  

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
    const wishList = myStorage.getItem("wishList");
   
    setFoundShoes(wishList === null ? [] : JSON.parse(wishList))
    console.log(foundShoes);
  }, []);

  const handleRemove = (event) => {
    const myStorage = window.localStorage;
    const wishList = JSON.parse(myStorage.getItem("wishList"));

    let filteredShoes = wishList.filter(shoe => event.target.id !== shoe._id);
   
    //persit to local stoarge
    myStorage.setItem("wishList", JSON.stringify(filteredShoes))

    //update component state
    setFoundShoes(filteredShoes);

  }

  
  return (
    <div className="container">  

      <div>
        {foundShoes.map(list => (
          <div className="shoeInfo" key={list._id}>
            <h1 className="shoeName">{list.name}</h1>
            <img className="shoeImg" src={list.imageLink} alt="a shoe" />
            <p>Release Date: {list.releaseDate}</p>
            <p>Brand: {list.brand}</p>
            <p>Price: {list.retailPrice.currencyCode} {list.retailPrice.amount}</p>
            <button
            className="removeBtn"
            id={list._id}
            type="button"
            onClick={handleRemove}
          >
            Remove
          </button>
          </div>
        ))}
      </div>
      
      <div>
        <label>
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
    
    </div>
  );
};

export default WishList;
