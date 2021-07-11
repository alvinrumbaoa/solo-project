import React, { useState} from 'react';

const ContactUsRegistered = (props) =>{


    return (
        <div className="registered-container">
               <Navbar/>
              <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
              <h1>Thank you for registering</h1>
                </motion.div>


        </div>
    )
}


export default ContactUsRegistered;