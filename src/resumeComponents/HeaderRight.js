import React, { Component } from 'react';
import resume from '../json/resume';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

let dictionary = {
  "faPhone": faPhone,
  "faEnvelope": faEnvelope,
  "faGlobe": faGlobe,
  "faLinkedinIn": faLinkedinIn,
  "faGithub": faGithub
}

class HeaderRight extends Component {
  render() {

    function spanOrLink(info) {
      if (info.type === "visual") {
        return <span className="contactInfo">{info.content}</span>
      } else {
        return <a className="contactInfo" href={`https://${info.content}`} target="_blank" rel="noopener noreferrer">{info.content}</a>
      }
    }

    function linkIcon(info) {
      if (info.type === "visual") {
        return (
          <FontAwesomeIcon className="icon" icon={dictionary[info.icon]} />
        );
      } else {
        return (
          <a href={`https://${info.content}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={dictionary[info.icon]} />
          </a>
        );
      }
    }

    return(
      <div id="headerRight" className="header">
        <ul className="contactPoints">
          {resume.contactPoints.map((info) => 
            <li key={info.content}>
              {linkIcon(info)}
              {spanOrLink(info)}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default HeaderRight;