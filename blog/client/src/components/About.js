import React, { useState} from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {Link, navigate } from '@reach/router';
import {animationOne, animationTwo, transition} from "../animations/Animation";


const About = (props) =>{


    return (
        <div className="about-container">
            <Navbar/>

            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div className="parallax"></div>
            <div className="glassmorp">
                    <img className="aboutmepic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/144390730_10226200545547143_7644850727001613204_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZIimvcULwloAX-kCJka&_nc_ht=scontent-sjc3-1.xx&oh=abc053fa605f8d4c78d65d16e9552c5d&oe=60F21934" alt="about me"/>
                    <p className="big-text">My Name is Maica Rumbaoa. </p>
                <div className="details">
                      <span className="paragraph">"I am a photographer. Me and my husband bring this idea and talent to bring a great look at your memories that will look up for many years. We serviced Orange County are but also flexible to any county around SoCal. We do photgraphy for Newborn, Maternity, Weddings and other. If you are ready to work with us. <Link to="/contactus">Let's get started" </Link></span>
                </div>

                 <div className="parallax">

                 </div>
            </div>
           
            <div className="glassmorp">
                 <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
                    <img className="aboutmepic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/144390730_10226200545547143_7644850727001613204_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZIimvcULwloAX-kCJka&_nc_ht=scontent-sjc3-1.xx&oh=abc053fa605f8d4c78d65d16e9552c5d&oe=60F21934" alt="about me"/>
                    <p className="big-text">My Name is Maica Rumbaoa. </p>
                <div className="details">
                      <span className="paragraph">"I am a photographer. Me and my husband bring this idea and talent to bring a great look at your memories that will look up for many years. We serviced Orange County are but also flexible to any county around SoCal. We do photgraphy for Newborn, Maternity, Weddings and other. If you are ready to work with us. <Link to="/contactus">Let's get started" </Link></span>
                </div>

                 <div className="parallax">
                    
                 </div>
                 </motion.div>
            </div>
      
            <div className="glassmorp">
                    <img className="aboutmepic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/144390730_10226200545547143_7644850727001613204_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZIimvcULwloAX-kCJka&_nc_ht=scontent-sjc3-1.xx&oh=abc053fa605f8d4c78d65d16e9552c5d&oe=60F21934" alt="about me"/>
                    <p className="big-text">My Name is Maica Rumbaoa. </p>
                <div className="details">
                      <span className="paragraph">"I am a photographer. Me and my husband bring this idea and talent to bring a great look at your memories that will look up for many years. We serviced Orange County are but also flexible to any county around SoCal. We do photgraphy for Newborn, Maternity, Weddings and other. If you are ready to work with us. <Link to="/contactus">Let's get started" </Link></span>
                </div>

                 <div className="parallax">
                    
                 </div>
            </div>
            </motion.div>

        </div>
    )
}


export default About;