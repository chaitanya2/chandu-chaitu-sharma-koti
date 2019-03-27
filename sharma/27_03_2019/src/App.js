import React, { Component } from 'react';
import './App.css';
import Redxflow from './redxflow';
import MainForm from './MainForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redxflow />
        <MainForm />
      </div>
    );
  }
}

export default App;
