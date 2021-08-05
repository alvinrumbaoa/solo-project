import React from 'react';
import Avatar from 'avataaars';
const Home = () =>{



    return(
        <div>
            <h1>Im Alvin Rumbaoa</h1>
            <h3>I'm a Full Stack Developer</h3>
            <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortWaved'
                accessoriesType='Blank'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='BlazerSweater'
                eyeType='Happy'
                eyebrowType='Default'
                mouthType='Smile'
                skinColor='Brown'
                />
            <div>
                <h2>Tech used</h2>
                <p>Fundamentals</p>
                <p>Front End</p>
                <p>Back End</p>
            </div>
            <div></div>
        </div>
    )
}


export default Home;