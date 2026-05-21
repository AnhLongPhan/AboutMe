import React from 'react';

const achievements = [
  {
    id: 1,
    icon: 'bi bi-trophy',
    title: 'MVP Award',
    description: 'Recipient of the Most Valuable Professional (MVP) award at rakumo Co., Ltd, consistently recognized for outstanding contributions (2019–2024).'
  },
  {
    id: 2,
    icon: 'bi bi-speedometer2',
    title: 'Performance +30%',
    description: 'Improved search system performance by 30% through query optimization and system redesign at Daijin Systems.'
  },
  {
    id: 3,
    icon: 'bi bi-cloud-check',
    title: 'Cloud Monitoring',
    description: 'Investigated and successfully applied Google Cloud Monitoring tools to track server status for customers.'
  },
  {
    id: 4,
    icon: 'bi bi-diagram-3',
    title: 'Load Balancing',
    description: 'Designed and applied load balancing solutions for Daijin Systems to enhance reliability and scalability.'
  },
  {
    id: 5,
    icon: 'bi bi-patch-check',
    title: 'Java Certified',
    description: 'Oracle Certified: Java SE 8 Programmer II (2016).'
  },
  {
    id: 6,
    icon: 'bi bi-people',
    title: 'Team Leadership',
    description: 'Led development teams of 2–4 members, managing project delivery, task assignment, and client communication.'
  }
];

class Achievement extends React.Component {
  render() {
    return (
      <section id="achievement">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Achievements</h3>
            <p className="section-description">Key milestones and recognitions throughout my career</p>
          </div>
          <div className="row">
            {achievements.map(item => (
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" key={item.id}>
                <div className="box">
                  <div className="icon"><a href=""><i className={item.icon}></i></a></div>
                  <h4 className="title"><a href="">{item.title}</a></h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Achievement;
