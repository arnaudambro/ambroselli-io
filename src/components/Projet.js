import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import pictures from '../data/pics';
import Transition from 'react-transition-group/Transition';
import ReactTimeout from 'react-timeout'

class Projet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.leaving(true, false, this.props.projet);
    this.props.setTimeout(() => this.props.leaving(false, false, this.props.projet), 1000* this.props.timeout);

  }

  render() {

    const { projet, timeout, theme } = this.props;
    let url = pictures[`${Object.keys(pictures)[projet]}`].url;
    if (Object.keys(pictures)[projet] === 'ambroselli') {
      if (theme === 'black') {
        url = `${pictures[`${Object.keys(pictures)[projet]}`].url}white/`;
      } else {
        url = `${pictures[`${Object.keys(pictures)[projet]}`].url}black/`;
      }
    }

    return(
      <Transition in={this.props.inProp} timeout={timeout}>
        {(status) => (
          <div className={`iframe__container iframe__container--come--${status}`}>
            <div  onClick={this.handleClick}>
              <span className="iframe__container--cross">x</span>
            </div>
            <Iframe url={url}
                    className="iframe__container--projet"
                    display="initial"
                    position="fixed"
                    allowFullScreen/>
          </div>
        )}
      </Transition>
      )
  }
}

Projet.propTypes = {

};

export default ReactTimeout(Projet);
