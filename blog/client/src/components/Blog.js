import React, { useState, useEffect } from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import axios from 'axios';
import {Link} from '@reach/router'
const Blog = (props) =>{
    const [blog, setBlog] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/blogs")
            .then(res =>{
                console.log(res.data);
                setBlog(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })

    }, [])


    return (
        <div className="blog-container">
        <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                <h1>Blogs</h1>
                {
                    blog.map((post, index) => (
                            <div className="blog-cards" key={index} >
                            <Link to="/blogs/">
                                    <img src={post.coverArt} alt="cover-Art" /> 
                                    <h2 >{post.title}</h2>
                                    <h4>{post.description}</h4>
                            </Link>
                            </div>
                    ))
                }
            </motion.div>
            
        </div>
    )
}


export default Blog;