import React from 'react';
import PropTypes from 'prop-types';

const MusicListPresenter = ({ hot, news }) => (
  <div>
    <h1>Hot</h1>
    <div className="music-list">
      <div className="music-list__title">US - UK</div>

      {hot.usUk.map(song => (
        <a href={song.url} key={song.id}>{song.name}</a>
      ))}
    </div>

    <div className="music-list">
      <div className="music-list__title">VN</div>

      {hot.vn.map(song => (
        <a href={song.url} key={song.id}>{song.name}</a>
      ))}
    </div>

    <div className="music-list">
      <div className="music-list__title">KR</div>

      {hot.kr.map(song => (
        <a href={song.url} key={song.id}>{song.name}</a>
      ))}
    </div>

    <h1>News</h1>
    {news.map(song => {
      <a href={song.url} key={song.id}>{song.name}</a>
    })}
  </div>
);

MusicListPresenter.propTypes = {
  hot: PropTypes.objectOf(
    PropTypes.shape({
      usUk: PropTypes.array.isRequired,
      vn: PropTypes.array.isRequired,
      kr: PropTypes.array.isRequired
    })
  ),
  news: PropTypes.array.isRequired
}

export default MusicListPresenter;