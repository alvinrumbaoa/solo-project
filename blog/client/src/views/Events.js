import React, { useState} from 'react';
import axios from 'axios';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Events = (props) =>{


    return (
        <div className="categories-container">
               <Navbar/>
              <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
              <h1>Events</h1>
              </motion.div>


        </div>
    )
}


export default Events;