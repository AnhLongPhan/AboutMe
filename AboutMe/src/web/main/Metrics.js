import React from 'react';

const metrics = [
  { end: 8,  suffix: '+', label: 'Years of Experience',    icon: 'bi bi-calendar-check', color: '#e74c3c' },
  { end: 7,  suffix: '',  label: 'Major Projects Delivered', icon: 'bi bi-folder-check',   color: '#f39c12' },
  { end: 30, suffix: '%', label: 'Search Performance Gain', icon: 'bi bi-speedometer2',    color: '#2ecc71' },
  { end: 9,  suffix: '+', label: 'Technologies Mastered',   icon: 'bi bi-cpu',             color: '#3498db' },
];

class Metrics extends React.Component {
  render() {
    return (
      <section id="metrics" style={{ background: '#111', padding: '80px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title" style={{ color: '#fff' }}>Engineering Metrics</h3>
            <p className="section-description" style={{ color: '#888' }}>Numbers that define my engineering journey</p>
          </div>

          <div className="row justify-content-center">
            {metrics.map((m, i) => (
              <div className="col-lg-3 col-md-6 mb-4" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div style={{
                  background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '14px',
                  padding: '36px 24px', textAlign: 'center',
                  borderTop: `3px solid ${m.color}`,
                  transition: 'transform 0.2s',
                }}>
                  <i className={m.icon} style={{ fontSize: '32px', color: m.color, display: 'block', marginBottom: '16px' }}></i>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px', marginBottom: '8px' }}>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end={m.end}
                      data-purecounter-duration="1"
                      className="purecounter"
                      style={{ fontSize: '48px', fontWeight: 700, color: '#fff', lineHeight: 1 }}
                    ></span>
                    <span style={{ fontSize: '28px', fontWeight: 700, color: m.color }}>{m.suffix}</span>
                  </div>
                  <p style={{ color: '#aaa', fontSize: '13px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Metrics;
