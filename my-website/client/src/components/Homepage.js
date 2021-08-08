import React from 'react';
import Avatar from 'avataaars';
const Homepage = (props) => {

    return(
        <div className= "container">
            <div className ="homepage-container">
                <h1 className="main-text">Hello, My Name is Alvin Rumbaoa</h1>
                
                <img src="/images/avataaars.svg" alt="avatar"/>
                </div>
                <div className ="homepage-container">
                <h2>Full Stack Web Developer</h2>
                <p>Full Stack Web Developer (Frontend and Backend) graduate offering a strong foundation in software engineering and programming principles </p>
                </div>
        </div>
    )
}


export default Homepage;