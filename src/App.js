import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          相聚一堂
        </header>
        {Router}
      </div>
    );
  }
}

export default App;
