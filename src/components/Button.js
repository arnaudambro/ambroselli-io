import React from 'react';
// import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionDuration: 0.25,
      position: {},
      hovering: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateButtonPosition = this.updateButtonPosition.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.button = React.createRef();
  }

  handleClick(event) {
    this.setState({ hovering: false });
    this.props.onclick(event);
  }

  componentDidMount() {
    this.updateButtonPosition();
    window.addEventListener('resize', this.updateButtonPosition);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateButtonPosition);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  updateButtonPosition() {
    const rect = this.button.current.getBoundingClientRect(); 
    this.setState({ position: {
      top: Math.floor(rect.top) - 5,
      left: Math.floor(rect.left) - 5,
      bottom: Math.floor(rect.bottom) + 5,
      right: Math.floor(rect.right) + 5,
    }});
  }


  handleMouseMove(e) {
    const { top, left, bottom, right } = this.state.position;
    if (e.pageX < right && e.pageX > left && e.pageY < bottom && e.pageY > top && !this.state.hovering) {
      this.setState({ hovering: true });
      return;
    } else if (e.pageX < right && e.pageX > left && e.pageY < bottom && e.pageY > top && this.state.hovering) {
      return
    } else if (this.state.hovering) {
      this.setState({ hovering: false })
      return;
    } else {
      return;
    }
  }

  render() {

    return(
      <button 
        className={`${this.props.active ? 'active' : ''} ${this.props.classes}`}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        style={{ '--borderTransitionDuration': this.state.transitionDuration, zIndex: this.state.hovering && 10000 }}
        ref={this.button} >
        {this.props.content}
      </button>
      )
  }
}

Button.propTypes = {

  };
