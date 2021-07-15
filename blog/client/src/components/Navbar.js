import React from 'react';
import {Link, navigate } from '@reach/router';
import {AnimatePresence, motion } from 'framer-motion';
const Navbar = () =>{
   
    return(
        <div className="nav-container">
            <AnimatePresence>
                <Link to="/home" className="link">
                <h1 className="brand">Maica Rumbaoa©</h1>
                </Link>
                        <div className="nav-links">
                            <Link to="/home" className="link">
                                    <img src="/images/home.png" alt="home" width="50" height="50"/>
                                    <p>Home</p> 
                            </Link>
                            <Link to="/about" className="link">
                            <img src="/images/info.png" alt="about" width="50" height="50"/>
                                    <p>About</p> 
                            </Link>
                            <Link to="/portfolio" className="link">
                            <img src="/images/camera.png" alt="works" width="50" height="50"/>
                                    <p>Works</p> 
                            </Link>
                            <Link to="/blog" className="link">
                            <img src="/images/profile.png" alt="blog" width="50" height="50"/>
                                    <p>Blogs</p> 
                            </Link>
                            <Link to="/contactus" className="link">
                            <img src="/images/contact-us.png" alt="contactus" width="50" height="50"/>
                                    <p>Clients</p> 
                            </Link>
                    </div>
            </AnimatePresence>
        </div>
    )
}


export default Navbar;