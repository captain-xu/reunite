import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-left">
          <img src={require('~/assets/images/icon.png')} className="header-icon" />
          <span className="header-title">麻花网</span>
        </div>
        <div className="header-menu">
          <NavLink to={'/'} exact className="header-menu-item" activeClassName="selected">
            <span>首页</span>
          </NavLink>
          <NavLink to={'/create'} exact className="header-menu-item" activeClassName="selected">
            <span>创建</span>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
