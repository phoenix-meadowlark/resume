import React, { Component } from 'react';

class SubtitledPhraseList extends Component {
  render() {
    return (
      <ul className="phraseList">
        {this.props.input.content.map((pair) => (
          <div className="phrase" key={pair.primary}>
            <li className="primary">{pair.primary}</li>
            <li className="secondary">{pair.secondary}</li>
          </div>
        ))}
      </ul>
    );
  }
}

export default SubtitledPhraseList;