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
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1>Portfolio</h1>     
                    <div className="category-container">
                        <Link to="/portfolio/events">
                                <div className="cards">Events</div>
                        </Link>
                        <Link to="/portfolio/modeling">
                                <div className="cards">Modeling</div>
                        </Link>
                        <Link to="/portfolio/newborn">
                                <div className="cards">Newborn</div>
                        </Link>
                        <Link to="/portfolio/wedding">
                                    <div className="cards">Wedding</div>
                        </Link>
                    </div>
                </motion.div>
            </div>
    )
}

export default Portfolio;
