import React, { Component } from 'react';
import resume from '../json/resume';
import InlineList from './InlineList';
import TerseList from './TerseList';
import PhraseList from './PhraseList';
import SubtitledPhraseList from './SubtitledPhraseList';
import { Affiliation } from './Affiliation';

class BodyLeft extends Component {
  render() {
    return(
      <div id="bodyLeft" className="body">
        <Skills/>
        <Strengths/>
        <Honors/>
        <section>
          <h2 className="sectionTitle">Volunteer Work</h2>

          <div className="affiliations">
            
            <Affiliation affiliation={resume.affiliations.qpp} />
            <Affiliation affiliation={resume.affiliations.divCom} />

          </div>
        </section>

        {/* <section>
          <h2 className="sectionTitle note">Designed with JSX/SASS</h2>
        </section> */}
      </div>
    );
  }
}

class Honors extends Component {
  render() {
    return (
      <section>
        <h2 className="sectionTitle">{resume.honors.header}</h2>
        <SubtitledPhraseList input={resume.honors}/>
      </section>
    );
  }
}

class Strengths extends Component {
  render() {
    return (
      <section>
        <h2 className="sectionTitle">{resume.strengths.header}</h2>
        <PhraseList list={resume.strengths.content}/>
      </section>
    );
  }
}

class Skills extends Component {
  render() {
    return(
      <section className="skills">
        <h2 className="sectionTitle">{resume.skills.header}</h2>

        <TerseList input={resume.skills.content[0]}/>
        <TerseList input={resume.skills.content[1]}/>
        {/* <InlineList input={resume.skills.content[2]}/> */}
        
      </section>
    );
  }
}

export default BodyLeft;