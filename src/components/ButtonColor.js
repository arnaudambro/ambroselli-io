import React from 'react';
//import PropTypes from 'prop-types';


export default class ButtonColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.changeColors(this.props.colors, this.props.theme);
  }



  render() {

    const { bgColor, mainFontColor } = this.props.colors;

    return(
        <div 
          className="button__color--bgcolor" 
          onClick={this.handleClick}
          style={{ backgroundColor: `rgba(${bgColor[0]},${bgColor[1]},${bgColor[2]},${bgColor[3]})`}}>
          <div 
            className="button__color--maincolor"
            style={{ backgroundColor: `rgba(${mainFontColor[0]},${mainFontColor[1]},${mainFontColor[2]},${mainFontColor[3]})`}}></div>
        </div>
    )
  }
}

ButtonColor.propTypes = {

};
