import React from 'react';
import './App.css';
import Login from './components/Login';
import MainPage from './views/MainPage';
import RegisterUser from './components/RegisterUser';
import {Router} from '@reach/router';
import Confirmation from './views/Confirmation';

function App() {


  return (
    <div className="App">
        <Router>
              <Login path="/"/>
              <RegisterUser path="/signup"/>
              <MainPage path="/main"/>
              <Confirmation path="/success"/>
        </Router>
          
    </div>
  );
}

export default App;
