import React from "react";
import Navbar from './components/Navbar';
import {Router} from '@reach/router';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Router>
              <Home path="/"/>
        </Router>
    </div>
  );
}

export default App;
