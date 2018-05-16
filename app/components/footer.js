/* @flow */

import React, {Component} from 'react';


class Footer extends Component {

    
  render() {
    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <div className="footer-info">
                          <h4 translate="FOOTER_FIND_ME"> { this.props.locale.FOOTER_FIND_ME } </h4>
                          <div className="footer-social">
                              <ul>
                                  <li><a href="https://www.facebook.com/leomleao" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="https://www.instagram.com/leao.leo/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                  <li><a href="https://plus.google.com/u/0/115117123448958208059" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                  <li><a href="https://www.linkedin.com/in/leaoleo" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="footer-info">
                          <h4 translate="FOOTER_CONTACT"> { this.props.locale.FOOTER_CONTACT } </h4>
                          <ul className="footer-contacts">
                              <li><a  href="#"> <i className="fa fa-whatsapp"></i> +1(301)6840052</a></li>
                              <li><a href="#"> <i className="fa fa-phone"></i> +55(11)998680977</a></li>
                              <li><a href="https://www.google.com.br/maps/@-23.1896366,-47.0467868,11z"><i className="fa fa-motorcycle"></i> Jundiai - SP Brasil</a></li>
                              <li><a href="mailto:leomleao@gmail.com"><i className="fa fa-envelope-o"></i> leomleao@gmail.com</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="footer-info">
                          <h4 translate="FOOTER_INSTA"> { this.props.locale.FOOTER_INSTA } </h4>
                          <script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/5c74975ff6de2461333023f655fca9dfcd7a7e42.html" id="lightwidget_5c74975ff6" name="lightwidget_5c74975ff6"  scrolling="no" allowtransparency="true" className="lightwidget-widget" ></iframe>

                      </div>
                  </div>
              </div>
          </div>
          <div className="to-top-holder copyright">
              <div className="container">
                  <p><span translate="FOOTER_PAGE_INFO"> { this.props.locale.FOOTER_PAGE_INFO } </span> <a href="http://leoleao.ml" translate="FOOTER_PAGE_AUTHOR">  { this.props.locale.FOOTER_PAGE_AUTHOR } </a><span translate="FOOTER_PAGE_COPYRIGHT"> { this.props.locale.FOOTER_PAGE_COPYRIGHT } </span><i className="fa fa-copyright"></i></p>                               
                  <div className="to-top"> <i className="fa fa-angle-double-up"></i></div>
              </div>
          </div>
      </footer>
    );
  }
}

export default Footer
