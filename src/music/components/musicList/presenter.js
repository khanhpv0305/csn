import React from 'react';
import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';

import './style.scss';

const MusicListPresenter = ({ hot, news }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="music-list col-md-3">
          <div className="music-list__title">US - UK</div>
  
          <div className="music-list__list">
            {hot.usUk.map(song => (
              <a className="song" href={`/#/song/${Base64.encode(song.url)}`} key={song.id}>{song.name}</a>
            ))}
          </div>
        </div>
  
        <div className="music-list col-md-3">
          <div className="music-list__title">VN</div>
  
          <div className="music-list__list">
            {hot.vn.map(song => (
              <a className="song" href={`/#/song/${Base64.encode(song.url)}`} key={song.id}>{song.name}</a>
            ))}
          </div>
        </div>
  
        <div className="music-list col-md-3">
          <div className="music-list__title">KR</div>
  
          <div className="music-list__list">
            {hot.kr.map(song => (
              <a className="song" href={`/#/song/${Base64.encode(song.url)}`} key={song.id}>{song.name}</a>
            ))}
          </div>
        </div>
  
        <div className="music-list col-md-3">
          <div className="music-list__title">News</div>
  
          <div className="music-list__list">
            {news.map(song => (
              <a className="song" href={`/#/song/${Base64.encode(song.url)}`} key={song.id}>{song.name}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// MusicListPresenter.propTypes = {
//   hot: PropTypes.objectOf({
//     usUk: PropTypes.array.isRequired,
//     vn: PropTypes.array.isRequired,
//     kr: PropTypes.array.isRequired
//   }),
//   news: PropTypes.array.isRequired
// }

export { MusicListPresenter };