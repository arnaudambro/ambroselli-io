import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import pictures from '../data/pics';
import ReactTimeout from 'react-timeout'
// import { CSSTransitionGroup } from 'react-transition-group';


class Projets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entering: true,
      overing: false,
      leftMoving: true,
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleProjetClick = this.handleProjetClick.bind(this);
  }

  componentWillMount() {
    const projetId = parseInt(this.props.match.params.id, 10)
    this.setState({ projetId: projetId })
    this.setState({ leftMoving: projetId % 2 === 0 })
  }

  handleHover(event) {
    let toggle;
    if (event.type === 'mouseover') {
      if (this.state.overing) {
        return;
      } else {
        toggle = true;
      }
    } else {
      toggle = event.type === 'mouseenter'
    }
    this.setState({ overing: toggle });
  }

  handleProjetClick(projet) {
    this.props.prepareProjet(true, false, projet);
    this.props.setTimeout(() => {this.props.loadProjet(true, true, projet)}, 100);
  }

  componentDidMount() {
    this.props.setTimeout(() => {
      this.setState({ entering: false });
      this.props.firstTimeOver();
    }, this.props.durations * 1000);
  }




  render() {


    const { entering, overing, leftMoving, projetId } = this.state;
    const projet = Object.keys(pictures)[projetId];

    const overingLeftSide = overing && leftMoving;
    const overingRightSide = overing && !leftMoving;

    /*------------------------------------*\
        STYLES
    \*------------------------------------*/

    const mainProjetsStyle = {
      '--transitionDuration': this.props.durations,
    }

    const mainProjetsHeroStyle = { 
      overflow: `${(entering ? 'visible' : 'hidden')}` 
    };

    const mainProjetsDescriptionStyle = {
      opacity: `${entering ? 0 : (overing ? 1 : (window.matchMedia("(max-width: 1000px)").matches ? '' : 0))}`,
      transform: `${overing 
        ? (leftMoving ? 'translateX(-5vw)' : 'translateX(5vw)')
        : (leftMoving ? 'translateX(0)' : 'translateX(0)')}`,
      margin: `${leftMoving ? '0 0 10vh 0' : '10vh 0 0 0'}`,
      top: `${!leftMoving ? '0' : 'auto'}`,
      right: `${!leftMoving ? '0' : 'auto'}`,
      bottom: `${leftMoving ? '0' : 'auto'}`,
      left: `${leftMoving ? '0' : 'auto'}`,
      textAlign: `${leftMoving ? 'left' : 'right'}`
    };

    const callToClickStyle = {
      textAlign: `${!leftMoving ? 'left' : 'right'}`,
      // opacity: `${overing ? 1 : 0}`,
      justifySelf: `${!leftMoving ? 'start' : 'end'}`,
      direction: `${!leftMoving ? '' : 'rtl'}`
    };

    const maskStyle = { 
      display: `${(entering ? 'block' : 'none')}`
    };

    /*------------------------------------*\
        CLASSES
    \*------------------------------------*/

    const enterSeparated = (this.props.movingTransition === 'separated') && this.props.firstTime;

    const picTopLeftClasses = `main__projets--pic main__projets--pic-left-up ${enterSeparated ? 'enter-from-right ' : ''}`;
    const picBottomLeftClasses = `main__projets--pic main__projets--pic-left-down ${enterSeparated ? 'enter-from-up ' : ''}`;
    const picTopRightClasses = `main__projets--pic main__projets--pic-right-up ${enterSeparated ? 'enter-from-down ' : ''}`;
    const picBottomRightClasses = `main__projets--pic main__projets--pic-right-down ${enterSeparated ? 'enter-from-left ' : ''}`;

    /*------------------------------------*\
        LAYOUT
    \*------------------------------------*/

    return(
      <div 
        className="main main__projets" 
        
        style={mainProjetsStyle}>
        <div 
          className="main__projets--hero"
          style={mainProjetsHeroStyle}
          onMouseEnter={this.handleHover}
          onMouseOver={this.handleHover}
          onMouseLeave={this.handleHover} >
          <div 
            className={`main__projets--left main__projets--content  ${overingLeftSide ? 'active' : ''} `}
            style={{ pointerEvents: `${'auto'}`}}
            onClick={() => this.handleProjetClick(projetId)}>
              <div 
                className={`${picTopLeftClasses}${pictures[`${projet}`].classes}${this.props.theme} ${leftMoving ? 'transit-from-left ' : 'transit-from-down '}`} >
              </div>
              <div 
                className={`${picBottomLeftClasses}${pictures[`${projet}`].classes}${this.props.theme} ${leftMoving ? 'transit-from-left ' : 'transit-from-down '}`} >
              </div>
          </div>
          <div  
            className={`main__projets--right main__projets--content  ${overingRightSide ? 'active' : ''} `}
            style={{ pointerEvents: `${'auto'}`}}
            onClick={() => this.handleProjetClick(projetId)}>
              <div  
                className={`${picTopRightClasses}${pictures[`${projet}`].classes}${this.props.theme} ${leftMoving ? 'transit-from-up ' : 'transit-from-right '}`} >
              </div>
              <div 
                className={`${picBottomRightClasses}${pictures[`${projet}`].classes}${this.props.theme} ${leftMoving ? 'transit-from-up ' : 'transit-from-right '}`} >
              </div>
          </div>
        </div>
        <div 
          className="main__projets--description"
          style={mainProjetsDescriptionStyle}
          onClick={() => this.handleProjetClick(projetId)}>
          <div className="title">{pictures[`${projet}`].name}</div>
          {/*<div className="description" dangerouslySetInnerHTML={pictures[`${projet}`].description} ></div>*/}
          <div className={`divider ${overing ? 'active' : ''}`}></div>
          <div 
            className={`call-to-click ${overing ? 'active' : ''}`}
            style={callToClickStyle}>Voir le site</div>
        </div>

        <div 
          className="main__projets--mask-center"
          style={maskStyle} >
        </div>

      </div>
      )
  }
}



Projets.propTypes = {

};

export default ReactTimeout(Projets);
