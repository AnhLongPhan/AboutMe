import React from 'react';

const typeConfig = {
  web:   { label: 'Web App',       icon: 'bi bi-globe2',   gradient: 'linear-gradient(135deg,#e74c3c,#c0392b)' },
  api:   { label: 'API / Backend', icon: 'bi bi-server',   gradient: 'linear-gradient(135deg,#f39c12,#e67e22)' },
  app:   { label: 'Application',   icon: 'bi bi-grid-3x3-gap', gradient: 'linear-gradient(135deg,#3498db,#8e44ad)' },
  other: { label: 'Data / Cloud',  icon: 'bi bi-cloud-arrow-up', gradient: 'linear-gradient(135deg,#27ae60,#1abc9c)' }
};

const projects = [
  {
    type: 'web',
    name: 'Daijin Systems',
    description: 'An information management system for managing, searching, and editing details of real estate purchase contracts, transaction expenses, and loan management. Evolved from member role to Team Leader over 6 years.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'ReactJS', 'MySQL', 'Maven'],
    role: 'Senior Java Developer → Team Leader',
    period: '10/2018 – 04/2024',
    scale: '4 members'
  },
  {
    type: 'api',
    name: 'Workflow API',
    description: 'Manages all states and processes of the system. Applied to oversee the approval process of purchase contract profiles, with scheduled jobs for automation.',
    tech: ['Java', 'Spring Boot', 'Google Cloud Services', 'MySQL'],
    role: 'Backend Developer',
    period: '11/2022 – 04/2024',
    scale: '2 members'
  },
  {
    type: 'api',
    name: 'DrivePlus API',
    description: 'API for uploading and managing files to Google Drive using the Google Drive API, with scheduled synchronization jobs for maintaining data consistency.',
    tech: ['Java', 'Google Drive API', 'Google Cloud Services', 'MySQL'],
    role: 'Backend Developer',
    period: '11/2022 – 04/2024',
    scale: '2 members'
  },
  {
    type: 'other',
    name: 'ETL Systems',
    description: 'Synchronizes data from physical MySQL databases to Google BigQuery for real-time and scheduled reporting. Handles data standardization and cloud function orchestration.',
    tech: ['Python', 'MySQL', 'BigQuery', 'Cloud Functions', 'Cloud Scheduler'],
    role: 'Full-stack Developer',
    period: '12/2022 – 07/2023',
    scale: '3 members'
  },
  {
    type: 'app',
    name: 'BukkenShiryo App',
    description: 'Web application for managing all project files on Google Drive folders. Allows sorting files according to predefined formats and synchronizing files for the sales department.',
    tech: ['Google Apps Scripts', 'Vue.js', 'Vuex', 'HTML5', 'ES6'],
    role: 'Backend Developer',
    period: '12/2021 – 12/2022',
    scale: '3 members'
  },
  {
    type: 'other',
    name: 'AutoResponse Systems',
    description: 'Manages sales information websites, evaluates scores of attention-grabbing locations, ranks stores, and sends consultation requests to the stores closest to users.',
    tech: ['Python', 'SQL Server', 'Google Cloud Services'],
    role: 'Backend Developer',
    period: '10/2022 – 04/2023',
    scale: '3 members'
  },
  {
    type: 'web',
    name: 'RuijuBukkenKensaku',
    description: 'Collects information from all sales files in Google Drive folders, aggregates and exports spreadsheet reports, making it easier to search for contract information.',
    tech: ['NodeJS', 'Express', 'Google Cloud Services'],
    role: 'Full-stack Developer',
    period: '01/2022 – 06/2022',
    scale: '3 members'
  }
];

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
