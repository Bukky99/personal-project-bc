import React from 'react';
import "./NavbarBottom.css"

const NavbarBottom = () => { 
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://github.com/Bukky99" rel="noreferrer" target="_blank"><i class="fa fa-github"></i></a>
                 <a href="https://www.linkedin.com/in/bukola-omojowo/" rel="noreferrer" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
            <div>
                <p className="name">By Bukola Omojowo © 2021</p>
            </div>
        </div>
    );
};

export default NavbarBottom;