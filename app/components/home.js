import React from 'react';

const Home = () => { return (

      <div id="main">
        {/*=============== header ===============*/}	
        
        {/* header  end */}
        {/*=============== wrapper ===============*/}	
        <div id="wrapper">
          {/*=============== content-holder ===============*/}	
          <div className="content-holder scale-bg2">
            {/*=============== navigation ===============*/}
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
                        <a href="index.html#sec1" className="custom-scroll-link" translate="ABOUT_ME" />
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
            {/* navigation  end */}
            {/*=============== hero-wrapper ===============*/}
            <div className="hero-wrapper">
              <div className="section-parallax" data-top-bottom="transform: translateY(450px);" data-bottom-top="transform: translateY(-450px);">
                <div className="media-container">
                  {/* slideshow images*/}
                  <div className="slideshow-wrap owl-carousel">
                    <div className="item full-height">
                      <div className="bg" style={{backgroundImage: 'url(assets/img/bg/backgroundNY.jpg)'}} />
                    </div>
                    <div className="item full-height">
                      <div className="bg" style={{backgroundImage: 'url(assets/img/bg/NYcars.jpg)'}} />
                    </div>
                    <div className="item full-height">
                      <div className="bg" style={{backgroundImage: 'url(assets/img/bg/pitt.jpg)'}} />
                    </div>
                  </div>
                  {/* slideshow end*/}
                  <div className="overlay" />
                </div>
                <div className="hero-title">
                  <div className="hero-wrap" data-top-bottom="transform: translateY(-150px);" data-bottom-top="transform: translateY(150px);">
                    <h3 translate="WELCOME_MESSAGE" />
                    <div className="clearfix" />
                    <h4><a href="#sec1" className="custom-scroll-link" translate="START_MESSAGE" /></h4>
                  </div>
                </div>
              </div>
            </div>
            {/* hero-wrapper  end */}
            {/*=============== fixed-column ===============*/}	
            <div className="fixed-column">
              {/* animation background */}
              <div className="bg-wrapper">
                <div className="bg bg-scroll" />
                <div className="overlay" />
                <div className="bg-title"><span /></div>
              </div>
            </div>
            {/* fixed-column end */}
            {/*=============== wrapper-inner  ===============*/}
            <div className="wrapper-inner home-wrap">
              {/* scroll page navigation */}
              <div className="scroll-nav-holder">
                <nav className="scroll-nav">
                  <ul>
                    <li><a className="scroll-link fbgs" href="#sec1" data-bgscr="assets/img/aboutme.jpg" data-bgtex="ABOUT_ME"><span translate="ABOUT_ME" id="ABOUT_ME" /></a></li>
                    <li><a className="scroll-link" href="#sec2" data-bgscr="assets/img/me.jpg" data-bgtex="RESUME"><span translate="RESUME" id="RESUME" /></a></li>
                    <li><a className="scroll-link" href="#sec3" data-bgscr="assets/img/nybuilding.jpg" data-bgtex="SERVICES"><span translate="SERVICES" id="SERVICES" /></a></li>
                    <li><a className="scroll-link" href="#sec4" data-bgscr="assets/img/wsstreet.jpg" data-bgtex="SKILLS"><span translate="SKILLS" id="SKILLS" /></a></li>
                    <li><a className="scroll-link" href="#sec5" data-bgscr="assets/img/owls.jpg" data-bgtex="CLIENTS"><span translate="CLIENTS" id="CLIENTS" /></a></li>
                  </ul>
                </nav>
              </div>
              {/* scroll page navigation end */}
              {/*=============== content ===============*/}	
              <div className="content">
                {/* section about */}
                <section id="sec1">
                  {/* container */}
                  <div className="container">
                    <div className="section-title">
                      <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="ABOUT_ME" /></div>
                      <h3 translate="WHO_I_AM" />
                      <h2 translate="ABOUT_ME" />
                      <div className="st-separator" />
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="about-iamge">
                          <img src="assets/img/mySelf.jpg" alt className="respimg" />
                        </div>
                      </div>
                      <div className="col-md-7 align-text">
                        <h4 className="text-subtitle">Leonardo M. Leão</h4>
                        <div>
                          <h3 className="text-title"><span translate="JOB" /><span className="color" translate="JOB_FUNCTION" /><span translate="JOB_LOCATION" /></h3>
                        </div>
                        <div className="clearfix" />
                        <p translate="MY_HISTORY" />
                        <p translate="WHAT_I_WANT" />
                        <p className="bold" translate="WHAT_I_THINK" />
                        <a href="portfolio.html" className="btn hide-icon"><i className="fa fa-angle-right" /><span translate="PORTIFOLIO_BUTTON" /></a>	
                      </div>
                    </div>
                  </div>
                  {/* container end  */}
                </section>
                {/* section end */}
                {/* section facts */}
                <section>
                  <div className="container">
                    <div className="facts-title">
                      <h3 translate="FACTS" />
                    </div>
                    <div className="inline-facts-holder">
                      {/* 1 */}
                      <div className="inline-facts">
                        <div className="milestone-counter">
                          <div className="stats animaper">
                            <div className="num coffe" data-content data-num>0</div>
                          </div>
                        </div>
                        <h6 translate="CUPS_OF_COFFE" />
                      </div>
                      {/* 2 */}
                      <div className="inline-facts">
                        <div className="milestone-counter">
                          <div className="stats animaper">
                            <div className="num nightsAwake" data-content data-num>0</div>
                          </div>
                        </div>
                        <h6 translate="NIGHTS_AWAKE" />
                      </div>
                      {/* 3 */}
                      <div className="inline-facts">
                        <div className="milestone-counter">
                          <div className="stats animaper">                                                   
                            <div id="timeLearning" className="num timeLearning" data-content data-num>0</div>                                                                                        
                          </div>
                        </div>                                            
                        <h6 translate="TIME_STUDYING" /><h6 className="htmlCss"><img height={18} width={18} src="assets/img/icons/html5.svg" onerror="this.src='assets/img/icons/html5.png'" /> &amp;
                          <img height={18} width={18} src="assets/img/icons/css3.svg" onerror="this.src='assets/img/icons/css3.png'" /> </h6>
                      </div>
                    </div>
                  </div>
                  {/* container end  */}
                </section>
                {/* section end */}  
                <div className="section-separator" />
                {/*=============== section resume  ===============*/}	
                <section id="sec2">
                  <div className="container">
                    <div className="section-title">
                      <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="RESUME" /></div>
                      <h3 translate="MY_BIO" />
                      <h2 translate="RESUME" />
                      <div className="st-separator" />
                    </div>
                    <div className="clearfix" />
                    <div className="accordion" data-name={1}>
                      {/* 1 - visible*/}
                      <div className="accordion-title transition">
                        <h5><a href="#"> <i className="fa fa-briefcase" /> 2015-2016 <span translate="BIO_JOB_1"> </span></a></h5>
                      </div>
                      <div className="accordion-inner">
                        <h4 translate="BIO_JOB_1_FUNCTION" />
                        <ul>
                          <li translate="BIO_JOB_1_SCOPE_1" />
                          <li translate="BIO_JOB_1_FUNCTION" />
                          <li translate="BIO_JOB_1_FUNCTION" />
                        </ul>
                        <div>
                          <p translate="BIO_JOB_1_RESP"> </p>
                          <p translate="BIO_JOB_1_RESP_LIST_1" />
                          <p translate="BIO_JOB_1_RESP_LIST_2" />                                           
                          <p translate="BIO_JOB_1_RESP_LIST_3" />
                          <p translate="BIO_JOB_1_RESP_LIST_4" />
                          <p translate="BIO_JOB_1_RESP_LIST_5" />
                          <p translate="BIO_JOB_1_RESP_LIST_6" />
                          <p translate="BIO_JOB_1_RESP_LIST_7" />
                          <p translate="BIO_JOB_1_RESP_LIST_8" />
                          <p translate="BIO_JOB_1_RESP_LIST_9" />
                          <p translate="BIO_JOB_1_RESP_LIST_10" />
                        </div>
                      </div>                                        
                      {/* 2 */}
                      <div className="accordion-title transition">
                        <h5><a href="#"> <i className="fa fa-pencil" /> 2014-2016 <span translate="BIO_STUDIES" /></a></h5>
                      </div>
                      <div className="accordion-inner">
                        <h4 translate="BIO_STUDIES_FUNCTION" />
                        <ul>
                          <li><img height={30} width={30} src="assets/img/icons/photoshop.svg" onerror="this.src='assets/img/icons/photoshop.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/illustrator.svg" onerror="this.src='assets/img/icons/illustrator.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/html5.svg" onerror="this.src='assets/img/icons/html5.png'" /></li>                                               
                          <li><img height={30} width={30} src="assets/img/icons/css3.svg" onerror="this.src='assets/img/icons/css3.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/javascript.svg" onerror="this.src='assets/img/icons/javascript.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/jquery.svg" onerror="this.src='assets/img/icons/jquery.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/php.svg" onerror="this.src='assets/img/icons/php.png'" /></li>
                          <li><img height={30} width={30} src="assets/img/icons/ubuntu.svg" onerror="this.src='assets/img/icons/ubuntu.png'" /></li>
                        </ul>
                        <p translate="BIO_STUDIES_METHOD" />
                      </div>
                      {/* 4 */}
                      <div className="accordion-title transition">
                        <h5><a href="#"> <i className="fa fa-graduation-cap" /> 2014-2017 <span translate="BIO_STUDIES_COLLEGE" /></a></h5>
                      </div>
                      <div className="accordion-inner">
                        <h4 translate="BIO_STUDIES_FUNCTION" />
                        <ul>
                          <li translate="BIO_STUDIES_FUNCTION_LIST_1" />
                          <li translate="BIO_STUDIES_FUNCTION_LIST_2" />
                          <li translate="BIO_STUDIES_FUNCTION_LIST_3" />
                        </ul>
                        <p translate="BIO_STUDIES_REASON" />
                      </div>
                      <a href="portfolio.html" className="btn hide-icon"><i className="fa fa-angle-right" /><span translate="PORTIFOLIO_BUTTON" /></a> 
                    </div>
                  </div>
                </section>
                {/* section end */}
                <div className="section-separator" />
                {/* section services */}
                <section id="sec3">
                  {/* container*/}
                  <div className="container">
                    {/* section title */}
                    <div className="section-title">
                      <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="SERVICES" /></div>
                      <h3 translate="WHAT_I_DO" />
                      <h2 translate="SERVICES" />
                      <div className="st-separator" />
                    </div>
                    {/* section title end  */}
                    {/* 2 */}
                    <div className="carous-holder ser-carous-holder">
                      <div className="customNavigation">
                        <a className="next-slide transition"><i className="fa fa-angle-right" /></a>
                        <a className="prev-slide transition"><i className="fa fa-angle-left" /></a>
                      </div>
                      <div className="clearfix" />
                      <div className="owl-carousel services-carusel">
                        {/* 1 item */}
                        <div className="item">
                          <div className="services-box box-item-holder">
                            <div className="grid-item-holder services-image">
                              <a className="image-popup box-popup" href="assets/img/peaks.jpg"><i className="fa fa-expand" /></a>
                              <div className="folio-img"> 
                                <span className="overlay" /> 
                                <img src="assets/img/peaks.jpg" alt />
                              </div>
                            </div>
                            <div className="services-box-info">
                              <h4 translate="SERVICES_TYPE_1" />
                              <p translate="SERVICES_1_REASON" />
                              <ul>
                                <li translate="SERVICES_1_FUNCTION_LIST_1" />
                                <li translate="SERVICES_1_FUNCTION_LIST_2" />
                                <li translate="SERVICES_1_FUNCTION_LIST_3" />
                              </ul>                                                        
                            </div>
                          </div>
                        </div>                                            
                        {/* 2 item */}
                        <div className="item">
                          <div className="services-box box-item-holder">
                            <div className="grid-item-holder services-image">
                              <a className="image-popup box-popup" href="assets/img/ny.jpg"><i className="fa fa-expand" /></a>
                              <div className="folio-img"> 
                                <span className="overlay" /> 
                                <img src="assets/img/ny.jpg" alt />
                              </div>
                            </div>
                            <div className="services-box-info">
                              <span className="services-decor" />
                              <h4 translate="SERVICES_TYPE_2" />
                              <p translate="SERVICES_2_REASON" />
                              <ul>
                                <li translate="SERVICES_2_FUNCTION_LIST_1" />
                                <li translate="SERVICES_2_FUNCTION_LIST_2" />
                              </ul>
                              <div className="clear" />
                            </div>
                          </div>
                        </div>
                        {/* 3 item */}
                        <div className="item">
                          <div className="services-box box-item-holder">
                            <div className="grid-item-holder services-image">
                              <a className="image-popup box-popup" href="assets/img/home.jpg"><i className="fa fa-expand" /></a>
                              <div className="folio-img"> 
                                <span className="overlay" /> 
                                <img src="assets/img/home.jpg" alt />
                              </div>
                            </div>
                            <div className="services-box-info">
                              <span className="services-decor" />
                              <h4 translate="SERVICES_TYPE_3" />
                              <p translate="SERVICES_3_REASON" />
                              <ul>
                                <li translate="SERVICES_3_FUNCTION_LIST_1" />
                                <li translate="SERVICES_3_FUNCTION_LIST_2" />
                                <li translate="SERVICES_3_FUNCTION_LIST_3" />
                              </ul>
                              <div className="clear" />                                                     
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* container end  */}
                </section>
                {/* section end  */}
                <div className="section-separator" />
                {/* section skills */}
                <section className="small-pad" id="sec4">
                  {/* container */}
                  <div className="container">
                    {/* section title */}
                    <div className="section-title">
                      <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="SKILLS">My skills</span></div>
                      <h3 translate="ATTAINMENTS" />
                      <h2 translate="MY_SKILLS" />
                      <div className="st-separator" />
                    </div>
                    {/* section title end */}
                    {/* circle skills */}
                    <div className="piechart-holder animaper" data-skcolor="#8F8F8F">
                      <div className="row">
                        {/* chart item */}
                        <div className="piechart col-md-3">
                          <span className="chart" data-percent={60}>
                            <span className="percent" />
                          </span>
                          <div className="clearfix" />
                          <div className="skills-description">
                            <h4 translate="SKILLS_TYPE_1" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="skillbar-box animaper">
                            {/* skill 1*/}
                            <div className="custom-skillbar-title"><span><img height={30} width={30} src="assets/img/icons/photoshop.svg" onerror="this.src='assets/img/icons/photoshop.png'" /> Photoshop </span></div>
                            <div className="skill-bar-percent">75%</div>
                            <div className="skillbar-bg" data-percent="75%">
                              <div className="custom-skillbar" />
                            </div>
                            {/* skill 2*/}
                            <div className="custom-skillbar-title"><span><img height={30} width={30} src="assets/img/icons/lightroom.svg" onerror="this.src='assets/img/icons/lightroom.png'" /> Lightroom </span></div>
                            <div className="skill-bar-percent">80%</div>
                            <div className="skillbar-bg" data-percent="80%">
                              <div className="custom-skillbar" />
                            </div>
                            {/* skill 3*/}
                            <div className="custom-skillbar-title"><span><img height={30} width={30} src="assets/img/icons/illustrator.svg" onerror="this.src='assets/img/icons/illustrator.png'" /> Illustrator </span></div>
                            <div className="skill-bar-percent">15%</div>
                            <div className="skillbar-bg" data-percent="15%">
                              <div className="custom-skillbar" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {/* chart item */}
                        <div className="piechart col-md-3">
                          <span className="chart" data-percent={90}>
                            <span className="percent" />
                          </span>
                          <div className="clearfix" />
                          <div className="skills-description">
                            <h4 translate="SKILLS_TYPE_2" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="skillbar-box animaper">
                            {/* skill 1*/}
                            <div className="custom-skillbar-title"><span><img height={40} width={40} src="assets/img/icons/java.svg" onerror="this.src='assets/img/icons/java.png'" /></span></div>
                            <div className="skill-bar-percent">50%</div>
                            <div className="skillbar-bg" data-percent="50%">
                              <div className="custom-skillbar" />
                            </div>
                            {/* skill 2*/}
                            <div className="custom-skillbar-title"><span><img height={30} width={30} src="assets/img/icons/html5.svg" onerror="this.src='assets/img/icons/html5.png'" /> <img height={30} width={30} src="assets/img/icons/css3.svg" onerror="this.src='assets/img/icons/css3.png'" /></span></div>
                            <div className="skill-bar-percent">60%</div>
                            <div className="skillbar-bg" data-percent="60%">
                              <div className="custom-skillbar" />
                            </div>
                            {/* skill 3*/}
                            <div className="custom-skillbar-title"><span><img height={30} width={30} src="assets/img/icons/javascript.svg" onerror="this.src='assets/img/icons/javascript.png'" /> <img height={30} width={30} src="assets/img/icons/jquery.svg" onerror="this.src='assets/img/icons/jquery.png'" /></span></div>
                            <div className="skill-bar-percent">40%</div>
                            <div className="skillbar-bg" data-percent="40%">
                              <div className="custom-skillbar" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {/* chart item */}
                        <div className="piechart col-md-3">
                          <span className="chart" data-percent={85}>
                            <span className="percent" />
                          </span>
                          <div className="clearfix" />
                          <div className="skills-description">
                            <h4 translate="SKILLS_TYPE_3" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="skillbar-box animaper">
                            {/* skill 1*/}
                            <div className="custom-skillbar-title"><span translate="SKILLS_TYPE_3_LIST_1" /></div>
                            <div className="skill-bar-percent">100%</div>
                            <div className="skillbar-bg" data-percent="100%">
                              <div className="custom-skillbar" />
                            </div>
                            {/* skill 2*/}
                            <div className="custom-skillbar-title"><span translate="SKILLS_TYPE_3_LIST_2" /></div>
                            <div className="skill-bar-percent">90%</div>
                            <div className="skillbar-bg" data-percent="90%">
                              <div className="custom-skillbar" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  skills end*/}
                  </div>
                  {/* container end*/}
                </section>
                {/* section end  */}
                <div className="section-separator" />
                {/* section clients */}
                <section id="sec5">
                  <div className="container">
                    <div className="section-title">
                      <div className="sect-subtitle" data-top-bottom="transform: translateY(-300px);" data-bottom-top="transform: translateY(300px);"><span translate="CLIENTS" /></div>
                      <h3 translate="CLIENTS_TITLE" />
                      <h2 translate="CLIENTS">Clients</h2>
                      <div className="st-separator" />
                    </div>
                    <div className="single-slider-holder">
                      <div className="customNavigation">
                        <a className="next-slide transition"><i className="fa fa-angle-right" /></a>
                        <a className="prev-slide transition"><i className="fa fa-angle-left" /></a>
                      </div>
                      <div className="single-slider owl-carousel testimonials-slider">
                        {/* 1 */}
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img"><img src="assets/img/panda.jpg" alt className="respimg" /></div>
                            <div className="testi-item-text">
                              <h3 translate="CLIENTS_TESTIMONIAL_1_TITLE" />
                              <p translate="CLIENTS_TESTIMONIAL_1"> </p>
                              <a href="https://nationalzoo.si.edu/" translate="CLIENTS_TESTIMONIAL_1_SOURCE" />
                            </div>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img"><img src="assets/img/rat1.jpg" alt className="respimg" /></div>
                            <div className="testi-item-text">
                              <h3 translate="CLIENTS_TESTIMONIAL_2_TITLE" />
                              <p translate="CLIENTS_TESTIMONIAL_2" />
                              <a href="#" translate="CLIENTS_TESTIMONIAL_2_SOURCE" />
                            </div>
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img"><img src="assets/img/turtles.jpg" alt className="respimg" /></div>
                            <div className="testi-item-text">
                              <h3 translate="CLIENTS_TESTIMONIAL_3_TITLE" />
                              <p translate="CLIENTS_TESTIMONIAL_3" />
                              <a href="#" translate="CLIENTS_TESTIMONIAL_3_SOURCE" />
                            </div>
                          </div>
                        </div>
                        {/* 4 */}
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img"><img src="assets/img/crazy.jpg" alt className="respimg" /></div>
                            <div className="testi-item-text">
                              <h3 translate="CLIENTS_TESTIMONIAL_4_TITLE" />
                              <p translate="CLIENTS_TESTIMONIAL_4" />
                              <a href="https://nationalzoo.si.edu/" translate="CLIENTS_TESTIMONIAL_4_SOURCE" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* section end  */}
              </div>
              {/* content end  */}
            </div>
            {/* wrapper-inner end  */}
            {/* ================footer ==================== */}
            <div className="height-emulator" />
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    {/* footer social */}
                    <div className="footer-info">
                      <h4 translate="FOOTER_FIND_ME" />
                      <div className="footer-social">
                        <ul>
                          <li><a href="https://www.facebook.com/leomleao" target="_blank"><i className="fa fa-facebook" /></a></li>
                          <li><a href="https://www.instagram.com/leao.leo/" target="_blank"><i className="fa fa-instagram" /></a></li>
                          <li><a href="https://plus.google.com/u/0/115117123448958208059" target="_blank"><i className="fa fa-google-plus" /></a></li>
                          <li><a href="https://www.linkedin.com/in/leaoleo" target="_blank"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* footer contacts */}
                    <div className="footer-info">
                      <h4 translate="FOOTER_CONTACT" />
                      <ul className="footer-contacts">
                        <li><a href="#" onclick="return false;"> <i className="fa fa-whatsapp" /> +1(301)6840052</a></li>
                        <li><a href="#" onclick="return false;"> <i className="fa fa-phone" /> +55(11)998680977</a></li>
                        <li><a href="https://www.google.com.br/maps/@-23.1896366,-47.0467868,11z"><i className="fa fa-motorcycle" /> Jundiai - SP Brasil</a></li>
                        <li><a href="mailto:leomleao@gmail.com"><i className="fa fa-envelope-o" /> leomleao@gmail.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* titter */}
                    <div className="footer-info">
                      <h4 translate="FOOTER_INSTA" />
                      {/* LightWidget WIDGET */}<iframe src="//lightwidget.com/widgets/5c74975ff6de2461333023f655fca9dfcd7a7e42.html" id="lightwidget_5c74975ff6" name="lightwidget_5c74975ff6" scrolling="no" allowTransparency="true" className="lightwidget-widget" />
                    </div>
                  </div>
                </div>
              </div>
              {/*to top / privacy policy*/}
              <div className="to-top-holder copyright">
                <div className="container">
                  <p><span translate="FOOTER_PAGE_INFO" /> <a href="http://leoleao.ml" translate="FOOTER_PAGE_AUTHOR" /><span translate="FOOTER_PAGE_COPYRIGHT" /><i className="fa fa-copyright" /></p>                               
                  <div className="to-top"> <i className="fa fa-angle-double-up" /></div>
                </div>
              </div>
            </footer>
            {/* footer end */}
          </div>
          {/* content-holder end */}
        </div>
        {/* wrapper end */}
      </div>
	)
 }   


export default Home;