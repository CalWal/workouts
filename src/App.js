import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppRouter from "./components/AppRouter"

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppRouter />
      </div>
    );
  }
}

export default App;
