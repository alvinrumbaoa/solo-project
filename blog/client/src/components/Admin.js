import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Admin = () =>{
    const [imageUrl, setImgUrl] = useState("");


 const handleSubmit =(e) =>{
        e.preventDefault();
            axios.post("http://localhost:8000/api/images", {
                imgURL: imageUrl,
        })
            .then((res) =>{
                console.log(res.data);    
            })
            .catch(err => { 
                console.log(err.response);
               
            })  
    }
    return(
        <div className="homepage-container">
            <form className ="form-container"onSubmit ={ handleSubmit }>  
                                    <label>Image Url: </label>
                                    <input type="text" name="imageURL" onChange ={(e) => setImgUrl(e.target.value)}/>  
                                    <button type="button">Upload</button>
                </form>
        </div>
    )
}


export default Admin;