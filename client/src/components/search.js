import "./Search.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import {Card } from "react-bootstrap";
import {MDBInput, MDBCol} from "mdbreact"
import NotificationSystem from "react-notification-system";

 
const Search = () => {
  const [query, setQuery] = useState("");
  const [shoes, setShoes] = useState([]);
  const [foundShoes, setFoundShoes] = useState([]);
  const notificationSystem = useRef();
  const myStorage = window.localStorage;

  //console.log(query);
  const handleChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const apiUrl = `http://localhost:3000/api/trainer?q=${event.target.value}`;
    const response = await axios.get(apiUrl);
  
    let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoesArray === null) {
      foundShoesArray = [];
    }

    //updating objects array
    const formattedShoes = response.data.shoes.map(shoe => {
       let inWishList = false 
       
      if (foundShoesArray.map(shoe => shoe._id).includes(shoe._id)) {
        inWishList = true
      }
      return {...shoe, inWishList}
    })
    setShoes(formattedShoes)
  };

  const handleAdd = (event) => {
    
    let foundShoes = shoes.find((shoe) => event.target.id === shoe._id);
  

    //get data from local stoarge and set to array
    let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));
    if (foundShoesArray === null) {
      foundShoesArray = [];
    }

    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));

    foundShoesArray.push(foundShoes);

    myStorage.setItem("wishList", JSON.stringify(foundShoesArray));
    
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

  const handleRemove = (event) => {
    //const myStorage = window.localStorage;
    const wishList = JSON.parse(myStorage.getItem("wishList"));
    let filteredShoes = wishList.filter(shoe => event.target.id !== shoe._id);
      
    //persit to local stoarge
    myStorage.setItem("wishList", JSON.stringify(filteredShoes))

    //update component state
    setFoundShoes(filteredShoes);

    let deletedShoe = wishList.find(shoe => event.target.id === shoe._id);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: `${deletedShoe.name} was removed from your wishlist`,
      level: 'success'
    });

    const formattedShoes = shoes.map(shoe => {
      let inWishList = false 
      let foundShoesArray = JSON.parse(myStorage.getItem("wishList"));

     if (foundShoesArray.map(shoe => shoe._id).includes(shoe._id)) {
       inWishList = true
     }
     return {...shoe, inWishList}
   })
   setShoes(formattedShoes)

  }
  
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
                onClick={shoe.inWishList ? handleRemove : handleAdd} //tertiary: shoe.inWishList ? removeBtn(create function) : handleAdd
                id={shoe._id}
                ></i> 
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
