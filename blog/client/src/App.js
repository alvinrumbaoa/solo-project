import React from 'react';
import Homepage from "./views/Homepage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Blog from "./components/Blog";
import { Router } from '@reach/router';
import {motion } from 'framer-motion';
import {animationOne, transition} from "./animations/Animation";
import './App.css';

function App() {
  return (
    
    <div className="App">
      <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
      <Router>
           <Homepage default/>
           <Homepage path="/home"/>
           <ContactUs path="/contactus"/>
           <About path="/about"/>
           <Blog path="/blog"/>
      </Router>
      </motion.div>
    </div>

  );
}

export default App;
