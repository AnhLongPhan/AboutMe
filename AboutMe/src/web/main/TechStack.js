import React from 'react';

const skillGroups = [
  {
    category: 'Backend',
    color: '#e74c3c',
    skills: [
      { name: 'Java',        level: 95, badge: 'Expert',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', level: 90, badge: 'Expert',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python',      level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'NodeJS',      level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ]
  },
  {
    category: 'Frontend',
    color: '#3498db',
    skills: [
      { name: 'HTML / CSS',  level: 80, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Bootstrap',   level: 80, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'ReactJS',     level: 60, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'VueJS / Vuex',level: 55, badge: 'Basic',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ]
  },
  {
    category: 'Database',
    color: '#f39c12',
    skills: [
      { name: 'MySQL',       level: 90, badge: 'Expert',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    category: 'Cloud & Tools',
    color: '#2ecc71',
    skills: [
      { name: 'Google Cloud',       level: 75, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Google App Scripts', level: 70, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ]
  }
];

const badgeColor = {
  Expert: '#27ae60',
  Advanced: '#2980b9',
  Intermediate: '#e67e22',
  Basic: '#95a5a6'
};

class TechStack extends React.Component {
  render() {
    return (
      <section id="tech-stack" style={{ background: '#fff', padding: '100px 0 60px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Tech Stack</h3>
            <p className="section-description">Technologies I work with, organized by domain</p>
          </div>

          <div className="row mt-2">
            {skillGroups.map(group => (
              <div className="col-lg-6 mb-4" key={group.category} data-aos="fade-up">
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: group.color, display: 'inline-block', flexShrink: 0 }}></span>
                  <span style={{ color: '#333', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>{group.category}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {group.skills.map(skill => (
                    <div key={skill.name} style={{
                      background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: '10px',
                      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '10px',
                      minWidth: '170px', flex: '1 1 170px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
                    }}>
                      <img src={skill.icon} alt={skill.name} width="28" height="28" style={{ flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                          <span style={{ color: '#222', fontSize: '13px', fontWeight: 600 }}>{skill.name}</span>
                          <span style={{
                            fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '10px',
                            background: badgeColor[skill.badge], color: '#fff', whiteSpace: 'nowrap', flexShrink: 0
                          }}>{skill.badge}</span>
                        </div>
                        <div style={{ background: '#e8e8e8', borderRadius: '4px', height: '5px' }}>
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
      </section>
    );
  }
}

export default TechStack;
