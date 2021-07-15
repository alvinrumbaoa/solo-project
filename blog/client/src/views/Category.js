import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import DeleteImage from '../components/DeleteImage';
import Admin from '../components/Admin';

const Category = (props) => {
    const [title, setTitle] = useState(["Wedding","Newborn","Birthdays","Events","Modeling","Food Photography"])

    return (
        <div>
                {
                    title.map((name, index) =>{
                        <div className="categories" key={index}>
                                {props.title}
                        </div>       
                    })
                }
        </div>
    )
}

export default Category;