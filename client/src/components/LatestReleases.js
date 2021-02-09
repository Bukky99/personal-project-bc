import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LatestReleases.css"
import { Carousel } from 'react-responsive-carousel';


const LatestReleases = ({number}) => {

    const [card, setCard] =useState({
        cards: [
            {id: 1, title: 'card #1'},
            {id: 2, title: 'card #2'},
            {id: 3, title: 'card #3'},
            {id: 4, title: 'card #4'},
            {id: 5, title: 'card #5'}
          ]
    })

    return (
        <div>
           <div>
                <h2 className="latestReleasesTitle">Latest Releases</h2>
                <Carousel className="carousel">
                <div>
                   <img src="https://cms-cdn.thesolesupplier.co.uk/2020/10/Nike-Air-Force-1-Pine-Green_w900.jpg.webp"/>
                   <p className="legend">Nike Air Force 1 Low Pine Green</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2017/05/Comme-des-Garcons-Play-x-Converse-Chuck-Taylor-All-Star-70-Hi-Black_w900.jpg.webp" />
                    <p className="legend">Comme des Garcons Play x Converse</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2020/11/jordan-1-mid-all-star-black-dd1649-001_w720.jpg.webp" />
                    <p className="legend">Jordan 1 Mid All Star Carbon Fiber</p>
                </div>
                <div>
                   <img src="https://cms-cdn.thesolesupplier.co.uk/2014/05/jordan-6-carmine_w720.jpg.webp"/>
                   <p className="legend">Nike Air Jordan 6 Carmine</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2021/02/yeezy-500-high-mist-slate_w720.jpg.webp" />
                    <p className="legend">Yeezy 500 High Mist Slate</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2020/09/jordan-4-starfish_w720.jpg.webp" />
                    <p className="legend">Jordan 4 Starfish</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2020/11/jordan-1-zoom-comfort-pink-glaze-ct0979-601_w720.jpg.webp" />
                    <p className="legend">Jordan 1 Zoom Comfort Pink Glaze</p>
                </div>
                <div>
                   <img src="https://cms-cdn.thesolesupplier.co.uk/2021/01/jordan-12-low-se-super-bowl_w720.jpg.webp"/>
                   <p className="legend">Jordan 12 Low SE Super Bowl</p>
                </div>
                <div>
                    <img src="https://cms-cdn.thesolesupplier.co.uk/2020/12/nike-dunk-high-prm-dark-russet_w720.jpg.webp" />
                    <p className="legend">Nike Dunk High PRM Dark Ruseet (Dark Curry)</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend"></p>
                </div>

                </Carousel>
                
            </div> 

            
            
            
        </div>
    );
};

export default LatestReleases;