import React, { useState} from 'react';

const ViewOneBlog = (props) =>{


    return (
        <div className="view-blog-container">
                    <Navbar/>
                  <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                
                </motion.div>

        </div>
    )
}


export default ViewOneBlog;