import React from 'react';

const traits = [
  {
    id: 1,
    icon: 'bi bi-person-check',
    title: 'Personality',
    description: 'Strong sense of responsibility and attention to detail. Comfortable working independently or as part of a team. Adaptable and thrive in fast-paced environments.'
  },
  {
    id: 2,
    icon: 'bi bi-lightbulb',
    title: 'Mindset',
    description: 'Eager learner, always seeking to acquire new skills and knowledge. Not naturally excellent but can perform acceptable presentations. Willing to learn new techniques.'
  },
  {
    id: 3,
    icon: 'bi bi-heart',
    title: 'Hobbies',
    description: 'Reading books, Traveling, Coffee lover.'
  }
];

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="row about-container">

            <div className="col-lg-6 content order-lg-1 order-2">
              <h2 className="title">About Me</h2>
              <p>
                Seeking a challenging Senior Java Developer role within a dynamic and professional environment
                where I can apply my extensive skills and experience to drive impactful contributions.
                Eager to further expand my expertise in software development while fostering a
                collaborative and conducive working environment.
              </p>

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
