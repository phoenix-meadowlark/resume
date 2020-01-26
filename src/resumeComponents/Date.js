import React, { Component } from 'react';

export class Date extends Component {
  render() {
    let date = this.props.date;
    let dash = '–';
    if (date.start.month === "" && date.start.year === '') {
      dash = '';
    }

    return (<p className="secondary">
      {date.start.month}<Period display={date.start.month !== ""}/>{date.start.year} {dash} {date.end.month}<Period display={date.end.month !== ""}/>{date.end.year}
    </p>);
  }
}

class Period extends Component {
  render() {
    if (this.props.display) {
      let innerHTML = '<span class="ensmall"> </span>.<span class="ensmall"> </span>';
      return (<span dangerouslySetInnerHTML={{ __html: innerHTML }} />)
    } else {
      return null;
    }
  }
}
