import React from 'react';
import { projects } from '../../data/profile';

const typeConfig = {
  web:   { label: 'Web App',       icon: 'bi bi-globe2',   gradient: 'linear-gradient(135deg,#e74c3c,#c0392b)' },
  api:   { label: 'API / Backend', icon: 'bi bi-server',   gradient: 'linear-gradient(135deg,#f39c12,#e67e22)' },
  app:   { label: 'Application',   icon: 'bi bi-grid-3x3-gap', gradient: 'linear-gradient(135deg,#3498db,#8e44ad)' },
  other: { label: 'Data / Cloud',  icon: 'bi bi-cloud-arrow-up', gradient: 'linear-gradient(135deg,#27ae60,#1abc9c)' }
};


const Hexagon = ({ gradient, icon, size = 80 }) => (
  <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
    <div style={{
      width: '100%', height: '100%',
      background: gradient,
      clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <i className={icon} style={{ color: '#fff', fontSize: size * 0.35 }}></i>
    </div>
  </div>
);

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: projects[0] };
  }

  render() {
    const { selected } = this.state;
    const cfg = typeConfig[selected.type];

    return (
      <section id="projects" className="projects" style={{ background: '#f7f7f7', padding: '100px 0 60px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Projects</h3>
            <p className="section-description">Selected projects from 8+ years of software development</p>
          </div>

          <div className="row" style={{ minHeight: '420px' }}>

            {/* LEFT — Detail panel */}
            <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right">
              <div style={{
                background: '#fff',
                borderRadius: '14px',
                padding: '36px 32px',
                height: '100%',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                borderTop: `4px solid`,
                borderImage: `${cfg.gradient} 1`
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                  <Hexagon gradient={cfg.gradient} icon={cfg.icon} size={72} />
                  <div>
                    <span style={{
                      display: 'inline-block', fontSize: '10px', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '1px',
                      padding: '3px 10px', borderRadius: '12px',
                      background: cfg.gradient, color: '#fff', marginBottom: '6px'
                    }}>{cfg.label}</span>
                    <h4 style={{ color: '#111', fontWeight: 700, fontSize: '22px', margin: 0 }}>{selected.name}</h4>
                  </div>
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { icon: 'bi bi-person-badge', text: selected.role },
                    { icon: 'bi bi-calendar3', text: selected.period },
                    { icon: 'bi bi-people', text: `Team: ${selected.scale}` }
                  ].map((m, i) => (
                    <span key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '12px', color: '#555',
                      background: '#f0f0f0', padding: '4px 10px', borderRadius: '20px'
                    }}>
                      <i className={m.icon} style={{ fontSize: '12px' }}></i> {m.text}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px' }}>
                  {selected.description}
                </p>

                {/* Tech stack */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
                    Tech Stack
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selected.tech.map(t => (
                      <span key={t} style={{
                        fontSize: '12px', padding: '4px 12px', borderRadius: '4px',
                        background: '#f4f4f4', color: '#333', border: '1px solid #e0e0e0',
                        fontWeight: 500
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Project list */}
            <div className="col-lg-5" data-aos="fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {projects.map(p => {
                  const c = typeConfig[p.type];
                  const isActive = selected.name === p.name;
                  return (
                    <div
                      key={p.name}
                      onClick={() => this.setState({ selected: p })}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        padding: '12px 16px', borderRadius: '10px', cursor: 'pointer',
                        background: isActive ? '#fff' : 'transparent',
                        boxShadow: isActive ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
                        border: isActive ? `1.5px solid #e0e0e0` : '1.5px solid transparent',
                        borderLeft: `3px solid ${isActive ? 'transparent' : 'transparent'}`,
                        transition: 'all 0.2s'
                      }}
                    >
                      {/* mini hex */}
                      <div style={{ width: 38, height: 38, flexShrink: 0 }}>
                        <div style={{
                          width: '100%', height: '100%',
                          background: isActive ? c.gradient : '#e8e8e8',
                          clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 0.2s'
                        }}>
                          <i className={c.icon} style={{ color: isActive ? '#fff' : '#aaa', fontSize: 14 }}></i>
                        </div>
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: isActive ? '#111' : '#444', fontWeight: isActive ? 700 : 500, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {p.name}
                        </div>
                        <div style={{ color: '#888', fontSize: '11px', marginTop: '2px' }}>{p.period}</div>
                      </div>

                      <span style={{
                        fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px',
                        background: isActive ? c.gradient : '#efefef',
                        color: isActive ? '#fff' : '#888',
                        whiteSpace: 'nowrap', flexShrink: 0,
                        transition: 'all 0.2s'
                      }}>{c.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
