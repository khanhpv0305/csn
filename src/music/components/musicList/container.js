import { connect } from 'react-redux';

import { doGetAll } from '../../actions/musicListActions';
import MusicListPresenter from './presenter';

const mapStateToProps = state => ({
  hot: state.music.list.hot,
  news: state.music.list.news
});

const mapDispatchToProps = dispatch => ({
  doGetAll: dispatch(doGetAll())
});

const MusicList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicListPresenter);

export default MusicList;