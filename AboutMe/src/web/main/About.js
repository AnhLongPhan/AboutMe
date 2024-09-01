import React from 'react';

const aboutDetails = [
  { 'id': 1, 'tittle': 'Working', 'description': '- Sense of responsibility and carefulness. \r\n - Can work independently or in a team.'},
  { 'id': 2, 'tittle': 'Additional information', 'description': '- Not naturally excellent but can perform acceptable presentations. \r\n - A bit introverted but can integrate into any environment. \r\n - Be willing to learn new techniques and knowledge.'},
  { 'id': 3, 'tittle': 'Hobbies', 'description': '- Traveling \r\n - Read book everyday \r\n - Listen Podcast'}
]
class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="row about-container">

            <div className="col-lg-6 content order-lg-1 order-2">
              <h2 className="title">Few Words About Me</h2>
              <p>
                I’m looking for a job providing a working environment which is professional and suitable for my own ability so that I can take advantages of my skills and experience to the job as best as possible. Have more chances to learn and gain intensive knowledge in developing the field of software.
              </p>

              {aboutDetails.map(info => 
                {
                  let description = info.description;
                  return (
                  <div className="icon-box" data-aos="fade-up" data-aos-delay="100" key={info.id}>
                    <div className="icon"><i className="bi bi-briefcase"></i></div>
                    <h4 className="title"><a href="">{info.tittle}</a></h4>
                    <p className="description">{description}</p>
                </div>
                )}
              )}

            </div>

            <div className="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
          </div>

        </div>
      </section>
    );
  }
}

export default About;