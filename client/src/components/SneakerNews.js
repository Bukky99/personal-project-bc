import React from 'react';
import {Card} from "react-bootstrap"
import "./SneakerNews.css"

const SneakerNews = () => {
    return (
        <div>
            <h2 className="sneakerNewsTitle">Sneaker News</h2>
            
            <div class="card-columns">
                <div class="card">
                    <img class="card-img-top" src="https://sneakernews.com/wp-content/uploads/2021/01/jordan-6-carmine-official-images-ct8529-106-5.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">The Air Jordan 6 “Carmine” Brings Back Nike Air For First Time Since 1991</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">January 10, 2021 by <a href="https://sneakernews.com/2021/01/26/nike-air-force-1-low-valentines-day-love-letter-dd3384-600/" target="_blank">Sneaker News</a></small></p>
                    </div>
                </div>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">
                        <small class="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://sneakernews.com/wp-content/uploads/2021/01/nike-air-force-1-low-valentines-day-love-letter-DD3384-600.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Another Valentine’s Day Nike Air Force 1 Appears With A Love Letter</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">January 26, 2021 by <a href="https://sneakernews.com/2021/01/26/nike-air-force-1-low-valentines-day-love-letter-dd3384-600/" target="_blank">Sneaker News</a></small></p>
                    </div>
                </div>
                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                    <footer class="blockquote-footer">
                        <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img" src="https://sneakernews.com/wp-content/uploads/2021/01/jordan-1-trophy-room-release-date-1.jpg" alt="Card image"/>
                </div>
                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                    <p><b>RAFFLE LIVE: Trophy Room x Air Jordan 1 Retro High OG</b></p>
                    <p>Click here to enter:</p>
                    <footer class="blockquote-footer">
                        <small class="text-muted">
                        January 28, 2021 <cite title="Source Title">More Info at: <a href="https://sneakernews.com/2021/01/26/nike-air-force-1-low-valentines-day-love-letter-dd3384-600/" target="_blank">Sneaker News</a> </cite>
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SneakerNews;