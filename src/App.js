import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Router from './router'
import {Header} from '~/components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          {Router}
        </div>
      </div>
    );
  }
}

export default App;
