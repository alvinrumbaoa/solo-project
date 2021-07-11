import React, { useState} from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
const ContactUs = (props) =>{


    return (
        <div className="contact-container">
                    <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <h1>Contact Us</h1>
            </motion.div>
             

        </div>
    )
}


export default ContactUs;