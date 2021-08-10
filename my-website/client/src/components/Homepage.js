import React from 'react';
import Skills from './Skills';
import Testimonials from './Testimonials';


const Homepage = (props) => {

    return(
        <div className= "container">
            <div className ="homepage-container">
                    <div className ="homepage">
                        <h1 className="main-text">Hello, My Name is  <span className="my-name">Alvin Rumbaoa</span></h1>
                        <h2>Full Stack Web Developer</h2>
                        <p>Full Stack Web Developer (Frontend and Backend) graduate offering a strong foundation in software engineering and programming principles </p>
                    </div>   
                    <div className ="homepage-image">
                                <img src="/images/avataaars.svg" alt="avatar"/>
                    </div>
            </div>          
            <Skills/>
            <Testimonials/>
        </div>
    )
}


export default Homepage;