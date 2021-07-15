import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import Category from '../views/Category';

const Portfolio= (props) => {
    

    return (
    
           <div className="portfolio-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1>Portfolio</h1>     
                    <Category title="Wedding"/>
                    <Category title="Modeling"/>
                    <Category title="Newborn"/>
                    <Category title="Events"/>
               </motion.div>
          </div>
    )
}

export default Portfolio;
