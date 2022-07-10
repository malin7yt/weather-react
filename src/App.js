import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import { Puff } from  'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
WEATHER REACT APP
        </h1>
        <Puff
    height="200"
    width="200"
    color='orange'
    ariaLabel='loading'
  />
        <h4>In progress...</h4>
      </header>
    </div>
  );
}

export default App;
