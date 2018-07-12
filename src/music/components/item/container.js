import { connect } from 'react-redux';

import { MusicItemPresenter } from './presenter';
import { getItem } from '../../actions/item';

const mapStateToProps = state => ({
  id: state.music.item.id,
  name: state.music.item.name,
  artist: state.music.item.artist,
  author: state.music.item.author,
  url: state.music.item.url
});

const mapDispatchToProps = dispatch => ({
  getItem: url => {
    dispatch(getItem(url))
  }
});

const MusicItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicItemPresenter);

export { MusicItem };