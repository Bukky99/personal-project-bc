import React, { useEffect, useState, useRef } from "react";
import "./WishList.css";
import axios from "axios";
import {Form, Button, Card} from "react-bootstrap";
import NotificationSystem from "react-notification-system";

const WishList = () => {
  const [foundShoes, setFoundShoes] = useState([]);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [removeText, setRemoveText] = useState ("")
  const notificationSystem = useRef();
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
//onclick remove info from input
  function handleClick(event) {
    // event.formBasicEmail.reset()
    event.preventDefault();
    setEmail("");
    setDescription("");
    
    const newRequest = {
      email: input.email,
      description: input.description,
    };

    axios.post("http://localhost:5000/api/request", newRequest);

    const requestNotification = notificationSystem.current;
      requestNotification.addNotification({
      message: `Your request has been submitted`,
      level: 'success'
    });
  } 

  // function handleSubmit() {
  //   setRemoveText("")
  // }

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

    
    let deletedShoe = wishList.find(shoe => event.target.id === shoe._id);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: `${deletedShoe.name} was removed from your wishlist`,
      level: 'success'
    });

  }

  
  return (
    <div className="container">  
      <div className="">
    
        {foundShoes.map(list => (
          <Card className="shoeInfo" style={{ width: '18rem' }} key={list._id}>
          <Card.Img variant="top" src={list.imageLink} />
          <Card.Body>
            <Card.Title style={{ color: '#4d4d4f' }}>{list.name}</Card.Title>
            <Card.Text className="cardText">
                  <p><b>Release Date:</b> {list.releaseDate}</p>
                  <p><b>Brand:</b> {list.brand}</p>
                  <p><b>Price:</b> {list.retailPrice.currencyCode} {list.retailPrice.amount}</p>
            </Card.Text>
            <Button variant="light" onClick={handleRemove} id={list._id}>
              
            <i class="fas fa-times fa-2x" style={{ color: "red", pointerEvents: "none" }}></i>
               </Button>
          </Card.Body>
        </Card>
            ))}
              <NotificationSystem ref={notificationSystem} />
          </div>      
      <div>
        <label className="formTitle">
          <b></b>
        </label>
        <Form className="border">
        <label className="formTitle">
          <b>Request sneakers you would like to get more information about:</b>
        </label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#4d4d4f'}}>Email address</Form.Label>
            <Form.Control 
            onChange={handleChange}
            name="email"
            type="email" 
            value={input.email} 
            placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controledId="formBasicDescription">
            <Form.Label style={{ color: '#4d4d4f'}}>Sneaker Name/Sneaker Description </Form.Label>
            <Form.Control
            onChange={handleChange}
            name="description" 
            type="description" 
            value={input.description}
            placeholder="Enter a sneaker name or description of a sneaker" />
          </Form.Group>

          {/* <Form.Group controlId="formBasicCheckBox">
            <Form.Check style={{ color: '#4d4d4f'}} type="checkbox" label="Tick to subscribe to monthly sneaker release alerts" />
          </Form.Group> */}
          <Button onClick={handleClick} variant="light" type="submit" >
            <b style={{ color: '#4d4d4f'}}>Submit</b>
          </Button>
        </Form>
        
      </div>
    
    </div>
  );
};

export default WishList;
