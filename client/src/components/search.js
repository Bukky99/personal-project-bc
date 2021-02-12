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
  const [message, setMessage] = useState("hello");
  const notificationSystem = useRef();
  // const [displayText, setDisplayText] = useState({
  //   results: "hello",
  //   noresults: true
  // });
  const [displayText, setDisplayText] = useState("hello")


  //console.log(query);
  const handleChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const apiUrl = `http://localhost:3000/api/trainer?q=${event.target.value}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
    console.log(response.data.shoes)

    // if(response === []) {
    //   response === "message"
    // }

    // const pageText = () => setDisplayText(true)
    //   // const text = "Display this text on page";
    //   // if (response.data.shoes = []){
    //   //   return {text}
    //   // }
    //   // console.log(text)
    // } 



  };

  


  const handleAdd = (event) => {
    //console.log(event.target.id);
    let foundShoes = shoes.find((shoe) => event.target.id === shoe._id);
    // if (foundShoes === null) {
    //   foundShoes = event.target.id
    // }
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
    
    console.log(notificationSystem)
    console.log(notificationSystem.current)
    
  
    const notification = notificationSystem.current;
    notification.addNotification({
      message: `${foundShoes.name} was added to your wishlist`,
      level: 'success'
      
    });

    
  
  };

   


  return (
    <div>
      <div className="container">
        <MDBCol md="6" className="searchBar">
          <label style={{ color: '#4d4d4f'}}><b>Search for your Sneaker:</b></label>
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
        

      
        <div className="shoeInfoHolder">
          {/* {handleChange}
          {displayText.results} */}

          <div className="pageText">
            {message}
          </div>
          
        

          {shoes.map((shoe) => ( 
          <Card className="shoeInfo" style={{ width: '18rem' }} key={shoe._id}>
            <Card.Img variant="top" src={shoe.imageLink} />
              <Card.Body>
                <Card.Title style={{ color: '#4d4d4f' }}>{shoe.name}</Card.Title>
                <Card.Text className="cardText">
                  
                      <p><b>Release Date:</b> {shoe.releaseDate}</p>
                      <p><b>Brand:</b> {shoe.brand}</p>
                      <p><b>Model:</b> {shoe.model} </p>
                      <p><b>Price:</b> {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}</p>
                      
                </Card.Text>
                {/* className="addBtn" variant="light" onClick={handleAdd} id={shoe._id}> */}
                <i class="fas fa-heart fa-2x" onClick={handleAdd}  id={shoe._id}></i> 
              </Card.Body>
            </Card>
          ))} 
        </div>
        <NotificationSystem ref={notificationSystem} />
        </div>
    </div>
  );
};

export default Search;
