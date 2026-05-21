import React from 'react';
import { about } from '../../data/profile';

const { objective, traits } = about;

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="row about-container">

            <div className="col-lg-6 content order-lg-1 order-2">
              <h2 className="title">About Me</h2>
              <p>{objective}</p>

              {traits.map(item => (
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100" key={item.id}>
                  <div className="icon"><i className={item.icon}></i></div>
                  <h4 className="title"><a href="">{item.title}</a></h4>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
