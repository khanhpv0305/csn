import React from 'react';
import PropTypes from 'prop-types';

class ItemPresenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return (

    // );
  }
}

ItemPresenter.propTypes = {
  isHasSongToPlay: PropTypes.bool.isRequired,
  url: PropTypes.string,
  name: PropTypes.string,
  artists: PropTypes.arrayOf(PropTypes.string),
  isMute: PropTypes.bool,
  isRepeat: PropTypes.bool
};