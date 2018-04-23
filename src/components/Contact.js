import React from 'react';
//import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import pic from '../img/profile.jpg';
import malt from '../img/icons/malt.svg';
import SVGInline from "react-svg-inline";
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaStackOverflow from 'react-icons/lib/fa/stack-overflow';
import FaMedium from 'react-icons/lib/fa/medium';
import PerfectScrollbar from 'react-perfect-scrollbar'



export default class Contact extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  render() {

    return(
      <div className="contact main">
        <Helmet>
          <title>Arnaud Ambroselli | Contact</title>
        </Helmet>
        <div className="contact__picture" style={{ backgroundImage: `url(${pic})`}}></div>
        <PerfectScrollbar className="contact__infos">
          <div className="contact__infos--content contact__infos--name"><span>arnaud ambroselli</span></div>
          <div className="contact__infos--content contact__infos--job">
            <span>Développeur front-end</span>
            <span>HTML5 - Pug</span>
            <span>CSS3 & 4 - SASS - LESS - BEM</span>
            <span>JavaScript Vanilla</span>
            <span>React.js - Redux</span>
            <span>NodeJS - Express (en formation)</span>
            <span>GraphQL - MongoDB (en formation)</span>
          </div>
          <div className="contact__infos--content contact__infos--email">
            <a href="mailto:arnaud@ambroselli.io" target="_blank" rel="noopener noreferrer">
              <span>arnaud@ambroselli.io</span>
            </a>
          </div>
          <div className="contact__infos--content contact__infos--social">
            <div className="contact__infos--social--content contact__infos--social--malt">
              <a href="https://www.malt.fr/profile/arnaudambroselli" target="_blank" rel="noopener noreferrer">
                <SVGInline svg={malt} />
              </a>
            </div>
            <div className="contact__infos--social--content contact__infos--social--linkedin">
              <a href="https://fr.linkedin.com/in/arnaud-ambroselli/fr" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="20" />
              </a>
            </div>
            <div className="contact__infos--social--content contact__infos--social--github">
              <a href="https://github.com/arnaudambro" target="_blank" rel="noopener noreferrer">
                <FaGithub size="20" />
              </a>
            </div>
            <div className="contact__infos--social--content contact__infos--social--stackoverflow">
              <a href="https://stackoverflow.com/users/5225096/arnaudambro" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow size="20" />
              </a>
            </div>
            <div className="contact__infos--social--content contact__infos--social--medium">
              <a href="https://medium.com/@arnaudambroselli" target="_blank" rel="noopener noreferrer">
                <FaMedium size="20" />
              </a>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    )
  }
}

Contact.propTypes = {

};
