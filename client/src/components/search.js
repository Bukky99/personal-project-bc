//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("Testing!");

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
    let foundShoe = shoes.find((shoe) => event.target.id === shoe._id);
    //console.log(shoes.find((shoe) => event.target.id === shoe._id));

    //local storage variable
    const myStorage = window.localStorage;
    let foundShoeArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoeArray === null) {
      foundShoeArray = [];
    }

    //set foundShoeArray(value) to wishList(key)
    myStorage.setItem("wishList", JSON.stringify(foundShoeArray));

    //get data from local stoarge
    //const getMyStorage = JSON.parse(myStorage.getItem("wishList"));
    //console.log(getMyStorage);

    //store item in array
    foundShoeArray.push(foundShoe);

    //removes from local storage
    // const removeMyStorage = () => {
    //   if (myStorage.getItem("wishList") == null) {
    //     myStorage.getItem("wishList");
    //   }
    //   setShoes(removeMyStorage);
    //   console.log(setShoes(removeMyStorage));
    //   // foundShoeArray = [...foundShoeArray, ...removeMyStorage];
    // };
    myStorage.setItem("wishList", JSON.stringify(foundShoeArray));

    console.log(foundShoeArray);

    // console.log(foundShoeArray.push(getMyStorage));
    // if no array,an empty array is created
    // if (myStorage == null) {
    //   foundShoeArray = [];
    // }

    //foundShoeArray.push(JSON.parse(myStorage.getItem("wishList")));
  };

  return (
    <div>
      <div className="container">
        {/*<h1>Trainers Release in 2020</h1>8*/}
        {/*shoes.map(shoe)*/}
        {/*<h2>Fetch a list of Nike Shoes from an API and display it</h2>*/}
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
        {/* {/* <button className="fetch-button" onClick={fetchData}>
          live serach instead of button 
          Find Sneaker
        </button> */}
        <p>{message}</p>
      </div>
      {/* Displays data from API */}

      {shoes.map((shoe) => (
        <div className="shoeInfo" key={shoe._id}>
          <h1 className="shoeName">{shoe.name}</h1>
          <img className="shoeImg" src={shoe.imageLink} alt="a shoe" />
          <p>Release Date: {shoe.releaseDate}</p>
          <p>Brand: {shoe.brand}</p>
          <p>
            Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}
          </p>
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
