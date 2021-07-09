import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
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
                image.maps((img, index) =>{

                    return(
                        <div keys={index} className ="portrait-container">
                            <img src={img.imgURL} alt="portraits"/>
                        </div>
                    )
                })    

            }
        </div>
    )
}


export default Homepage;