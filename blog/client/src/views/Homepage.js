import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import DeleteImage from '../components/DeleteImage';
import Admin from '../components/Admin';
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


   const afterDelete =(deletedID) =>{
    let  filterStateArray = image.filter((image) =>{

        return image._id !== deletedID;
    });
    setImage(filterStateArray.sort());
    };


    return(
            <div className="homepage-container">
                 <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                 
             
                        
                {
                    image.map((image, index) =>(
               
                                        <img className="homepage-grid-image" src={image.imgURL}  key={index}  alt="portrait" width="500" height="500"/>
                        ))   
                }
                   </motion.div>
            </div>
            
    )
}


export default Homepage;