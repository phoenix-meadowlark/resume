import React, { Component } from 'react';

// Expects a prop called input that may or may not have a header, and has
// an array of strings named content.
class InlineList extends Component {
  render() {
    let header;
    let display = '';
    let input = this.props.input;

    if (input.hasOwnProperty("header")) {
      header = <h3 className="subsectionTitle">{input.header}</h3>
    }

    for (let i = 0; i < input.content.length; i++) {
      display += input.content[i];
      if (i !== input.content.length - 1) {
        display += '<span class="separator"> // </span>'
      }
    }

    return (
      <div className="tools">
        {header}
        <ul className="h-list">
          <li dangerouslySetInnerHTML={{__html: display}}></li>
        </ul>
      </div>
    );
  }
}

export default InlineList;