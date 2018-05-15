'use strict';

import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import localeEn from '../translations/locale-en.json';
import localePt from '../translations/locale-pt.json';

class Main extends Component {
  
  state: State;
  
  constructor() {
    super();
    this.state = {
      language: 'en'
    };
    this.locale = localeEn;
  }

  _switchLang() {
    if (this.state.language === 'en') {
      this.setState({language: 'pt'});
      this.locale = localePt;
    } else {
      this.setState({language: 'en'});
      this.locale = localeEn;
    }
  }

  // flag(props) {
  //   return props.lang === 'en' ? (<a><img src="img/brazilFlag.png" /></a>): (<a><img src="img/usFlag.png" /></a>);   
  // }
    
  render() {
    return (
      <div id="main">    
        {/* <Header/> */}
        <header>                
            <div className="logo-holder"><a href="index.html"><h3>Leo Leão</h3></a><h3><a href="index.html" /></h3></div>
            <div className="nav-lang">
              <div onClick={this._switchLang.bind(this)}>
                {this.state.language === 'en' ? (<a><img src="img/usFlag.png" /></a>) : (<a><img src="img/brazilFlag.png" /></a>)}                
              </div> 
            </div>
            <div className="nav-button">
              <span className="nos" />
              <span className="ncs" />
              <span className="nbs" />
            </div>
        </header>
        <div id="wrapper">
          <div className="content-holder scale-bg2">
            {/* <Nav/> */}
            <Nav locale={this.locale} />  

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
                        <a href="index.html#sec1" className="custom-scroll-link" translate="ABOUT_ME"> {this.locale.ABOUT_ME} </a>
                      </li>
                      <li>
                        <a href="index.html#sec2" className="custom-scroll-link" translate="RESUME"> {this.locale.RESUME } </a>
                      </li>
                      <li>
                        <a href="index.html#sec3" className="custom-scroll-link" translate="SERVICES"> {this.locale.SERVICES } </a>
                      </li>
                      <li>
                        <a href="index.html#sec4" className="custom-scroll-link" translate="SKILLS"> {this.locale.SKILLS } </a>
                      </li>
                      <li>
                        <a href="index.html#sec5" className="custom-scroll-link" translate="CLIENTS"> {this.locale.CLIENTS } </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Main
