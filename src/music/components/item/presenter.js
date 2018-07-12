import React from 'react';
import PropTypes from 'prop-types';

class MusicItemPresenter extends React.Component {
  constructor(props) {
    super(props);
    
    this.audioRef = null;

    this.setAudioRef = element => {
      this.audioRef = element;
    }
  }

  componentDidMount() {
    try {
      // Dispatch API Call Action
      this.props.getItem(this.props.match.params.id);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
     return (
      <div className="song">
        <h1 className="song__title">{this.props.name}</h1>
    
        <div className="information">
          <div className="information__item">
            <span className="information__key">Id: </span><span className="information__value">{this.props.id}</span>
          </div>
    
          <div className="information__item">
            <span className="information__key">{this.props.artist.length > 1 ? 'Artists' : 'Artist'}: </span>
            <ol className="information__value">
              {this.props.artist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
    
          <div className="information__item">
            <span className="information__key">{this.props.author.length > 1 ? 'Authors' : 'Author'}: </span>
            <ol className="information__value">
              {this.props.author.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
    
          <div className="information__item">
            <span className="information__key">URL: </span><span className="information__value">{this.props.url}</span>
          </div>
        </div>

        <audio controls key={this.props.url} ref={this.setAudioRef}>
          <source src={this.props.url} />
        </audio>
      </div>
    );
  }
}

MusicItemPresenter.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string
}

export { MusicItemPresenter };