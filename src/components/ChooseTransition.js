import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom';
// import ReactTimeout from 'react-timeout';


class ChooseTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: null,
      simple: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.classList.contains('choose-transition__button--grouped')) {
      this.setState({ transition: 'grouped' });
      this.props.chooseTransition('grouped');
    } else if (event.target.classList.contains('choose-transition__button--separated')) {
      this.setState({ transition: 'separated' });
      this.props.chooseTransition('separated');
    } else if (event.target.classList.contains('choose-transition__button--no-choice')) {
      const randNum = Math.round(Math.random());
      this.setState({ transition: randNum === 0 ? 'separated' : 'grouped' });
      this.props.chooseTransition(randNum === 0 ? 'separated' : 'grouped');
    }
  }

  render() {

    const separated = this.state.transition === 'separated';
    const grouped = this.state.transition === 'grouped';

    return(
      <div 
        className="choose-transition"
        style={{ opacity: `${this.props.display ? 1 : 0}` }}
        onMouseMove={this.handleMouseMove}>
        {!this.state.simple && <span className={`choose-transition__question ${separated ? 'split split-down' : ''}`}>Choisissez l'animation qui suit :</span>}
        {this.state.simple && 
        <Link className={`choose-transition__link--no-choice`} to={`/${this.props.theme}/projets/0`}>
          <Button 
            classes={`choose-transition__button choose-transition__button--no-choice${separated ? ' split split-down' : ''}`} 
            active={grouped || separated}
            content="découvrir les projets" 
            onclick={this.handleClick} />
        </Link>}
        {!this.state.simple && 
        <React.Fragment>
          <Link className={`choose-transition__link--separated`} to={`/${this.props.theme}/projets/0`}>
            <Button 
              classes={`choose-transition__button choose-transition__button--separated${separated ? ' split split-right' : ''}`} 
              active={separated}
              content="éclatement" 
              onclick={this.handleClick} />
          </Link>
          <Link className={`choose-transition__link--grouped`} to={`/${this.props.theme}/projets/0`}>
            <Button 
              classes={`choose-transition__button choose-transition__button--grouped${separated ? ' split split-left' : ''}`} 
              active={grouped}
              content="translation" 
              onclick={this.handleClick} />
          </Link>
        </React.Fragment>}
      </div>
      )
  }
}

// export default ReactTimeout(ChooseTransition);
export default ChooseTransition;

ChooseTransition.propTypes = {
  };
