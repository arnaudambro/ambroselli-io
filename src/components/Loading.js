import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from "react-svg-inline";
import AMask from '../img/letters/A-mask.svg';
import MMask from '../img/letters/M-mask.svg';
import BMask from '../img/letters/B-mask.svg';
import RMask from '../img/letters/R-mask.svg';
import OMask from '../img/letters/O-mask.svg';
import SMask from '../img/letters/S-mask.svg';
import EMask from '../img/letters/E-mask.svg';
import LMask from '../img/letters/L-mask.svg';
import IMask from '../img/letters/I-mask.svg';
import DotMask from '../img/letters/Dot-mask.svg';
import ALetter from '../img/letters/A.svg';
import MLetter from '../img/letters/M.svg';
import BLetter from '../img/letters/B.svg';
import RLetter from '../img/letters/R.svg';
import OLetter from '../img/letters/O.svg';
import SLetter from '../img/letters/S.svg';
import ELetter from '../img/letters/E.svg';
import LLetter from '../img/letters/L.svg';
import ILetter from '../img/letters/I.svg';
import DotLetter from '../img/letters/Dot.svg';
import ChooseTransition from './ChooseTransition';
import ReactTimeout from 'react-timeout'


class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskOrLetters: 'mask',
      transition: null
    };

    this.handleChooseTransition = this.handleChooseTransition.bind(this);
    this.randDir = this.randDir.bind(this);
  }



  componentDidMount() {
    this.props.setTimeout(() => {
      this.setState({ maskOrLetters: 'letters' });
      this.props.writingIsOver(true);
    }, this.props.writingDuration * 1000);
  }

  handleChooseTransition(transition) {
    this.setState({ transition: transition });
    this.props.transitionChosen(true);
    this.props.setTimeout(() => {
      this.props.animationOnGoing(false, this.state.transition);
    }, (this.props.movingDuration + this.props.timeoutDuration) * 1000);
  }


  randDir() {
    const number = Math.floor(Math.random() * 8);

    if (number === 0) {
      return 'split split-up'
    } else if (number === 1) {
      return 'split split-right'
    } else if (number === 2) {
      return 'split split-down'
    } else if (number === 3) {
      return 'split split-left'
    } else if (number === 4) {
      return 'split split-up-left'
    } else if (number === 5) {
      return 'split split-up-right'
    } else if (number === 6) {
      return 'split split-down-left'
    } else if (number === 7) {
      return 'split split-down-right'
    }
  }

  render() {

    const separated = this.state.transition === 'separated';
    const grouped = this.state.transition === 'grouped';

    return(

      <div 
        className={`logo${grouped ? ' loading-grouped' : ''}${separated ? ' separated' : ''}`} 
        >
        {this.state.maskOrLetters === 'mask' &&
          <div className="logo__letter">
            <SVGInline className='logo__letter--mask logo__letter--mask-a' svg={ AMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-m' svg={ MMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-b' svg={ BMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-r' svg={ RMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-o logo__letter--mask-o1' svg={ OMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-s' svg={ SMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-e' svg={ EMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-l logo__letter--mask-l1' svg={ LMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-l logo__letter--mask-l2' svg={ LMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-i logo__letter--mask-i1' svg={ IMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-dot' svg={ DotMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-i logo__letter--mask-i2' svg={ IMask }  />
            <SVGInline className='logo__letter--mask logo__letter--mask-o logo__letter--mask-o2' svg={ OMask }  />
          </div>
        }
        {this.state.maskOrLetters === 'letters' &&
          <div className="logo__letter animated">
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-a ${separated ? this.randDir() : ''}`} 
              svg={ ALetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-m ${separated ? this.randDir() : ''}`} 
              svg={ MLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-b ${separated ? this.randDir() : ''}`} 
              svg={ BLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-r ${separated ? this.randDir() : ''}`} 
              svg={ RLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-o ${separated ? this.randDir() : ''} logo__letter--letter-o1`} 
              svg={ OLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-s ${separated ? this.randDir() : ''}`} 
              svg={ SLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-e ${separated ? this.randDir() : ''}`} 
              svg={ ELetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-l ${separated ? this.randDir() : ''} logo__letter--letter-l1`} 
              svg={ LLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-l ${separated ? this.randDir() : ''} logo__letter--letter-l2`} 
              svg={ LLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-i ${separated ? this.randDir() : ''} logo__letter--letter-i1`} 
              svg={ ILetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-dot ${separated ? this.randDir() : ''}`} 
              svg={ DotLetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-i ${separated ? this.randDir() : ''} logo__letter--letter-i2`} 
              svg={ ILetter } />
            <SVGInline 
              className={`logo__letter--letter logo__letter--letter-o ${separated ? this.randDir() : ''} logo__letter--letter-o2`} 
              svg={ OLetter } />
          </div>
        }
        <ChooseTransition 
          theme={this.props.theme}
          display={this.state.maskOrLetters === 'letters' ? true : false}
          chooseTransition={this.handleChooseTransition}
        />
      </div>
      )
  }
}

Loading.propTypes = {
    animationOnGoing: PropTypes.func.isRequired,
    writingDuration: PropTypes.number.isRequired,
    movingDuration: PropTypes.number.isRequired,
    timeoutDuration: PropTypes.number.isRequired,
    writingIsOver: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default ReactTimeout(Loading);
