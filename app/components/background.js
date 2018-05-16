/* @flow */

import React, {Component} from 'react';


class Background extends Component {

    
  render() {
    return (
      <div className="hero-wrapper">
          <div className="section-parallax" data-top-bottom="transform: translateY(450px);" data-bottom-top="transform: translateY(-450px);">
              <div className="media-container">
                  <div className="slideshow-wrap owl-carousel">
                      <div className="item full-height">
                          <div className="bg" style={ { backgroundImage: 'url(img/bg/backgroundNY.jpg)' } }></div>
                      </div>
                      <div className="item full-height">
                          <div className="bg" style={ { backgroundImage: 'url(img/bg/NYcars.jpg)' } } ></div>
                      </div>
                      <div className="item full-height">
                          <div className="bg" style={ { backgroundImage: 'url(img/bg/pitt.jpg)' } } ></div>
                      </div>
                  </div>
                  <div className="overlay"></div>
              </div>
              <div className="hero-title">
                  <div className="hero-wrap" data-top-bottom="transform: translateY(-150px);" data-bottom-top="transform: translateY(150px);">
                      <h3 translate="WELCOME_MESSAGE">{ this.props.locale.WELCOME_MESSAGE }</h3>
                      <div className="clearfix"></div>
                      <h4><a href="#sec1" className="custom-scroll-link" translate="START_MESSAGE">{ this.props.locale.START_MESSAGE }</a></h4>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

export default Background
