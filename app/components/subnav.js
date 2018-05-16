/* @flow */

import React, {Component} from 'react';


class subNav extends Component {

    
  render() {
    return (
      <div className="nav-inner isDown">
          <div className="nav-decor nav-decor-tl"></div>
          <div className="nav-decor nav-decor-br"></div>
          <div className="overlay"></div>
          <nav>
              <ul>
                  <li className="subnav">
                      <a href="index.html" className="curpage">Home</a>
                      <ul>
                          <li>
                              <a href="index.html#sec1" className="custom-scroll-link" translate="ABOUT_ME"> { this.props.locale.ABOUT_ME } </a>
                          </li>
                          <li>
                              <a href="index.html#sec2" className="custom-scroll-link" translate="RESUME"> { this.props.locale.RESUME } </a>
                          </li>
                          <li>
                              <a href="index.html#sec3" className="custom-scroll-link" translate="SERVICES"> { this.props.locale.SERVICES } </a>
                          </li>
                          <li>
                              <a href="index.html#sec4" className="custom-scroll-link" translate="SKILLS"> { this.props.locale.SKILLS } </a>
                          </li>
                          <li>
                              <a href="index.html#sec5" className="custom-scroll-link" translate="CLIENTS"> { this.props.locale.CLIENTS } </a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </nav>
      </div>
    );
  }
}

export default subNav
