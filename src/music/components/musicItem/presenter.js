import React from 'react';
import PropTypes from 'prop-types';

const MusicItemPresenter = ({ id, name, artist, author, url }) => (
  <div className="song">
    <h1 className="song__title">{name}</h1>

    <div className="information">
      <div className="information__item">
        <span className="information__key">Id: </span><span className="information__value">{id}</span>
      </div>

      <div className="information__item">
        <span className="information__key">{artist.length > 1 ? 'Artists' : 'Artist'}: </span>
        <ol className="information__value">
          {artist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="information__item">
        <span className="information__key">{author.length > 1 ? 'Authors' : 'Author'}: </span>
        <ol className="information__value">
          {author.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="information__item">
        <span className="information__key">URL: </span><span className="information__value">{url}</span>
      </div>
    </div>
  </div>
);

MusicItemPresenter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired
}

export default MusicItemPresenter;