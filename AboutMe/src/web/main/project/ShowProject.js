import React from "react";
import projectApp from '../../../../public/assets/img/projects/app.jpg';
import projectWeb from '../../../../public/assets/img/projects/web.jpg';
import projectApi from '../../../../public/assets/img/projects/api.jpg';
import projectOther from '../../../../public/assets/img/projects/other.jpg';

class ShowProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let number = this.props.number;
        let imagePath = type == 'app' ? projectApp : (type == 'web' ? projectWeb : (type == 'api' ? projectApi : projectOther));
        let addClass = type == 'app' ? 'col-lg-4 col-md-6 projects-item filter-app' : (type == 'web' ? 'col-lg-4 col-md-6 projects-item filter-web' : (type == 'api' ? 'col-lg-4 col-md-6 projects-item filter-api' : 'col-lg-4 col-md-6 projects-item filter-other'));
        return(
            <div className={addClass}>
              <img src={imagePath} className="img-fluid" alt=""/>
              <div className="projects-info">
                <h4>{type} {number}</h4>
                <p>{type}</p>
                <a href="#" data-gallery="projectsGallery" className="projects-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="projects-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
        );
    }
}

export default ShowProject