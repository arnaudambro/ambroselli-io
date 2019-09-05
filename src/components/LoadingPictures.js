import React from 'react';

import vernet_top_left from '../img/projets/vernet/vernet-top-left.png';
import vernet_bottom_left from '../img/projets/vernet/vernet-bottom-left.png';
import vernet_top_right from '../img/projets/vernet/vernet-top-right.png';
import vernet_bottom_right from '../img/projets/vernet/vernet-bottom-right.png';
import brach_top_left from '../img/projets/brach-presite/brach-top-left.png';
import brach_bottom_left from '../img/projets/brach-presite/brach-bottom-left.png';
import brach_top_right from '../img/projets/brach-presite/brach-top-right.png';
import brach_bottom_right from '../img/projets/brach-presite/brach-bottom-right.png';
import adt_top_left from '../img/projets/adt/adt-top-left.png';
import adt_bottom_left from '../img/projets/adt/adt-bottom-left.png';
import adt_top_right from '../img/projets/adt/adt-top-right.png';
import adt_bottom_right from '../img/projets/adt/adt-bottom-right.png';
import argos_top_left from '../img/projets/argos/argos-top-left.png';
import argos_bottom_left from '../img/projets/argos/argos-bottom-left.png';
import argos_top_right from '../img/projets/argos/argos-top-right.png';
import argos_bottom_right from '../img/projets/argos/argos-bottom-right.png';
import ambroselli_io_black_top_left from '../img/projets/ambroselli-io/ambroselli-black-top-left.png';
import ambroselli_io_black_bottom_left from '../img/projets/ambroselli-io/ambroselli-black-bottom-left.png';
import ambroselli_io_black_top_right from '../img/projets/ambroselli-io/ambroselli-black-top-right.png';
import ambroselli_io_black_bottom_right from '../img/projets/ambroselli-io/ambroselli-black-bottom-right.png';
import ambroselli_io_white_top_left from '../img/projets/ambroselli-io/ambroselli-white-top-left.png';
import ambroselli_io_white_bottom_left from '../img/projets/ambroselli-io/ambroselli-white-bottom-left.png';
import ambroselli_io_white_top_right from '../img/projets/ambroselli-io/ambroselli-white-top-right.png';
import ambroselli_io_white_bottom_right from '../img/projets/ambroselli-io/ambroselli-white-bottom-right.png';
import react_swipe_to_delete_ios_bottom_right from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-bottom-right.png';
import react_swipe_to_delete_ios_bottom_left from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-bottom-left.png';
import react_swipe_to_delete_ios_top_left from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-top-left.png';
import react_swipe_to_delete_ios_top_right from '../img/projets/react-swipe-to-delete-ios/react-swipe-to-delete-ios-top-right.png';
import adbuilder_bottom_right from '../img/projets/adbuilder/adbuilder-bottom-right.png';
import adbuilder_bottom_left from '../img/projets/adbuilder/adbuilder-bottom-left.png';
import adbuilder_top_left from '../img/projets/adbuilder/adbuilder-top-left.png';
import adbuilder_top_right from '../img/projets/adbuilder/adbuilder-top-right.png';
import broadcast_bottom_right from '../img/projets/broadcast/broadcast-bottom-right.png';
import broadcast_bottom_left from '../img/projets/broadcast/broadcast-bottom-left.png';
import broadcast_top_left from '../img/projets/broadcast/broadcast-top-left.png';
import broadcast_top_right from '../img/projets/broadcast/broadcast-top-right.png';

const images = [
  vernet_top_left,
  vernet_bottom_left,
  vernet_top_right,
  vernet_bottom_right,
  brach_top_left,
  brach_bottom_left,
  brach_top_right,
  brach_bottom_right,
  adt_top_left,
  adt_bottom_left,
  adt_top_right,
  adt_bottom_right,
  argos_top_left,
  argos_bottom_left,
  argos_top_right,
  argos_bottom_right,
  ambroselli_io_black_top_left,
  ambroselli_io_black_bottom_left,
  ambroselli_io_black_top_right,
  ambroselli_io_black_bottom_right,
  ambroselli_io_white_top_left,
  ambroselli_io_white_bottom_left,
  ambroselli_io_white_top_right,
  ambroselli_io_white_bottom_right,
  react_swipe_to_delete_ios_bottom_right,
  react_swipe_to_delete_ios_bottom_left,
  react_swipe_to_delete_ios_top_left,
  react_swipe_to_delete_ios_top_right,
  adbuilder_bottom_right,
  adbuilder_bottom_left,
  adbuilder_top_left,
  adbuilder_top_right,
  broadcast_bottom_right,
  broadcast_bottom_left,
  broadcast_top_left,
  broadcast_top_right
];

class LoadingPictures extends React.Component {
  state = {
    load: 0,
    now: Date.now()
  };

  handleLoad = () => {
    this.setState({ load: this.state.load + 1 });
  };

  render() {
    return (
      <div style={{ position: 'absolute', visibility: 'hidden', zIndex: -10 }}>
        {images.map((src, ind) => {
          if (this.state.load !== ind) return null;
          return <img key={ind} src={src} alt="pic" onLoad={this.handleLoad} />;
        })}
      </div>
    );
  }
}

export default LoadingPictures;
