//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {Card, Button } from "react-bootstrap";
import {MDBInput, MDBCol} from "mdbreact"
import NotificationSystem from "react-notification-system";


const Search = () => {
  const [query, setQuery] = useState("");
  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("");
  const notificationSystem = useRef();

  // const fetchData = async () => {
  //   const apiUrl = `http://localhost:3000/api/trainer?q=${query}`;
  //   const response = await axios.get(apiUrl);
  //   setMessage(response.data.message);
  //   setShoes(response.data.shoes);
  // };

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
    if (foundShoes === null) {
      foundShoes = event.target.id
    }
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

  debugger
    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));

    //console.log(foundShoeArray);
    
    console.log(notificationSystem)
    console.log(notificationSystem.current)
    
    debugger
    const notification = notificationSystem.current;
    notification.addNotification({
      message: `${foundShoes.name} was added to your wishlist`,
      level: 'success'
      
    });
  
  };

   


  return (
    <div>
      <div className="container">
        
        
        {/* Fetch data from API */}
        {/* <i className="fas fa-search" /> */}
        <MDBCol md="6" className="searchBar">
        <label><b>Search for your Sneaker:</b></label>
          <MDBInput 
          hint="Search" 
          type="text"
          type="search"
          containerClass="mt-10"
          name="query"
          value={query}
          id="shoe-search"
          placeholder="Search..."
          onChange={handleChange} />
        </MDBCol>
      
       
        
      </div>
      {/* Displays data from API */}
      <div className="shoeInfoHolder">
        {/* <p className="searchMessage">{message}</p> */}
        {shoes.map((shoe) => (
        <Card className="shoeInfo" style={{ width: '18rem' }} key={shoe._id}>
        <Card.Img variant="top" src={shoe.imageLink} />
          <Card.Body>
            <Card.Title>{shoe.name}</Card.Title>
            <Card.Text>
                  <p>Release Date: {shoe.releaseDate}</p>
                  <p>Brand: {shoe.brand}</p>
                  <p>Model: {shoe.model} </p>
                  <p>Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}</p>
                  
            </Card.Text>
            <Button className="addBtn" variant="secondary" onClick={handleAdd} id={shoe._id}>
            <i class="fas fa-heart" style={{ color: "red" }}></i> </Button>
          </Card.Body>
        </Card>
        ))}
      </div>
        <NotificationSystem ref={notificationSystem} />
    </div>
  );
};

export default Search;
