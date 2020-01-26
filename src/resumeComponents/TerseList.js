import React, { Component } from 'react';

// Expects a prop called input that may or may not have a header, and has
// an array of strings named content.
class TerseList extends Component {
  render() {
    let header;
    let input = this.props.input;

    if (input.hasOwnProperty("header")) {
      header = <h3 className="subsectionTitle">{input.header}</h3>
    }

    return(
      <div>
        {header}
        <ul>
          {input.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TerseList;