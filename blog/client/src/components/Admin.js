import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { navigate } from '@reach/router';

const Admin = (props) =>{
    const [imageUrl, setImgUrl] = useState("");
    const { id, afterDeleteHandler } = props;

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

    const deleteHandler = (e, id) => {
		e.preventDefault();

		axios.delete("http://localhost:8000/api/images/" + id)
			.then((res) => {
				console.log(res.data);
				afterDeleteHandler(id);  // unique things that the parent component wants to do now!
			})
			.catch((err) => {
				console.log(err);
			})
	}
    
    return(
        <div className="homepage-container">
            <form className ="form-container"onSubmit ={ handleSubmit }>  
                                    <label>Image Url: </label>
                                    <input type="text" name="imageURL" onChange ={(e) => setImgUrl(e.target.value)}/>  
                                    <button type="submit">Upload</button>
                </form>

                <button className="deleteBtn" onClick={ (e) => deleteHandler(e, id) }>Delete Image</button>
	)
        </div>
    )
}


export default Admin;