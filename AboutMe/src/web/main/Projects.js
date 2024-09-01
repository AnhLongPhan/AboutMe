import React from 'react';
import ShowProject from './project/ShowProject';



class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Projects</h3>
            <p className="section-description">Brief description of project information</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="projects-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-api">Long-term</li>
                <li data-filter=".filter-api">Sort-term</li>
                <li data-filter=".filter-api">API</li>
                <li data-filter=".filter-web">Web</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-other">Other</li>
              </ul>
            </div>
          </div>

          <div className="row projects-container" data-aos="fade-up" data-aos-delay="200">

            <ShowProject type='app' number='1'/>
            <ShowProject type='app' number='2'/>

            <ShowProject type='web' number='1'/>
            <ShowProject type='web' number='2'/>

            <ShowProject type='api' number='1'/>
            <ShowProject type='api' number='2'/>

            <ShowProject type='other' number='1'/>
            <ShowProject type='other' number='2'/>

          </div>

        </div>
      </section>

    );
  }
}

export default Projects;