import React from 'react';
import Person from './person/Person.js'
import imgLeader from '../../../public/assets/img/person/leader-img.jpg';
import imgAccountant from '../../../public/assets/img/person/accountant-img.jpg';
import imgBackend from '../../../public/assets/img/person/backend-img.jpg';
import imgFrontEnd from '../../../public/assets/img/person/frontend-img.jpg';

class Team extends React.Component {
  render() {
    return (
      <section id="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Team</h3>
            <p className="section-description">This is my team</p>
          </div>
          <div className="row">
            <Person image={imgLeader} name="LUCAS PHAN" role="Leader"/>

            <Person image={imgAccountant} name="Accountant" role="Accountant"/>

            <Person image={imgBackend} name="Backend" role="Backend Developer"/>

            <Person image={imgFrontEnd} name="Frontend" role="Frontend Developer"/>

          </div>

        </div>
      </section>
    );
  }
}

export default Team;