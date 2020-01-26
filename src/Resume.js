import React, { Component } from 'react';
import './css/resume.css';
import BodyLeft from './resumeComponents/BodyLeft';
import BodyRight from './resumeComponents/BodyRight';
import HeaderLeft from './resumeComponents/HeaderRight';
import HeaderRight from'./resumeComponents/HeaderLeft';

class Resume extends Component {
  componentDidMount(){
    document.title = "Resume | Phoenix Meadowlark"
  }
  
  render() {
    return (
      <main id="resumeGrid">
        <HeaderRight/>
        <HeaderLeft/>
        <BodyLeft/>
        <BodyRight/>
      </main>
    );
  }
}

export default Resume;
