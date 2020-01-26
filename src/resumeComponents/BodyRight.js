import React, { Component } from 'react';
import resume from '../json/resume';
import { Affiliation } from './Affiliation';

class BodyRight extends Component {
  render() {
    return(
      <div id="bodyRight" className="body">

        <section>
          <h2 className="sectionTitle">Experience</h2>

          <div className="affiliations">
            <Affiliation affiliation={resume.affiliations.google} />
            <Affiliation affiliation={resume.affiliations.cnt} />
            <Affiliation affiliation={resume.affiliations.opto} />

          </div>
        </section>
        
        <section>
          <h2 className="sectionTitle">Projects</h2>

          <div className="affiliations">
            <Affiliation affiliation={resume.affiliations.lostInTheMargins} />
            {/* <Affiliation affiliation={resume.affiliations.policyGradientImplementationTutorial} /> */}
            {/* <Affiliation affiliation={resume.affiliations.markdownLanguage} /> */}
          </div>
        </section>

        <section>
          <h2 className="sectionTitle">Education</h2>
          
          <div className="affiliations">

            <Affiliation affiliation={resume.affiliations.uw}/>

          </div>
        </section>

        {/* <section>
          <h2 className="sectionTitle">Volunteer Work</h2>

          <div className="affiliations">
            
            <Affiliation affiliation={resume.affiliations.qpp} />
            <Affiliation affiliation={resume.affiliations.divCom} />

          </div>
        </section> */}
      </div>
    );
  }
}

export default BodyRight;