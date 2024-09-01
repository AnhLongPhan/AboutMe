import React from "react";

class Achievement extends React.Component {
  render() {
    return (
      <section id="achievement">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Achievement</h3>
            <p className="section-description">Summary of goals achieved</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-briefcase"></i></a></div>
                <h4 className="title"><a href="">WORKING</a></h4>
                <p className="description">code, test, deploy</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-card-checklist"></i></a></div>
                <h4 className="title"><a href="">TASK</a></h4>
                <p className="description">plan, schedule</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-bar-chart"></i></a></div>
                <h4 className="title"><a href="">Sumary</a></h4>
                <p className="description">excel, slide</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-binoculars"></i></a></div>
                <h4 className="title"><a href="">Hobbies</a></h4>
                <p className="description">listen, read</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-brightness-high"></i></a></div>
                <h4 className="title"><a href="">IDEA</a></h4>
                <p className="description">performance, improve, refactor</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href=""><i className="bi bi-calendar4-week"></i></a></div>
                <h4 className="title"><a href="">SCHEDULE</a></h4>
                <p className="description">grant, deadline</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Achievement;