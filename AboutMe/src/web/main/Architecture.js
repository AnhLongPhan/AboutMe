import React from 'react';
import { architectures } from '../../data/profile';

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
