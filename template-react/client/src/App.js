import React from 'react';
import './App.css';
import Login from './components/Login';
import MainPage from './views/MainPage';
import RegisterUser from './components/RegisterUser';
import {Router} from '@reach/router';

function App() {


  return (
    <div className="App">
        <Router>
              <Login default/>
              <RegisterUser path="/signup"/>
              <MainPage path="/main"/>
        </Router>
          
    </div>
  );
}

export default App;
