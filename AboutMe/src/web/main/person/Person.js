import React from "react";

class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = this.props.image;
        let name = this.props.name;
        let role = this.props.role;
        return(
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="pic"><img src={image} alt=""/></div>
                <h4>{name}</h4>
                <span>{role}</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
        );
    }
}

export default Person