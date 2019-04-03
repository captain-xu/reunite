import React, { Component } from 'react';
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <img src={require('~/assets/images/icon.png')} className="header-icon" />
          <span className="header-title">相聚一堂</span>
        </div>
      </header>
    );
  }
}

export default Header;
