import React, { useState} from 'react';
import axios from 'axios';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Wedding = (props) =>{


    return (
        <div className="registered-container">
               <Navbar/>
              <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
              <h1>Wedding</h1>
                </motion.div>


        </div>
    )
}


export default Wedding;