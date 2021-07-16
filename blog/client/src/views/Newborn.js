import React, { useState} from 'react';
import axios from 'axios';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Newborn = (props) =>{


    return (
        <div className="registered-container">
               <Navbar/>
              <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
              <h1>Newborn</h1>
                </motion.div>


        </div>
    )
}


export default Newborn;