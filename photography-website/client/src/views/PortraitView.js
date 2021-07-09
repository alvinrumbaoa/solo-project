import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const PortraitView = (props) => {
    const [image, setImage] = useState([]);
    
    useEffect(() =>{
            axios.get("http://localhost:8000/api/images")
                .then((res) =>{
                    console.log(res.data)
                    setImage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
                                             
    
    }, [ ]) 
    
    
    return (
        <div className="portrait-container">
            <Navbar/>
            {
                image.map((url, index) =>{
                    

                    return(
                        <div key={index}>
                                <img src={url} alt="images"/>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default PortraitView;