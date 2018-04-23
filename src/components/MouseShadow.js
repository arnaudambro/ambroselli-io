
import React from 'react';
import { Transition } from "react-transition-group";
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

const exitingTimeout = 4000;


class MouseShadow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseExists: false,
      mouseX: 0,
      mouseY: 0,
      circleRadius: 200,
      unmount: false,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);    
    this.handleReduceCircleRadius = this.handleReduceCircleRadius.bind(this);    
  }

  handleMouseMove(e) {
    this.setState({ mouseX: e.pageX - this.state.circleRadius / 2 });
    this.setState({ mouseY: e.pageY - this.state.circleRadius / 2 });
  }

  handleMouseEnter(e) {
    this.setState({ mouseExists : true });
    window.removeEventListener('mousemove', this.handleMouseEnter)
  }

  handleReduceCircleRadius() {
    this.setState({ mouseX: this.state.mouseX + this.state.circleRadius / 2 });
    this.setState({ mouseY: this.state.mouseY + this.state.circleRadius / 2 });
    this.setState({ circleRadius: 0 });
    this.props.setTimeout(() => { 
      this.setState({ unmount: true });
    }, (exitingTimeout + 1000) * this.props.duration);

  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mousemove', this.handleMouseEnter)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {

    const { start, duration } = this.props;
    const { mouseExists, mouseY, mouseX, circleRadius } = this.state;

    const defaultStyleScale = {
      transition: `transform ${this.props.duration}s linear`,
      transform: `scale(5)`,
    }

    const transitionStylesScale = {
      entering: { transform: `scale(5)` },
      entered: { transform: `scale(1)` },
      exiting: { transform: `scale(1)` },
      exited: { transform: `scale(1)` },
    };

    const defaultStyleScaleExitOnly = {
    }

    const transitionStylesExitOnly = {
      exiting: {  transition: `all ${this.props.duration}s linear`, },
      exited: {  },
    }

    const defaultStyleOpacity = {
      transition: `opacity ${this.props.duration}s ease-in-out`,
      opacity: 0,
    }

    const transitionStylesOpacity = {
      entering: { opacity: 0 },
      entered: { opacity: 0.95 },
      exiting: { opacity: 0.95 },
      exited: { opacity: 0 },
    };

    const circleStyle = {
      width: `${circleRadius}px`,
      height: `${circleRadius}px`,
      borderRadius: `50%`,
      /*top: `${mouseY}px`,
      left: `${mouseX}px`,*/
      top: 0,
      left: 0,
      transform: `translate3d(${mouseX}px,${mouseY}px,0)`,

    }


    return(
          <Transition 
            in={mouseExists && start} 
            timeout={{ enter: 0, exit: exitingTimeout * duration, }}
            onExit={this.handleReduceCircleRadius}
            mountOnEnter={true}
            unmountOnExit={this.state.unmount}
            >
              {(state) => {

                return (
                  <div 
                    className="blend-multiply full-size"
                    style={{  ...defaultStyleOpacity, ...transitionStylesOpacity[state]}}
                  >
                    <div 
                      className="blend-screen element-mask full-size"
                      style={{ 
                        ...defaultStyleScale, 
                        ...transitionStylesScale[state],
                      }}
                    > 
                        <span 
                          id="circle" 
                          className="circle-follow" 
                          style={{ 
                            ...circleStyle, 
                            ...defaultStyleScaleExitOnly,
                            ...transitionStylesExitOnly[state],
                          }} >
                        </span>
                    </div>
                  </div>
              )}}
          </Transition>
    )
  }
}

MouseShadow.propTypes = {
  start: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};

export default ReactTimeout(MouseShadow);
