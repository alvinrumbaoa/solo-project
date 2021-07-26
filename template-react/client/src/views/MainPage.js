import React from 'react';


const MainPage = ( )=>{

    const[darkMode, setDarkMode] = ("container");


    const darkModeToggle = () =>{  
        darkMode === "dark-mode" ? setDarkMode("dark-mode") : setDarkMode("container");
    }

    return(
        <div className={darkMode} >
        
        <button onClick={darkModeToggle}>Dark Mode</button>


        </div>
    )
}

export default MainPage;

