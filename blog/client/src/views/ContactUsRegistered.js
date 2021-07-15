import React, { useState} from 'react';
import axios from 'axios';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const ContactUsRegistered = (props) =>{


    return (
        <div className="registered-container">
               <Navbar/>
              <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
              <h1>Thank you for registering</h1>
                </motion.div>


        </div>
    )
}


export default ContactUsRegistered;