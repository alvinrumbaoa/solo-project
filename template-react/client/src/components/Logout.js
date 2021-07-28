import React ,{useState, useEffect} from 'react';
import { Link } from '@reach/router';

const Logout =(props) =>{


return(
    <div className="container">
               <Link to="/"> {/*   redirect to registration  */}
                <button className="logout"  type="submit" value="Log out">Log out</button>
                </Link>
    </div>
    )
}



export default Logout;

