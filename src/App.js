import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
