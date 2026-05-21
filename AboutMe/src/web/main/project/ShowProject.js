import React from "react";
import projectApp from '../../../../public/assets/img/projects/app.jpg';
import projectWeb from '../../../../public/assets/img/projects/web.jpg';
import projectApi from '../../../../public/assets/img/projects/api.jpg';
import projectOther from '../../../../public/assets/img/projects/other.jpg';

const imageMap = { app: projectApp, web: projectWeb, api: projectApi, other: projectOther };
const classMap = {
  app: 'col-lg-4 col-md-6 projects-item filter-app',
  web: 'col-lg-4 col-md-6 projects-item filter-web',
  api: 'col-lg-4 col-md-6 projects-item filter-api',
  other: 'col-lg-4 col-md-6 projects-item filter-other'
};

class ShowProject extends React.Component {
  render() {
    let { type, name, description, tech, role, period } = this.props;
    let imagePath = imageMap[type] || projectOther;
    let addClass = classMap[type] || classMap.other;

    return (
      <div className={addClass}>
        <img src={imagePath} className="img-fluid" alt={name} />
        <div className="projects-info">
          <h4>{name}</h4>
          <p style={{ fontSize: '12px', marginBottom: '2px', color: '#cda45e' }}>{role} · {period}</p>
          <p style={{ fontSize: '11px', marginBottom: '4px' }}>{description}</p>
          <p style={{ fontSize: '10px', color: '#aaa', fontStyle: 'italic' }}>{tech}</p>
        </div>
      </div>
    );
  }
}

export default ShowProject;
