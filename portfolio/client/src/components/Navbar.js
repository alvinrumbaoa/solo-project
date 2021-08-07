import React from 'react';
import {Link} from '@reach/router';


const Navbar = () =>{



    return(
        <div className="bg-gray-100 inline-flex space-x-0 h-6  md:w-auto ">
                <h1>Alvin Rumbaoa</h1>
                <ul className ="py-1 inline-flex space-x-4">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>My Works</li>
                    <li>Contact Me</li>
                    <button className =" focus:ring-2  focus:ring-red-500 bg-red-500 hover:bg-red-700 ">Hire Me</button>
                    
                </ul>
    </div>
    )
}


export default Navbar;