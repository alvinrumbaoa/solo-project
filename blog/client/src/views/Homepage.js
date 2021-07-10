import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Admin from '../components/Admin';
import axios from 'axios';

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
            {
                image.map((image, index) =>{

                    return(
                        <div keys={index} className ="portrait-container">
                            <img href={image.imgURL} alt="portrait"/>
                        </div>
                    )
                })    

            }
            <Admin/>
        </div>
    )
}


export default Homepage;