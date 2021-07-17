import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Modeling = (props) =>{
    const [src] = useState(["/images/event1.jpg","/images/event2.jpg","/images/event3.jpg","/images/event4.jpg","/images/event5.jpg","/images/event6.jpg","/images/event7.jpg","/images/event8.jpg","/images/event9.jpg"]);

    return (
        <div className="categories-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1 className="big-text">Modeling</h1>
                    <div className="grid-images">
                    {

                        src.map((image, idx)=>(
                            <img className="square-image"src={image} alt="event images" width="350" height="350"/>
                        ))
                    }
                    </div>
                </motion.div>
        </div>
    )
}


export default Modeling;