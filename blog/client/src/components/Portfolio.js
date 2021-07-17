import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import { Link } from '@reach/router';

const Portfolio= (props) => {
        
        
        
        
        
        
        
        
        return (
                <div className="portfolio-container">
                        <Navbar/>
                                <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <h1>Portfolio</h1>     
                                <div className="category-container">
                                        <Link to="/portfolio/events">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards">
                                                <h1>Events</h1>
                                                </div>
                                        </motion.div>
                                        </Link>
                                        <Link to="/portfolio/modeling">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards">
                                                <h1>Models</h1>
                                                </div>
                                        </motion.div>
                                
                                        </Link>
                                        <Link to="/portfolio/newborn">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards">
                                                <h1>Newborn</h1>
                                                </div>
                                        </motion.div>
                                        </Link>
                                        <Link to="/portfolio/wedding">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards">
                                                <h1>Wedding</h1>
                                                </div>
                                        </motion.div>
                                        </Link>
                                </div>
                                </motion.div>
                </div>
        )
}

export default Portfolio;
