import React, { useState} from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const About = (props) =>{


    return (
        <div className="about-container">
            <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <h1>About Us</h1>
            </motion.div>
        
           
        </div>
    )
}


export default About;