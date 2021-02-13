import React from 'react';
import {Card} from "react-bootstrap"
import "./SneakerNews.css"

const SneakerNews = () => {
    return (
        <div>
            <div className="container">
                <h2 className="sneakerNewsTitle">Sneaker News</h2>
                
                <div className="card-columns">
                    <div className="card">
                        <img className="card-img-top" src="https://sneakernews.com/wp-content/uploads/2021/01/jordan-6-carmine-official-images-ct8529-106-5.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">The Air Jordan 6 “Carmine” Brings Back Nike Air For First Time Since 1991</h5>
                            <p className="card-text">The Air Jordan 6 “Carmine” holds a special, albeit brief, moment in the annals of Air Jordan history. Arguably among the most audaciously...</p>
                            <p className="card-text"><small class="text-muted">January 10, 2021 by <a href="https://sneakernews.com/2021/01/10/air-jordan-6-retro-carmine-2021-ct8529-106-release-date/" target="_blank">Sneaker News</a></small></p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top" src="https://sneakernews.com/wp-content/uploads/2021/01/nike-air-force-1-low-valentines-day-love-letter-DD3384-600.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Another Valentine’s Day Nike Air Force 1 Appears With A Love Letter</h5>
                            <p className="card-text">With the 2021 All-Star Game cancelled (despite the NBA mulling some last-minute options), the big occasion going down in the month of...</p>
                            <p className="card-text"><small class="text-muted">January 26, 2021 by <a href="https://sneakernews.com/2021/01/26/nike-air-force-1-low-valentines-day-love-letter-dd3384-600/" target="_blank">Sneaker News</a></small></p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="https://sneakernews.com/wp-content/uploads/2021/02/Reebok-Mott-Hall-Partnership.jpg?w=540&h=380&crop=1" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Reebok And The Kickback Pledge Support To Entrepreneurial Students In Brooklyn</h5>
                            <p className="card-text">Throughout its decades-spanning history, Reebok has leveraged its influence and resources as a global leader in sportswear to bring awareness and support...</p>
                            <p className="card-text"><small class="text-muted">Feburary 11, 2021 by <a href="https://sneakernews.com/2021/02/11/reebok-the-kickback-mott-hall-bridges-academy-partnership/" target="_blank">Sneaker News</a></small></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SneakerNews;