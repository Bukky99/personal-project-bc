//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
        <div className="shoeInfo" key={shoe._id}>
          <h1 className="shoeName">{shoe.name}</h1>
          <img className="shoeImg" src={shoe.imageLink} alt="a shoe" />
          <p>Release Date: {shoe.releaseDate}</p>
          <p>Brand: {shoe.brand}</p>
          <p>Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}</p>
          <button
            className="addBtn"
            id={shoe._id}
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Search;
