// Lib
import { connect } from 'react-redux';

import { getList } from '../../actions/list';
import { MusicListPresenter } from './presenter';
import { getMusicList } from './selectors';

const mapStateToProps = state => ({
  ...getMusicList(state)
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
});

const MusicList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicListPresenter);

export { MusicList };