import React from "react";


class CallToAction extends React.Component {
  render() {
    return (
      <section id="call-to-action">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-9 text-center text-lg-start">
              <h3 className="cta-title">Open to New Opportunities</h3>
              <p className="cta-text">Seeking a challenging Senior Java Developer role in a dynamic environment. Eager to drive impactful contributions and expand expertise in software development.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#contact">Contact Me</a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default CallToAction;