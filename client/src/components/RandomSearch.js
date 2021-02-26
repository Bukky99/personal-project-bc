import React, {useState} from 'react';
import axios from "axios"
import {Card, Button} from "react-bootstrap";
import "./RandomSearch.css"

const RandomSearch = () => {
    const [randomShoe, setRandomShoe] = useState([]);

    const handleClick = async (event) => {
        event.preventDefault();
        const apiUrl = "http://localhost:5000/api/randomTrainer"
        const result = await axios.get(apiUrl);
        setRandomShoe(result.data.shoe)
        console.log(result.data.shoe)
    }

    return (
        <div>
            <div className="container">
                <div className="randomSearch">
                    <h2 className="randomShoeTitle">Generate A Random Sneaker</h2>
                    <Button className="randomButton" 
                        variant="secondary" 
                        style={{backgroundColor: "#4d4d4f"}}
                        onClick={handleClick}>
                            <b>Push The Button!</b>
                    </Button>
                    <div className="container">
                        <div className="grid">
                            <div className="">
                                <div className="randomShoeContainer">
                                    {randomShoe.map((shoe) => (
                                        <Card className="randomShoe" style={{width: "18rem", height: "17rem"}}  key={shoe._id}>
                                        <Card.Img  variant="top" src={shoe.imageLink} />
                                        <Card.Body>
                                            <Card.Title className="randomShoeName">{shoe.name}</Card.Title>
                                            <Card.Text>                                           
                                            </Card.Text>
                                            </Card.Body>
                                            </Card>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <div className="randomShoeContainer">
                                    {randomShoe.map((shoe) => (
                                        <Card className="randomShoe"  key={shoe._id} style={{width: "18rem", height: "17rem"}}>
                                        <Card.Body>
                                            <Card.Title className="randomShoeInfoTitle">Info:</Card.Title>
                                            <Card.Text className="randomShoeText">                                            
                                                <p><b>Release Date:</b> {shoe.releaseDate}</p>
                                                <p><b>Brand:</b> {shoe.brand}</p>
                                                <p><b>Model:</b> {shoe.model} </p>
                                                <p><b>Price:</b> {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}</p>
                                                <p>
                                                    <a href={shoe.website} rel="noreferrer" target="_blank">
                                                        <Button className="buyBtn" variant="secondary" style={{backgroundColor: "#4d4d4f"}}><b>Buy now</b></Button>
                                                    </a>
                                                </p>
                                            </Card.Text>
                                            </Card.Body>
                                            </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default RandomSearch;