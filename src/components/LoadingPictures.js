import React from 'react';

import vernet_top_left from '../img/projets/vernet/vernet-top-left.png';
import vernet_top_left_small from '../img/projets/vernet/vernet-top-left-small.png';
import vernet_bottom_left from '../img/projets/vernet/vernet-bottom-left.png';
import vernet_bottom_left_small from '../img/projets/vernet/vernet-bottom-left-small.png';
import vernet_top_right from '../img/projets/vernet/vernet-top-right.png';
import vernet_top_right_small from '../img/projets/vernet/vernet-top-right-small.png';
import vernet_bottom_right from '../img/projets/vernet/vernet-bottom-right.png';
import vernet_bottom_right_small from '../img/projets/vernet/vernet-bottom-right-small.png';
import brach_top_left from '../img/projets/brach-presite/brach-top-left.png';
import brach_top_left_small from '../img/projets/brach-presite/brach-top-left-small.png';
import brach_bottom_left from '../img/projets/brach-presite/brach-bottom-left.png';
import brach_bottom_left_small from '../img/projets/brach-presite/brach-bottom-left-small.png';
import brach_top_right from '../img/projets/brach-presite/brach-top-right.png';
import brach_top_right_small from '../img/projets/brach-presite/brach-top-right-small.png';
import brach_bottom_right from '../img/projets/brach-presite/brach-bottom-right.png';
import brach_bottom_right_small from '../img/projets/brach-presite/brach-bottom-right-small.png';
import adt_top_left from '../img/projets/adt/adt-top-left.png';
import adt_bottom_left from '../img/projets/adt/adt-bottom-left.png';
import adt_top_right from '../img/projets/adt/adt-top-right.png';
import adt_bottom_right from '../img/projets/adt/adt-bottom-right.png';
import argos_top_left from '../img/projets/argos/argos-top-left.png';
import argos_top_left_small from '../img/projets/argos/argos-top-left-small.png';
import argos_bottom_left from '../img/projets/argos/argos-bottom-left.png';
import argos_bottom_left_small from '../img/projets/argos/argos-bottom-left-small.png';
import argos_top_right from '../img/projets/argos/argos-top-right.png';
import argos_top_right_small from '../img/projets/argos/argos-top-right-small.png';
import argos_bottom_right from '../img/projets/argos/argos-bottom-right.png';
import argos_bottom_right_small from '../img/projets/argos/argos-bottom-right-small.png';
import ambroselli_io_black_top_left from '../img/projets/ambroselli-io/ambroselli-black-top-left.png';
import ambroselli_io_black_top_left_small from '../img/projets/ambroselli-io/ambroselli-black-top-left-small.png';
import ambroselli_io_black_bottom_left from '../img/projets/ambroselli-io/ambroselli-black-bottom-left.png';
import ambroselli_io_black_bottom_left_small from '../img/projets/ambroselli-io/ambroselli-black-bottom-left-small.png';
import ambroselli_io_black_top_right from '../img/projets/ambroselli-io/ambroselli-black-top-right.png';
import ambroselli_io_black_top_right_small from '../img/projets/ambroselli-io/ambroselli-black-top-right-small.png';
import ambroselli_io_black_bottom_right from '../img/projets/ambroselli-io/ambroselli-black-bottom-right.png';
import ambroselli_io_black_bottom_right_small from '../img/projets/ambroselli-io/ambroselli-black-bottom-right-small.png';
import ambroselli_io_white_top_left from '../img/projets/ambroselli-io/ambroselli-white-top-left.png';
import ambroselli_io_white_top_left_small from '../img/projets/ambroselli-io/ambroselli-white-top-left-small.png';
import ambroselli_io_white_bottom_left from '../img/projets/ambroselli-io/ambroselli-white-bottom-left.png';
import ambroselli_io_white_bottom_left_small from '../img/projets/ambroselli-io/ambroselli-white-bottom-left-small.png';
import ambroselli_io_white_top_right from '../img/projets/ambroselli-io/ambroselli-white-top-right.png';
import ambroselli_io_white_top_right_small from '../img/projets/ambroselli-io/ambroselli-white-top-right-small.png';
import ambroselli_io_white_bottom_right from '../img/projets/ambroselli-io/ambroselli-white-bottom-right.png';
import ambroselli_io_white_bottom_right_small from '../img/projets/ambroselli-io/ambroselli-white-bottom-right-small.png';
import react_swipe_to_delete_ios_bottom_right from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-bottom-right.png';
import react_swipe_to_delete_ios_bottom_left from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-bottom-left.png';
import react_swipe_to_delete_ios_top_left from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-top-left.png';
import react_swipe_to_delete_ios_top_right from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-top-right.png';

// import PropTypes from 'prop-types';

class LoadingPictures extends React.Component {
  state = {
    load: 0,
    now: Date.now()
  };

  handleLoad = () => {
    this.setState({ load: this.state.load + 1 });
    /*console.log(`picture ${this.state.load}:`, Date.now() - this.state.now);*/
  };
  /*anyRef = React.createRef()*/
  /*anyFunction = (argument) => {}*/

  render() {
    return (
      <div
        className={``}
        style={{ position: 'absolute', visibility: 'hidden', zIndex: -10 }}
      >
        {this.state.load === 0 && (
          <img src={vernet_top_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 1 && (
          <img src={vernet_top_left_small} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 2 && (
          <img src={vernet_bottom_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 3 && (
          <img
            src={vernet_bottom_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 4 && (
          <img src={vernet_top_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 5 && (
          <img
            src={vernet_top_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 6 && (
          <img src={vernet_bottom_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 7 && (
          <img
            src={vernet_bottom_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 8 && (
          <img src={brach_top_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 9 && (
          <img src={brach_top_left_small} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 10 && (
          <img src={brach_bottom_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 11 && (
          <img
            src={brach_bottom_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 12 && (
          <img src={brach_top_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 13 && (
          <img src={brach_top_right_small} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 14 && (
          <img src={brach_bottom_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 15 && (
          <img
            src={brach_bottom_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 16 && (
          <img src={adt_top_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 17 && (
          <img src={adt_bottom_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 18 && (
          <img src={adt_top_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 19 && (
          <img src={adt_bottom_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 20 && (
          <img src={argos_top_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 21 && (
          <img src={argos_top_left_small} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 22 && (
          <img src={argos_bottom_left} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 23 && (
          <img
            src={argos_bottom_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 24 && (
          <img src={argos_top_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 25 && (
          <img src={argos_top_right_small} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 26 && (
          <img src={argos_bottom_right} alt="pic" onLoad={this.handleLoad} />
        )}
        {this.state.load === 27 && (
          <img
            src={argos_bottom_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 28 && (
          <img
            src={ambroselli_io_black_top_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 29 && (
          <img
            src={ambroselli_io_black_top_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 30 && (
          <img
            src={ambroselli_io_black_bottom_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 31 && (
          <img
            src={ambroselli_io_black_bottom_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 32 && (
          <img
            src={ambroselli_io_black_top_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 33 && (
          <img
            src={ambroselli_io_black_top_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 34 && (
          <img
            src={ambroselli_io_black_bottom_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 35 && (
          <img
            src={ambroselli_io_black_bottom_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 36 && (
          <img
            src={ambroselli_io_white_top_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 37 && (
          <img
            src={ambroselli_io_white_top_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 38 && (
          <img
            src={ambroselli_io_white_bottom_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 39 && (
          <img
            src={ambroselli_io_white_bottom_left_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 40 && (
          <img
            src={ambroselli_io_white_top_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 41 && (
          <img
            src={ambroselli_io_white_top_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 42 && (
          <img
            src={ambroselli_io_white_bottom_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 43 && (
          <img
            src={ambroselli_io_white_bottom_right_small}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 44 && (
          <img
            src={react_swipe_to_delete_ios_bottom_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 45 && (
          <img
            src={react_swipe_to_delete_ios_bottom_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 46 && (
          <img
            src={react_swipe_to_delete_ios_top_left}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
        {this.state.load === 47 && (
          <img
            src={react_swipe_to_delete_ios_top_right}
            alt="pic"
            onLoad={this.handleLoad}
          />
        )}
      </div>
    );
  }
}

LoadingPictures.propTypes = {};

LoadingPictures.defaultProps = {};

export default LoadingPictures;
