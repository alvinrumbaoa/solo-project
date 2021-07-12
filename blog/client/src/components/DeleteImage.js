import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteImage = (props) =>{
    const {id , afterDelete} = props;
    
    const deleteHandler = (e,id) =>{
        
        e.preventDefault();
        axios.delete("http://localhost:8000/api/images/" + id)
        
    .then((res) =>{
        console.log(res.data);
        afterDelete(id);
        navigate("/home");
    })
    .catch((err) => {
        console.log(err);
    });   
}
return(
    <div>
        <button className="red-btn"  onClick={(e) => deleteHandler(e,id )}>Walk the Plank {props.ImagesName}</button>
    </div>

)
}


export default DeleteImage;