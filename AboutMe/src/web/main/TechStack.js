import React from 'react';
import { techStack as skillGroups } from '../../data/profile';

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
