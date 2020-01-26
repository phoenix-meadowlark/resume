import React, { Component } from 'react';

// Expects a prop called input that has an array of strings named content.
class PhraseList extends Component {
  render() {
    return (
      <ul className={`phraseList ${ this.props.className }`}>
        {this.props.list.map((phrase) => (
          <li className="phrase" key={phrase}>{phrase}</li>
        ))}
      </ul>
    );
  }
}

export default PhraseList;