import React from "react";


class CallToAction extends React.Component {
  render() {
    return (
      <section id="call-to-action">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-9 text-center text-lg-start">
              <h3 className="cta-title">Life Motto</h3>
              <p className="cta-text">Change your thoughts and you change your world.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">Fighting</a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default CallToAction;