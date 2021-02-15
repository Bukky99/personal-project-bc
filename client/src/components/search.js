//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import {Card } from "react-bootstrap";
import {MDBInput, MDBCol} from "mdbreact"
import NotificationSystem from "react-notification-system";

 
const Search = () => {
  const [query, setQuery] = useState("");
  const [shoes, setShoes] = useState([]);
  const [shoesClicked, setShoesClicked] = useState ([])
  const [clickedBtn, setClickedBtn] = useState (false)
  const notificationSystem = useRef();
 
  //console.log(query);
  const handleChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const apiUrl = `http://localhost:3000/api/trainer?q=${event.target.value}`;
    const response = await axios.get(apiUrl);
  
    const myStorage = window.localStorage;
    let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoesArray === null) {
      foundShoesArray = [];
    }

    //updating array
    const formattedShoes = response.data.shoes.map(shoe => {
       let inWishList = false 
       
      if (foundShoesArray.map(shoe => shoe._id).includes(shoe._id)) {
        inWishList = true
      }

      return {...shoe, inWishList}
    })


    setShoes(formattedShoes)
    console.log(formattedShoes)
  };

  const handleAdd = (event) => {
    //console.log(event.target.id);
    let foundShoes = shoes.find((shoe) => event.target.id === shoe._id);
      
    //local storage variable
    const myStorage = window.localStorage;

    //get data from local stoarge and set to array
    let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoesArray === null) {
      foundShoesArray = [];
    }
    //console.log(foundShoes)

    //set foundShoeArray(value) to wishList(key)
    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));

    //store item in array
    foundShoesArray.push(foundShoes);

    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));
    //console.log(foundShoeArray);
  
    const notification = notificationSystem.current;
    notification.addNotification({
      message: `${foundShoes.name} was added to your wishlist`,
      level: 'success'
    }); 
    
    const formattedShoes = shoes.map(shoe => {
      let inWishList = false 
      
     if (foundShoesArray.map(shoe => shoe._id).includes(shoe._id)) {
       inWishList = true
     }

     return {...shoe, inWishList}
   })

   setShoes(formattedShoes)
     
  };
  

  return(
    <div className="container">
      <div className="container">
        <MDBCol md="6" className="searchBar">
          <label style={{ color: '#4d4d4f'}}><b>Start Your Search:</b></label>
            <MDBInput 
            hint="Search" 
            type="text"
            containerClass="mt-10"
            size="lg"
            name="query"
            value={query}
            id="shoe-search"
            placeholder="Search..."
            onChange={handleChange} />
        </MDBCol>
        <div className="shoeInfoHolder">      
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
                <i class="fas fa-heart fa-2x" 
                style={{color: shoe.inWishList ? "red" : "#4d4d4f"}}
                onClick={handleAdd}
                id={shoe._id}
                ></i> 
              </Card.Body>
            </Card>
          ))} 
        </div>
        <div>
        {/* {shoesClicked.map(shoe =>(
              
              <div key={shoe.id}>{shoe.value}</div>
            ))} */}
        </div>
        <NotificationSystem ref={notificationSystem} />
      </div>
    </div>
  );
};

export default Search;
