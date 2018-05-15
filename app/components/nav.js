/* @flow */

import React, {Component} from 'react';


class Nav extends Component {

    
  render() {
    {this.props}
    return (
      <div className="nav-inner isDown">
        <div className="nav-decor nav-decor-tl" />
        <div className="nav-decor nav-decor-br" />
        <div className="overlay" />
        <nav>
          <ul>
            <li className="subnav">
              <a href="index.html" className="curpage">Home</a>
              {/* General menu scroll navigation */}
              <ul>
                <li>
                  <a href="index.html#sec1" className="custom-scroll-link" translate="ABOUT_ME"> {this.props.locale.ABOUT_ME} </a>
                </li>
                <li>
                  <a href="index.html#sec2" className="custom-scroll-link" translate="RESUME" />
                </li>
                <li>
                  <a href="index.html#sec3" className="custom-scroll-link" translate="SERVICES" />
                </li>
                <li>
                  <a href="index.html#sec4" className="custom-scroll-link" translate="SKILLS" />
                </li>
                <li>
                  <a href="index.html#sec5" className="custom-scroll-link" translate="CLIENTS" />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav
