import React from 'react';
import { workHistory as timeline } from '../../data/profile';

const dot = { work: { bg: '#2dc997', icon: 'bi bi-briefcase' }, edu: { bg: '#3498db', icon: 'bi bi-mortarboard' } };

class Experience extends React.Component {
  render() {
    return (
      <section id="experience" style={{ background: '#fff', padding: '100px 0 60px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Experience Timeline</h3>
            <p className="section-description">My professional journey in software development</p>
          </div>

          <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
            {/* vertical line */}
            <div style={{
              position: 'absolute', left: '20px', top: '8px', bottom: '8px',
              width: '2px', background: '#e8e8e8'
            }}></div>

            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '28px', marginBottom: '40px', position: 'relative' }} data-aos="fade-up" data-aos-delay={i * 100}>
                {/* dot */}
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: dot[item.type].bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', zIndex: 1, boxShadow: `0 0 0 4px #fff, 0 0 0 6px ${dot[item.type].bg}33`
                }}>
                  <i className={dot[item.type].icon} style={{ color: '#fff', fontSize: '16px' }}></i>
                </div>

                {/* content */}
                <div style={{
                  flex: 1, background: '#fafafa', borderRadius: '10px',
                  padding: '20px 24px', border: '1px solid #efefef',
                  borderLeft: `3px solid ${dot[item.type].bg}`
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <div>
                      <h5 style={{ margin: 0, color: '#111', fontWeight: 700, fontSize: '15px' }}>{item.role}</h5>
                      <span style={{ color: dot[item.type].bg, fontWeight: 600, fontSize: '13px' }}>{item.company}</span>
                    </div>
                    <span style={{
                      fontSize: '11px', padding: '3px 10px', borderRadius: '12px',
                      background: `${dot[item.type].bg}18`, color: dot[item.type].bg,
                      fontWeight: 600, whiteSpace: 'nowrap'
                    }}>{item.period}</span>
                  </div>
                  <ul style={{ margin: '10px 0 0', paddingLeft: '16px' }}>
                    {item.highlights.map((h, j) => (
                      <li key={j} style={{ color: '#555', fontSize: '13px', lineHeight: '1.7', marginBottom: '3px' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
