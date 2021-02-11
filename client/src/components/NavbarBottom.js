import React from 'react';
import {Link} from "react-router-dom"
import "./NavbarBottom.css"

const NavbarBottom = () => {
    return (
        <div className="footer">
            <div className="icons">
                <p className="contact">Contact me at:</p>
					<a href="https://github.com/Bukky99"><i class="fa fa-github"></i></a>
					<a href="https://www.linkedin.com/in/bukola-omojowo/"><i class="fa fa-linkedin"></i></a>
			</div>

            <div>
                <p class="name">By Bukola Omojowo © 2021</p>
            </div>
              
        </div>
    );
};

export default NavbarBottom;