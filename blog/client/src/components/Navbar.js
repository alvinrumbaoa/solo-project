import React from 'react';
import {Link, navigate} from '@reach/router';
const Navbar = () =>{


    return(
        <div className="nav-container">
            <h3>Photography </h3>
            <div className="nav-links">
                    <button>Home</button>
                    <button>About</button>
                    <button>Portfolio</button>
                    <button>Blog</button>
                    <button>Contact</button>
            </div>
        </div>
    )
}


export default Navbar;