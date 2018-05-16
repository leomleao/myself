/* @flow */

import React, {Component} from 'react';


class Rest extends Component {

  componentWillUpdate(props) {
    console.info(props);   
  }

    
  render() {
    return (
      <div className="wrapper-inner home-wrap">
          <div className="scroll-nav-holder">
              <nav className="scroll-nav">
                  <ul>
                      <li><a className="scroll-link fbgs" href="#sec1" data-bgscr="img/aboutme.jpg" data-bgtex="ABOUT_ME"><span translate="ABOUT_ME" id="ABOUT_ME">{ this.props.locale.ABOUT_ME }</span></a></li>
                      <li><a className="scroll-link" href="#sec2" data-bgscr="img/me.jpg" data-bgtex="RESUME"><span translate="RESUME" id="RESUME">{ this.props.locale.RESUME }</span></a></li>
                      <li><a className="scroll-link" href="#sec3" data-bgscr="img/nybuilding.jpg" data-bgtex="SERVICES"><span translate="SERVICES"  id="SERVICES">{ this.props.locale.SERVICES }</span></a></li>
                      <li><a className="scroll-link" href="#sec4" data-bgscr="img/wsstreet.jpg" data-bgtex="SKILLS"><span translate="SKILLS" id="SKILLS"> { this.props.locale.SKILLS }</span></a></li>
                      <li><a className="scroll-link" href="#sec5" data-bgscr="img/owls.jpg" data-bgtex="CLIENTS"><span translate="CLIENTS"  id="CLIENTS">{ this.props.locale.CLIENTS }</span></a></li>
                  </ul>
              </nav>
          </div>
          <div className="content">
              <section id="sec1">
                  <div className="container">
                      <div className="section-title">
                          <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="ABOUT_ME"> { this.props.locale.ABOUT_ME }</span></div>
                          <h3 translate="WHO_I_AM"> { this.props.locale.WHO_I_AM }</h3>
                          <h2 translate="ABOUT_ME"> { this.props.locale.ABOUT_ME }</h2>
                          <div className="st-separator"></div>
                      </div>
                      <div className="row">
                          <div className="col-md-5">
                              <div className="about-iamge">
                                  <img src="img/mySelf.jpg" alt="" className="respimg"></img>
                              </div>
                          </div>
                          <div className="col-md-7 align-text">
                              <h4 className="text-subtitle">Leonardo M. Leão</h4>
                              <div>
                              <h3 className="text-title"><span translate="JOB"> { this.props.locale.JOB }</span><span className="color" translate="JOB_FUNCTION"> { this.props.locale.JOB_FUNCTION }</span><span translate="JOB_LOCATION"> { this.props.locale.JOB_LOCATION }</span></h3>
                              </div>
                              <div className="clearfix"></div>
                              <p translate="MY_HISTORY"> { this.props.locale.MY_HISTORY }</p>
                              <p translate="WHAT_I_WANT"> { this.props.locale.WHAT_I_WANT }</p>
                              <p className="bold" translate="WHAT_I_THINK"> { this.props.locale.WHAT_I_THINK }</p>
                              <a href="portfolio.html" className="btn hide-icon"><i className="fa fa-angle-right"></i><span translate="PORTIFOLIO_BUTTON"> { this.props.locale.PORTIFOLIO_BUTTON }</span></a> 
                          </div>
                      </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <div className="facts-title">
                          <h3 translate="FACTS"> { this.props.locale.FACTS }</h3>
                      </div>
                      <div className="inline-facts-holder">
                          <div className="inline-facts">
                              <div className="milestone-counter">
                                  <div className="stats animaper">
                                      <div className="num coffe" data-content="" data-num="">0</div>
                                  </div>
                              </div>
                              <h6 translate="CUPS_OF_COFFE"> { this.props.locale.CUPS_OF_COFFE }</h6>
                              <h6>
                                <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/yM2zt6U9F">
                                  <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"></img>
                                    <span style={{ marginLeft: '5px' }}>{ this.props.locale.BMC }</span>
                                </a>
                              </h6>
                          </div>
                          <div className="inline-facts">
                              <div className="milestone-counter">
                                  <div className="stats animaper">
                                      <div className="num nightsAwake" data-content="" data-num="">0</div>
                                  </div>
                              </div>
                              <h6 translate="NIGHTS_AWAKE"> { this.props.locale.NIGHTS_AWAKE }</h6>
                              <h6 className="facts-icon">
                                  <img height="45" width="45" src="img/icons/night.svg"></img>
                              </h6>
                          </div>
                          <div className="inline-facts">
                              <div className="milestone-counter">
                                  <div  className="stats animaper">                                                   
                                  <div id="timeLearning" className="num timeLearning" data-content="" data-num="">0</div>                                                                                        
                                  </div>
                              </div>                                            
                              <h6 translate="TIME_STUDYING"> { this.props.locale.TIME_STUDYING }</h6>
                              <h6 className="facts-icon">
                                  <img height="60" width="60" src="img/icons/react.svg" ></img>
                              </h6>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="section-separator"></div>
              <section  id="sec2">
                  <div className="container">
                      <div className="section-title">
                          <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="RESUME"> { this.props.locale.RESUME }</span></div>
                          <h3 translate="MY_BIO"> { this.props.locale.MY_BIO }</h3>
                          <h2 translate="RESUME"> { this.props.locale.RESUME }</h2>
                          <div className="st-separator"></div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="accordion" data-name="1">
                          <div className="accordion-title transition">
                              <h5><a href="#"> <i className="fa fa-briefcase"></i> 2015-2016 <span translate="BIO_JOB_1"> { this.props.locale.BIO_JOB_1 } </span></a></h5>
                          </div>
                          <div className="accordion-inner">
                              <h4 translate="BIO_JOB_1_FUNCTION"> { this.props.locale.BIO_JOB_1_FUNCTION }</h4>
                              <ul>
                                  <li translate="BIO_JOB_1_SCOPE_1"> { this.props.locale.BIO_JOB_1_SCOPE_1 }</li>
                                  <li translate="BIO_JOB_1_FUNCTION"> { this.props.locale.BIO_JOB_1_FUNCTION }</li>
                                  <li translate="BIO_JOB_1_FUNCTION"> { this.props.locale.BIO_JOB_1_FUNCTION }</li>
                              </ul>
                              <div>
                                <p translate="BIO_JOB_1_RESP"> { this.props.locale.BIO_JOB_1_RESP } </p>
                                <p translate="BIO_JOB_1_RESP_LIST_1"> { this.props.locale.BIO_JOB_1_RESP_LIST_1 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_2"> { this.props.locale.BIO_JOB_1_RESP_LIST_2 }</p>                                           
                                <p translate="BIO_JOB_1_RESP_LIST_3"> { this.props.locale.BIO_JOB_1_RESP_LIST_3 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_4"> { this.props.locale.BIO_JOB_1_RESP_LIST_4 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_5"> { this.props.locale.BIO_JOB_1_RESP_LIST_5 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_6"> { this.props.locale.BIO_JOB_1_RESP_LIST_6 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_7"> { this.props.locale.BIO_JOB_1_RESP_LIST_7 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_8"> { this.props.locale.BIO_JOB_1_RESP_LIST_8 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_9"> { this.props.locale.BIO_JOB_1_RESP_LIST_9 }</p>
                                <p translate="BIO_JOB_1_RESP_LIST_10"> { this.props.locale.BIO_JOB_1_RESP_LIST_10 }</p>
                              </div>
                          </div>                                        
                          <div className="accordion-title transition">
                              <h5><a href="#"> <i className="fa fa-pencil"></i> 2014-2016 <span translate="BIO_STUDIES"> { this.props.locale.BIO_STUDIES }</span></a></h5>
                          </div>
                          <div className="accordion-inner">
                              <h4 translate="BIO_STUDIES_FUNCTION"> { this.props.locale.BIO_STUDIES_FUNCTION }</h4>
                              <ul>
                                  <li><img height="30" width="30" src="img/icons/photoshop.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/illustrator.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/html5.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/css3.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/javascript.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/jquery.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/php.svg" ></img></li>
                                  <li><img height="30" width="30" src="img/icons/ubuntu.svg" ></img></li>
                              </ul>
                              <p  translate="BIO_STUDIES_METHOD"> { this.props.locale.BIO_STUDIES_METHOD }</p>
                          </div>
                          <div className="accordion-title transition">
                              <h5><a href="#"> <i className="fa fa-graduation-cap"></i> 2014-2017 <span translate="BIO_STUDIES_COLLEGE"> { this.props.locale.BIO_STUDIES_COLLEGE }</span></a></h5>
                          </div>
                          <div className="accordion-inner">
                              <h4 translate="BIO_STUDIES_FUNCTION"> { this.props.locale.BIO_STUDIES_FUNCTION }</h4>
                              <ul>
                                  <li translate="BIO_STUDIES_FUNCTION_LIST_1"> { this.props.locale.BIO_STUDIES_FUNCTION_LIST_1 }</li>
                                  <li translate="BIO_STUDIES_FUNCTION_LIST_2"> { this.props.locale.BIO_STUDIES_FUNCTION_LIST_2 }</li>
                                  <li translate="BIO_STUDIES_FUNCTION_LIST_3"> { this.props.locale.BIO_STUDIES_FUNCTION_LIST_3 }</li>
                              </ul>
                              <p translate="BIO_STUDIES_REASON"> { this.props.locale.BIO_STUDIES_REASON }</p>
                          </div>
                          <a href="portfolio.html" className="btn hide-icon"><i className="fa fa-angle-right"></i><span translate="PORTIFOLIO_BUTTON"> { this.props.locale.PORTIFOLIO_BUTTON }</span></a> 
                      </div>
                  </div>
              </section>
              <div className="section-separator"></div>
              <section  id="sec3">
                  <div className="container">
                      <div className="section-title">
                          <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="SERVICES"> { this.props.locale.SERVICES }</span></div>
                          <h3 translate="WHAT_I_DO"> { this.props.locale.WHAT_I_DO }</h3>
                          <h2 translate="SERVICES"> { this.props.locale.SERVICES }</h2>
                          <div className="st-separator"></div>
                      </div>
                      <div className="carous-holder ser-carous-holder">
                          <div className="customNavigation">
                              <a className="next-slide transition"><i className="fa fa-angle-right"></i></a>
                              <a className="prev-slide transition"><i className="fa fa-angle-left"></i></a>
                          </div>
                          <div className="clearfix"></div>
                          <div  className="owl-carousel services-carusel">
                              <div className="item">
                                  <div className="services-box box-item-holder">
                                      <div className="grid-item-holder services-image">
                                          <a className="image-popup box-popup" href="img/peaks.jpg"><i className="fa fa-expand"></i></a>
                                          <div className="folio-img"> 
                                              <span className="overlay"></span> 
                                              <img  src="img/peaks.jpg"  alt=""></img>
                                          </div>
                                      </div>
                                      <div className="services-box-info">
                                          <h4 translate="SERVICES_TYPE_1"> { this.props.locale.SERVICES_TYPE_1 }</h4>
                                          <p translate="SERVICES_1_REASON"> { this.props.locale.SERVICES_1_REASON }</p>
                                          <ul>
                                              <li translate="SERVICES_1_FUNCTION_LIST_1"> { this.props.locale.SERVICES_1_FUNCTION_LIST_1 }</li>
                                              <li translate="SERVICES_1_FUNCTION_LIST_2"> { this.props.locale.SERVICES_1_FUNCTION_LIST_2 }</li>
                                              <li translate="SERVICES_1_FUNCTION_LIST_3"> { this.props.locale.SERVICES_1_FUNCTION_LIST_3 }</li>
                                          </ul>                                                        
                                      </div>
                                  </div>
                              </div>                                            
                              <div className="item">
                                  <div className="services-box box-item-holder">
                                      <div className="grid-item-holder services-image">
                                          <a className="image-popup box-popup" href="img/ny.jpg"><i className="fa fa-expand"></i></a>
                                          <div className="folio-img"> 
                                              <span className="overlay"></span> 
                                              <img  src="img/ny.jpg"  alt=""></img>
                                          </div>
                                      </div>
                                      <div className="services-box-info">
                                          <span className="services-decor"></span>
                                          <h4 translate="SERVICES_TYPE_2"> { this.props.locale.SERVICES_TYPE_2 }</h4>
                                          <p translate="SERVICES_2_REASON"> { this.props.locale.SERVICES_2_REASON }</p>
                                          <ul>
                                              <li translate="SERVICES_2_FUNCTION_LIST_1"> { this.props.locale.SERVICES_2_FUNCTION_LIST_1 }</li>
                                              <li translate="SERVICES_2_FUNCTION_LIST_2"> { this.props.locale.SERVICES_2_FUNCTION_LIST_2 }</li>
                                          </ul>
                                          <div className="clear"></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="services-box box-item-holder">
                                      <div className="grid-item-holder services-image">
                                          <a className="image-popup box-popup" href="img/home.jpg"><i className="fa fa-expand"></i></a>
                                          <div className="folio-img"> 
                                              <span className="overlay"></span> 
                                              <img  src="img/home.jpg"  alt=""></img>
                                          </div>
                                      </div>
                                      <div className="services-box-info">
                                          <span className="services-decor"></span>
                                          <h4 translate="SERVICES_TYPE_3"> { this.props.locale.SERVICES_TYPE_3 }</h4>
                                          <p translate="SERVICES_3_REASON"> { this.props.locale.SERVICES_3_REASON }</p>
                                          <ul>
                                              <li translate="SERVICES_3_FUNCTION_LIST_1"> { this.props.locale.SERVICES_3_FUNCTION_LIST_1 }</li>
                                              <li translate="SERVICES_3_FUNCTION_LIST_2"> { this.props.locale.SERVICES_3_FUNCTION_LIST_2 }</li>
                                              <li translate="SERVICES_3_FUNCTION_LIST_3"> { this.props.locale.SERVICES_3_FUNCTION_LIST_3 }</li>
                                          </ul>
                                          <div className="clear"></div>                                                     
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="section-separator"></div>
              <section className="small-pad" id="sec4">
                  <div className="container">
                      <div className="section-title">
                          <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="SKILLS"> { this.props.locale.SKILLS }My skills</span></div>
                          <h3 translate="ATTAINMENTS"> { this.props.locale.ATTAINMENTS }</h3>
                          <h2 translate="MY_SKILLS"> { this.props.locale.MY_SKILLS }</h2>
                          <div className="st-separator"></div>
                      </div>
                      <div className="piechart-holder animaper" data-skcolor="#8F8F8F">
                          <div className="row">
                              <div className="piechart col-md-3">
                                  <span className="chart" data-percent="60">
                                  <span className="percent"></span>
                                  </span>
                                  <div className="clearfix"></div>
                                  <div className="skills-description">
                                      <h4 translate="SKILLS_TYPE_1"> { this.props.locale.SKILLS_TYPE_1 }</h4>
                                  </div>
                              </div>
                              <div className="col-md-8">
                                  <div className="skillbar-box animaper">
                                      <div className="custom-skillbar-title"><span><img height="30" width="30" src="img/icons/photoshop.svg" ></img> Photoshop </span></div>
                                      <div className="skill-bar-percent">75%</div>
                                      <div className="skillbar-bg" data-percent="75%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      <div className="custom-skillbar-title"><span><img height="30" width="30" src="img/icons/lightroom.svg" ></img> Lightroom </span></div>
                                      <div className="skill-bar-percent">80%</div>
                                      <div className="skillbar-bg" data-percent="80%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      <div className="custom-skillbar-title"><span><img height="30" width="30" src="img/icons/illustrator.svg" ></img> Illustrator </span></div>
                                      <div className="skill-bar-percent">15%</div>
                                      <div className="skillbar-bg" data-percent="15%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="piechart col-md-3">
                                  <span className="chart" data-percent="90">
                                  <span className="percent"></span>
                                  </span>
                                  <div className="clearfix"></div>
                                  <div className="skills-description">
                                      <h4 translate="SKILLS_TYPE_2"> { this.props.locale.SKILLS_TYPE_2 }</h4>
                                  </div>
                              </div>
                              <div className="col-md-8">
                                  <div className="skillbar-box animaper">
                                      <div className="custom-skillbar-title"><span><img height="40" width="40" src="img/icons/java.svg" ></img></span></div>
                                      <div className="skill-bar-percent">50%</div>
                                      <div className="skillbar-bg" data-percent="50%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      <div className="custom-skillbar-title"><span><img height="30" width="30" src="img/icons/html5.svg" ></img> <img height="30" width="30" src="img/icons/css3.svg" ></img></span></div>
                                      <div className="skill-bar-percent">60%</div>
                                      <div className="skillbar-bg" data-percent="60%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      <div className="custom-skillbar-title"><span><img height="30" width="30"src="img/icons/javascript.svg" ></img> <img height="30" width="30"src="img/icons/jquery.svg" ></img></span></div>
                                      <div className="skill-bar-percent">40%</div>
                                      <div className="skillbar-bg" data-percent="40%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="piechart col-md-3">
                                  <span className="chart" data-percent="85">
                                  <span className="percent"></span>
                                  </span>
                                  <div className="clearfix"></div>
                                  <div className="skills-description">
                                      <h4 translate="SKILLS_TYPE_3"> { this.props.locale.SKILLS_TYPE_3 }</h4>
                                  </div>
                              </div>
                              <div className="col-md-8">
                                  <div className="skillbar-box animaper">
                                      <div className="custom-skillbar-title"><span translate="SKILLS_TYPE_3_LIST_1"> { this.props.locale.SKILLS_TYPE_3_LIST_1 }</span></div>
                                      <div className="skill-bar-percent">100%</div>
                                      <div className="skillbar-bg" data-percent="100%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      <div className="custom-skillbar-title"><span translate="SKILLS_TYPE_3_LIST_2"> { this.props.locale.SKILLS_TYPE_3_LIST_2 }</span></div>
                                      <div className="skill-bar-percent">90%</div>
                                      <div className="skillbar-bg" data-percent="90%">
                                          <div className="custom-skillbar"></div>
                                      </div>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="section-separator"></div>
              <section  id="sec5">
                  <div className="container">
                      <div className="section-title">
                          <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="CLIENTS"> { this.props.locale.CLIENTS }</span></div>
                          <h3 translate="CLIENTS_TITLE"> { this.props.locale.CLIENTS_TITLE }</h3>
                          <h2 translate="CLIENTS"> { this.props.locale.CLIENTS }Clients</h2>
                          <div className="st-separator"></div>
                      </div>
                      <div className="single-slider-holder">
                          <div className="customNavigation">
                              <a className="next-slide transition"><i className="fa fa-angle-right"></i></a>
                              <a className="prev-slide transition"><i className="fa fa-angle-left"></i></a>
                          </div>
                          <div className="single-slider owl-carousel testimonials-slider">
                              <div className="item">
                                  <div className="testi-item">
                                      <div className="testi-item-img"><img src="img/panda.jpg" alt="" className="respimg"></img></div>
                                      <div className="testi-item-text">
                                          <h3 translate="CLIENTS_TESTIMONIAL_1_TITLE"> { this.props.locale.CLIENTS_TESTIMONIAL_1_TITLE }</h3>
                                          <p translate="CLIENTS_TESTIMONIAL_1"> { this.props.locale.CLIENTS_TESTIMONIAL_1 } </p>
                                          <a href="https://nationalzoo.si.edu/" translate="CLIENTS_TESTIMONIAL_1_SOURCE"> { this.props.locale.CLIENTS_TESTIMONIAL_1_SOURCE }</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testi-item">
                                      <div className="testi-item-img"><img src="img/rat1.jpg" alt="" className="respimg"></img></div>
                                      <div className="testi-item-text">
                                          <h3 translate="CLIENTS_TESTIMONIAL_2_TITLE"> { this.props.locale.CLIENTS_TESTIMONIAL_2_TITLE }</h3>
                                          <p translate="CLIENTS_TESTIMONIAL_2"> { this.props.locale.CLIENTS_TESTIMONIAL_2 }</p>
                                          <a href="#"  translate="CLIENTS_TESTIMONIAL_2_SOURCE"> { this.props.locale.CLIENTS_TESTIMONIAL_2_SOURCE }</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testi-item">
                                      <div className="testi-item-img"><img src="img/turtles.jpg" alt="" className="respimg"></img></div>
                                      <div className="testi-item-text">
                                          <h3 translate="CLIENTS_TESTIMONIAL_3_TITLE"> { this.props.locale.CLIENTS_TESTIMONIAL_3_TITLE }</h3>
                                          <p translate="CLIENTS_TESTIMONIAL_3"> { this.props.locale.CLIENTS_TESTIMONIAL_3 }</p>
                                          <a href="#" translate="CLIENTS_TESTIMONIAL_3_SOURCE"> { this.props.locale.CLIENTS_TESTIMONIAL_3_SOURCE }</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testi-item">
                                      <div className="testi-item-img"><img src="img/crazy.jpg" alt="" className="respimg"></img></div>
                                      <div className="testi-item-text">
                                          <h3 translate="CLIENTS_TESTIMONIAL_4_TITLE"> { this.props.locale.CLIENTS_TESTIMONIAL_4_TITLE }</h3>
                                          <p translate="CLIENTS_TESTIMONIAL_4"> { this.props.locale.CLIENTS_TESTIMONIAL_4 }</p>
                                          <a href="https://nationalzoo.si.edu/"  translate="CLIENTS_TESTIMONIAL_4_SOURCE"> { this.props.locale.CLIENTS_TESTIMONIAL_4_SOURCE }</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>      
    );
  }
}

export default Rest
