import React, {useState} from 'react';
import axios from "axios"
import {Card, Button} from "react-bootstrap";




const RandomSearch = () => {
    const [randomShoe, setRandomShoe] = useState([]);

  
   
    const handleClick = async (event) => {
        event.preventDefault();
        const apiUrl = "http://localhost:3000/api/randomTrainer"
        const result = await axios.get(apiUrl);
        setRandomShoe(result.data.shoe)
        console.log(result.data.shoe)
        
    }


    return (
        <div>
            <div className="randomSearch">
                <Button variant="secondary" onClick={handleClick}  >Generate Random Sneaker</Button>
                <div>
                    {randomShoe.map((shoe) => (
                        <Card className="shoeInfo" style={{ width: '25%'}} key={shoe._id}>
                        <Card.Img variant="top" src={shoe.imageLink} />
                        <Card.Body>
                            <Card.Title>{shoe.name}</Card.Title>
                            <Card.Text>
                            
                                <p>Release Date: {shoe.releaseDate}</p>
                                <p>Brand: {shoe.brand}</p>
                                <p>Model: {shoe.model} </p>
                                <p>Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}</p>
                                
                            </Card.Text>
                            </Card.Body>
                            </Card>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default RandomSearch;