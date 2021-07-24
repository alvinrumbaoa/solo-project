import React from 'react';
import './App.css';
import Login from './components/Login';
import {Router} from '@reach/router';

function App() {






  return (
    <div className="App">
        <Router>
              <Login path="/lhome"/>
              <Regitration path="/signup"/>

        </Router>
          
    </div>
  );
}

export default App;
