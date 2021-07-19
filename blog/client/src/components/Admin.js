import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import { Link, navigate} from '@reach/router';
const Admin = (props) =>{
        const [imageUrl, setImgUrl] = useState("");
        

        const handleSubmit =(e) =>{
                e.preventDefault();
                        axios.post("http://localhost:8000/api/images", {
                        imgURL: imageUrl,
                })
                .then((res) =>{
                        console.log(res.data);    
                        navigate("/home")
                })
                .catch(err => { 
                        console.log(err.response);
                })     
        }
        

        return(
        <div className="homepage-container">
                <div className="portfolio-container">
                        <Navbar/>
                                <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                        <h1 className="big-text">Admin</h1>     
                                        <div className="category-container">           
                                                <div className="cards-admin" >
                                                                <h2>Blog</h2>
                                                                <button>Add Blog</button>
                                                                <button>Delete Blog</button>
                                                                <button>Edit Blog</button>
                                                </div>
                                                <div className="cards-admin" >
                                                                <h2>View Customer</h2>
                                                                <button>View Customer</button>
                                                                <button>DeleteCustomer</button>
                                                </div>                                    
                                                <div className="cards-admin">
                                                                <h2>Upload Images</h2>
                                                                <form className ="form-container"onSubmit ={ handleSubmit }>  
                                                                <label>Image Url: </label>
                                                                <input type="text" name="imageURL" onChange ={(e) => setImgUrl(e.target.value)}/>  
                                                                <button type="submit">Upload</button>
                                                                </form>
                                                                <button>DeleteImage</button>
                                                                </div>
                                        </div>
                                </motion.div>
                </div>
        </div>
        )
}

export default Admin;