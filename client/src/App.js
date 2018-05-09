import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/DailyMindfuls'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Grapptitude</h1>
        </div>
        <DailyMindfuls />
      </div>
    );
  }
}

export default App;
