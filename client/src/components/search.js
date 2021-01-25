//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, Button } from "react-bootstrap";

const Search = () => {
  const [query, setQuery] = useState("");

  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const apiUrl = `http://localhost:3000/api/trainer?q=${query}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
  };

  //console.log(query);
  const handleChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const apiUrl = `http://localhost:3000/api/trainer?q=${event.target.value}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
  };

  const handleAdd = (event) => {
    //console.log(event.target.id);
    let foundShoes = shoes.find((shoe) => event.target.id === shoe._id);
    //console.log(shoes.find((shoe) => event.target.id === shoe._id));

    //local storage variable
    const myStorage = window.localStorage;

    //get data from local stoarge and set to array
    let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoesArray === null) {
      foundShoesArray = [];
    }

    //set foundShoeArray(value) to wishList(key)
    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));


    //store item in array
    foundShoesArray.push(foundShoes);

  
    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));

    //console.log(foundShoeArray);

  
  };

  return (
    <div>
      <div className="container">
        
        <label className="shoe-search">Search for your Sneaker:</label>
        {/* Fetch data from API */}
        <i className="fas fa-search" />
        <input
          className="searchBar"
          type="search"
          name="query"
          value={query}
          id="shoe-search"
          placeholder="Search..."
          onChange={handleChange}
        ></input>
       
        <p>{message}</p>
      </div>
      {/* Displays data from API */}

      {shoes.map((shoe) => (
        <Card className="shoeInfo" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Add </Button>
        </Card.Body>
      </Card>)
        
      )}
    </div>
  );
};

export default Search;
