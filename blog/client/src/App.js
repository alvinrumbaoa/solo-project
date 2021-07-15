import React from 'react';
import Homepage from "./views/Homepage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Blog from "./components/Blog";
import ContactUsRegistered from "./views/ContactUsRegistered";
import ImageViewer from "./views/ImageViewer";
import Portfolio from "./components/Portfolio";
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
            <Portfolio path="/portfolio"/>
            <About path="/about"/>
            <Blog path="/blog"/>
            <ImageViewer path="/images/:id"/>
            <ContactUsRegistered path="/submitted"/>
        </Router>
      </motion.div>
    </div>

  );
}

export default App;
