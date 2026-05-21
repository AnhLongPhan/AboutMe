import React from 'react';

const workHistory = [
  {
    id: 1,
    period: '08/2018 – 04/2024',
    role: 'Senior Java Developer → Full-stack → Team Leader',
    company: 'rakumo Co., Ltd',
    description: 'Led end-to-end development, client communication, requirements gathering, and team management for major enterprise projects.'
  },
  {
    id: 2,
    period: '09/2016 – 07/2018',
    role: 'Java Developer',
    company: 'FUJINET SYSTEMS JSC',
    description: 'Specialized in backend development, ensuring robust and scalable solutions, collaborating with cross-functional teams.'
  },
  {
    id: 3,
    period: '10/2012 – 01/2017',
    role: 'B.Sc. Information Technology',
    company: 'Ho Chi Minh City University of Science',
    description: 'Major: Information Technology.'
  }
];

const skillGroups = [
  {
    category: 'Backend',
    color: '#e74c3c',
    skills: [
      { name: 'Java', level: 95, badge: 'Expert',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', level: 90, badge: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python', level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'NodeJS', level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ]
  },
  {
    category: 'Frontend',
    color: '#3498db',
    skills: [
      { name: 'HTML / CSS', level: 80, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Bootstrap', level: 80, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'ReactJS', level: 60, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'VueJS / Vuex', level: 55, badge: 'Basic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ]
  },
  {
    category: 'Database',
    color: '#f39c12',
    skills: [
      { name: 'MySQL', level: 90, badge: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    category: 'Cloud & Tools',
    color: '#2ecc71',
    skills: [
      { name: 'Google Cloud', level: 75, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Google App Scripts', level: 70, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ]
  }
];

const badgeColor = {
  Expert: '#27ae60',
  Advanced: '#2980b9',
  Intermediate: '#e67e22',
  Basic: '#95a5a6'
};

class Experience extends React.Component {
  render() {
    return (
      <section id="experience">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Experience &amp; Skills</h3>
            <p className="section-description">8+ years in software development — Backend, Full-stack, Team Leader</p>
          </div>

          <div className="row mt-4">

            {/* Work History */}
            <div className="col-lg-5" data-aos="fade-right">
              <h4 style={{ marginBottom: '24px', color: '#333', fontWeight: 600, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Work History
              </h4>
              {workHistory.map(item => (
                <div key={item.id} style={{ marginBottom: '28px', paddingLeft: '18px', borderLeft: '3px solid #2dc997' }}>
                  <span style={{ fontSize: '12px', color: '#888', display: 'block', marginBottom: '2px' }}>{item.period}</span>
                  <h5 style={{ margin: '0 0 2px', color: '#222', fontWeight: 600, fontSize: '14px' }}>{item.role}</h5>
                  <p style={{ margin: '0 0 6px', color: '#2dc997', fontWeight: 600, fontSize: '13px' }}>{item.company}</p>
                  <p style={{ margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.5' }}>{item.description}</p>
                </div>
              ))}
            </div>

            {/* Skills by category */}
            <div className="col-lg-7" data-aos="fade-left">
              <h4 style={{ marginBottom: '24px', color: '#333', fontWeight: 600, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Technical Skills
              </h4>
              {skillGroups.map(group => (
                <div key={group.category} style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: group.color, display: 'inline-block', marginRight: '8px' }}></span>
                    <span style={{ color: '#444', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{group.category}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {group.skills.map(skill => (
                      <div key={skill.name} style={{
                        background: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        minWidth: '160px',
                        flex: '1 1 160px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
                      }}>
                        <img src={skill.icon} alt={skill.name} width="28" height="28" style={{ flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ color: '#222', fontSize: '13px', fontWeight: 600 }}>{skill.name}</span>
                            <span style={{
                              fontSize: '10px',
                              fontWeight: 700,
                              padding: '2px 6px',
                              borderRadius: '10px',
                              background: badgeColor[skill.badge],
                              color: '#fff',
                              whiteSpace: 'nowrap'
                            }}>{skill.badge}</span>
                          </div>
                          <div style={{ background: '#eee', borderRadius: '4px', height: '5px' }}>
                            <div style={{ width: `${skill.level}%`, background: group.color, borderRadius: '4px', height: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
