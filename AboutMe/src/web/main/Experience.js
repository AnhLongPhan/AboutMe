import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <>
        <section id="experience">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Experience</h3>
              <p className="section-description">Backend, Web developer</p>
            </div>
            <div className="row counters">

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
                <h4>LANGUAGE:</h4>
                <p>Java, Python, Javascript, React JS, Node JS</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="purecounter"></span>
                <h4>TYPE:</h4>
                <p>Web application, Tool Data Analysis</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
                <h4>PROJECT:</h4>
                <p>4 long-terms, more 10 short-terms</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                <h4>ROLE:</h4>
                <p> Developer, Leader, Data Analysis</p>
              </div>

            </div>

          </div>
        </section>
      </>
    );
  }
}

export default Experience;