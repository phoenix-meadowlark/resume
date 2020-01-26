import React, { Component } from 'react';
import resume from '../json/resume';

class HeaderLeft extends Component {
  render() {
    return(
      <div id="headerLeft" className="header">

          <h1 className="name">
            <span className="first">{resume.firstName}</span> <span className="last">{resume.lastName}</span>
          </h1>
          
          <h2 className="title">
            {resume.title}
          </h2>

      </div>
    );
  }
}

export default HeaderLeft;