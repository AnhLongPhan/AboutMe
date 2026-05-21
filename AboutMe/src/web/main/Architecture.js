import React from 'react';

const architectures = [
  {
    title: 'Enterprise Web Management',
    type: 'MVC / Full-stack',
    color: '#e74c3c',
    icon: 'bi bi-layers',
    description: 'Multi-layer web app managing real estate contracts end-to-end. Java Spring Boot backend with Thymeleaf + React frontend, MySQL persistence, and load-balanced deployment.',
    layers: ['React / Thymeleaf', 'Spring Boot (REST)', 'MySQL', 'GCP Load Balancer'],
    project: 'Daijin Systems'
  },
  {
    title: 'ETL Data Pipeline',
    type: 'Cloud Data Engineering',
    color: '#f39c12',
    icon: 'bi bi-diagram-3',
    description: 'Automated pipeline syncing transactional data from MySQL to Google BigQuery for real-time reporting. Orchestrated via Cloud Scheduler and Cloud Functions.',
    layers: ['MySQL (Source)', 'Cloud Functions', 'Cloud Scheduler', 'BigQuery (Sink)'],
    project: 'ETL Systems'
  },
  {
    title: 'RESTful API Services',
    type: 'Backend Microservices',
    color: '#3498db',
    icon: 'bi bi-cloud-arrow-up',
    description: 'Stateless REST APIs managing workflow approval states and Google Drive file operations. Designed for scalability with scheduled jobs for data synchronization.',
    layers: ['Java REST API', 'Google Drive API', 'Cloud Scheduler', 'MySQL'],
    project: 'Workflow API · DrivePlus API'
  },
  {
    title: 'Automation & Reporting',
    type: 'Scripting / Low-code',
    color: '#2ecc71',
    icon: 'bi bi-gear-wide-connected',
    description: 'Google Apps Scripts automation for file management and spreadsheet reporting across Drive folders. Vue.js frontend for sales department data access.',
    layers: ['Vue.js / Vuex', 'Google Apps Scripts', 'Google Drive', 'Spreadsheet Reports'],
    project: 'BukkenShiryo · RuijuBukken'
  }
];

class Architecture extends React.Component {
  render() {
    return (
      <section id="architecture" style={{ background: '#f7f7f7', padding: '100px 0 60px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Architecture Showcase</h3>
            <p className="section-description">System designs and architectural patterns from real projects</p>
          </div>

          <div className="row">
            {architectures.map((arch, i) => (
              <div className="col-lg-6 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div style={{
                  background: '#fff', borderRadius: '12px', padding: '28px 24px',
                  height: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  borderLeft: `4px solid ${arch.color}`
                }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: '10px', flexShrink: 0,
                      background: `${arch.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <i className={arch.icon} style={{ fontSize: '22px', color: arch.color }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: 0, color: '#111', fontWeight: 700, fontSize: '16px' }}>{arch.title}</h5>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px',
                        background: `${arch.color}20`, color: arch.color
                      }}>{arch.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#555', fontSize: '13px', lineHeight: '1.7', marginBottom: '16px' }}>
                    {arch.description}
                  </p>

                  {/* Layer stack */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {arch.layers.map((layer, li) => (
                        <div key={li} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{
                            fontSize: '11px', padding: '3px 10px', borderRadius: '4px',
                            background: '#f0f0f0', color: '#333', fontWeight: 500, border: '1px solid #e0e0e0'
                          }}>{layer}</span>
                          {li < arch.layers.length - 1 && (
                            <i className="bi bi-arrow-right" style={{ fontSize: '10px', color: '#aaa' }}></i>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project ref */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="bi bi-link-45deg" style={{ color: '#aaa', fontSize: '13px' }}></i>
                    <span style={{ color: '#888', fontSize: '12px' }}>{arch.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Architecture;
