'use strict';

import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import Rest from './Rest';
import SubNav from './SubNav';
import Background from './Background';
import Footer from './Footer';
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
            <SubNav locale={this.locale} />   
            <Background locale={this.locale}/>  
            <div className="fixed-column">
                <div className="bg-wrapper">
                    <div className="bg bg-scroll"></div>
                    <div className="overlay"></div>
                    <div className="bg-title"><span></span></div>
                </div>
            </div>
            <Rest locale={this.locale} />
            <div className="height-emulator"></div>
            <Footer locale={this.locale} />           

        </div>
      </div>
    </div>
    );
  }
}

export default Main
