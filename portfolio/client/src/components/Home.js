import React from 'react';
import Avatar from 'avataaars';
const Home = () =>{



    return(
        <div className="bg-gray-500 p-0 mx-auto ">
                <div className="bg-gray-100 p-24 w-120 ">
                    <h1 className="text-left text-xl font-bold font-Poppins">Im Alvin Rumbaoa</h1>
                        <h3 className="isolate md:isolation-auto">I'm a Full Stack Developer</h3>
                        <button>CV</button>
                        <div className="object-right">
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
                        </div>
                            
            </div>
        
            <div>
                <h2>Tech used</h2>
                <p>Fundamentals</p>
                <p>Front End</p>
                <p>Back End</p>
            </div>
            <div>
                parralax 1
            </div>
            <div>
                parralax 2
            </div>
        </div>
    )
}


export default Home;