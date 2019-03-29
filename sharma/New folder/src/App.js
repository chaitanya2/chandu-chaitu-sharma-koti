import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../src/Menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
