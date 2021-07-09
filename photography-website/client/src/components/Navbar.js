import React, {useState, useEffect} from 'react';
import axios from 'axios'

const  Navbar = (props) =>{

    return(
        <div className="navbar-container">
            <h1>The Rumbaoas</h1>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            
            <p>Facebook icon</p>
            <p>iG icons</p>
            <p>Twitter icons</p>
        </div>
    
    
    )

}


export default Navbar;