/* @flow */

import React, {Component} from 'react';


class Header extends Component {
  
  state: State;
  
  constructor() {
    super();
    this.state = {
      language: 'en'
    };
  }

  _switchLang() {
    console.info(locale);
    this.state.language === 'en' ? this.setState({language: 'pt'}) : this.setState({language: 'en'});
    console.log(this.state.language);
  }
  
    
  render() {
    return (
      <header>                
          <div className="logo-holder"><a href="index.html"><h3>Leo Leão</h3></a><h3><a href="index.html" /></h3></div>
          <div className="nav-lang">
            <div onClick={this._switchLang.bind(this)}>
              <a><img src="img/brazilFlag.png" /></a>
              <a><img src="img/usFlag.png" /></a>
            </div> 
          </div>
          <div className="nav-button">
            <span className="nos" />
            <span className="ncs" />
            <span className="nbs" />
          </div>
      </header>
    );
  }
}

export default Header
