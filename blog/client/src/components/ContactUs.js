import React, { useState} from 'react';

import axios from 'axios';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {navigate} from '@reach/router';
import {animationOne, transition} from "../animations/Animation";
const ContactUs = (props) =>{
    const [errors, setErrors] = useState([]);
    const [name, setName]  = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message,setMessage] = useState("");
    const[theme,setTheme] = useState("");
    const themesArray = ["Wedding","Newborn","Birthdays","Events","Modeling"];
    const onSubmitHandler =  (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/customers", {
            name: name,
            email: email,
            phone: phone,
            message, message,
            theme: theme,
        })
            .then((response) =>{
                console.log(response.data); 
                navigate("/submitted")
            })
            .catch((err) => { 
                console.log(err);
            }) 
    }


    return (
        <div className="contact-container">
                    <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
    
                 <div className="contact-us-container">
                    <h1 className="big-text">Let's Make it Happen </h1>
                    <img src="/images/camera 3.png" alt ="camera" width="300/" height="300"/>
                    <form onSubmit={onSubmitHandler}>
                        <p>Name:</p> <input type="text" name="name"  onChange={(e) => setName(e.target.value)}/>
                        <p>Email:</p>  <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
                        <p>Phone:</p> <input type="text" name="phone" onChange={(e) => setEmail(e.target.value)}/>
                        <p>message:</p> <input type="textarea" name="phone"  onChange={(e) => setEmail(e.target.value)}/>
                        <p> theme:</p>
                        <select  name="crewPosition" value={ theme } onChange={(e)=> setTheme(e.target.value)}>
                                                <option value=""></option>
                                                {
                                                    themesArray.map((themes) =>(
                                                        <option value={themes} key={themes}>{themes}</option>
                                                    ))
                                                }                               
                        </select>  
                        <br/>
                        <input className="submit-btn" type="submit" value="Submit"/>
                    </form> 
                    <h4 className="sub-text">Follow Us:</h4>           
                    <div className="social-media">
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <img src="/images/facebook.png" alt="" height="100" width="100"/>
                        </motion.div>
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <img src="/images/pinterest.png" alt="" height="100" width="100"/>
                        </motion.div>                            
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <img src="/images/instagram.png" alt="" height="100" width="100"/>
                        </motion.div>
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <img src="/images/twitter (1).png" alt="" height="100" width="100"/>
                        </motion.div>
                    </div>
                    </div>           
            </motion.div>     

        </div>
    )
}


export default ContactUs;