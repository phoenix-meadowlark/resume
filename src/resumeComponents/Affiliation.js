import React, { Component } from 'react';
import PhraseList from './PhraseList';
import { Date } from "./Date";

export class Affiliation extends Component {
  render() {

    function handleLink(info) {
      if (info === undefined){
        return;
      }
      if (info.type === "visual") {
        return <span className="contactInfo">{info.content}</span>
      } else {
        return <a className="contactInfo" href={info.link} target="_blank" rel="noopener noreferrer">{info.content}</a>
      }
    }

    let subject = this.props.affiliation;
    let description;

    if (subject.hasOwnProperty("description")) {
      description = <PhraseList className="affiliationDescription" list={subject.description} />;
    }

    return (<div>

      <div className="item-row">
        <h3 className="subsectionTitle">{subject.title}</h3>
        <Date date={subject.date} />
      </div>

      {subject.info.map((pair) => (<div className="item-row" key={pair.primary.content}>
        <p className="primary">{handleLink(pair.primary)}</p>
        <p className="secondary">{handleLink(pair.secondary)}</p>
      </div>))}

      {description}

    </div>);
  }
}
