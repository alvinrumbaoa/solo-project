import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";

const Homepage = () =>{
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/images")
            .then((res) =>{
                console.log(res.data);
                setImage(res.data);
            })
            .catch((err) =>{
                console.log(err);
            })

   }, [ ]);

    return(
            <div className="homepage-container">
                 <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                 
             
                        
                {
                    image.map((image, index) =>{
                        return(
                                <img src={image.imgURL}  key={index}  alt="portrait" width="200" height="200"/>
                        )
                    })   
                }
                   </motion.div>
            </div>
     
    )
}


export default Homepage;