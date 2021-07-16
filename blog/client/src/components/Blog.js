import React, { useState, iseEffect } from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
const Blog = (props) =>{
    const [blog, setBlog] = useState([]);


    // title: {type: String},
    // description: {type: String},
    // content: {type: String},
    // // coverArt: {type: String}
    return (
        <div className="blog-container">
        <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                <h1>Blogs</h1>
            
            </motion.div>
            
        </div>
    )
}


export default Blog;