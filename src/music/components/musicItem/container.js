import { connect } from 'react-redux';

import MusicItemPresenter from './presenter';
import { doGetItem } from '../../actions/musicItemActions';

const mapStateToProps = state => ({
  id: state.music.item.id,
  name: state.music.item.name,
  artist: state.music.item.artist,
  author: state.music.item.author,
  url: state.music.item.url
});

const mapDispatchToProps = dispatch => ({
  doGetItem: id => {
    dispatch(doGetItem(id))
  }
});

const MusicItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicItemPresenter);

export default MusicItem;