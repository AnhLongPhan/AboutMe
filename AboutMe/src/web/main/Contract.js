import React from 'react';
import heroBg from '../../../public/assets/img/hero-bg.jpg';

const contactItems = [
  { icon: 'bi bi-geo-alt-fill', label: 'Location', value: 'Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City' },
  { icon: 'bi bi-envelope-fill', label: 'Email', value: 'longanhphan.qn@gmail.com', href: 'mailto:longanhphan.qn@gmail.com' },
  { icon: 'bi bi-telephone-fill', label: 'Phone', value: '+84 393 756 388', href: 'tel:+84393756388' }
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/longanhphan.qn',
    label: 'Facebook',
    icon: 'bi bi-facebook',
    color: '#1877f2'
  },
  {
    href: 'https://github.com/anhlongphan',
    label: 'GitHub',
    icon: 'bi bi-github',
    color: '#333'
  },
  {
    href: 'https://zalo.me/0393756388',
    label: 'Zalo',
    icon: null,
    color: '#0190f3'
  }
];

class Contract extends React.Component {
  render() {
    return (
      <section
        id="contact"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(${heroBg}) fixed center center`,
          backgroundSize: 'cover',
          padding: '100px 0'
        }}
      >
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <h3 className="section-title" style={{ color: '#fff' }}>Contact</h3>
            <p className="section-description" style={{ color: '#aaa' }}>Feel free to get in touch</p>
          </div>

          <div className="row align-items-center" data-aos="fade-up">

            {/* Left — intro */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
              <h2 style={{ color: '#fff', fontWeight: 700, marginBottom: '12px', fontSize: '28px' }}>
                Let's Connect
              </h2>
              <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.8', marginBottom: '28px' }}>
                I'm always open to discussing new projects, opportunities, or just a good tech conversation.
                Reach out via any channel below.
              </p>

              <div style={{ marginBottom: '28px' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: 'rgba(45,201,151,0.15)', border: '1px solid #2dc997',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <i className={item.icon} style={{ color: '#2dc997', fontSize: '16px' }}></i>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: '#888', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>{item.label}</span>
                      {item.href
                        ? <a href={item.href} style={{ color: '#ddd', fontSize: '14px', textDecoration: 'none' }}>{item.value}</a>
                        : <span style={{ color: '#ddd', fontSize: '14px' }}>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    title={link.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '7px',
                      padding: '9px 20px', borderRadius: '25px',
                      background: 'rgba(255,255,255,0.08)',
                      border: `1px solid ${link.color}`,
                      color: '#fff', fontSize: '14px', textDecoration: 'none',
                      transition: 'background 0.3s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = link.color; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                  >
                    {link.icon
                      ? <i className={link.icon}></i>
                      : <span style={{ fontWeight: 800, fontSize: '14px' }}>Z</span>
                    }
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="col-lg-1 d-none d-lg-flex justify-content-center">
              <div style={{ width: '1px', height: '260px', background: 'rgba(255,255,255,0.15)' }}></div>
            </div>

            {/* Right — quick info card */}
            <div className="col-lg-6">
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px', padding: '36px 32px'
              }}>
                <h4 style={{ color: '#2dc997', fontWeight: 700, marginBottom: '20px', fontSize: '18px' }}>
                  Quick Overview
                </h4>
                {[
                  { label: 'Current Role', value: 'Senior Java Developer / Team Leader' },
                  { label: 'Experience', value: '8+ years in software development' },
                  { label: 'Specialization', value: 'Backend (Java, Spring Boot) & Cloud (GCP)' },
                  { label: 'Languages', value: 'Java · Python · JavaScript · SQL' },
                  { label: 'Availability', value: 'Open to new opportunities' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    padding: '10px 0',
                    borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none'
                  }}>
                    <span style={{ color: '#888', fontSize: '13px', minWidth: '130px' }}>{row.label}</span>
                    <span style={{ color: '#ddd', fontSize: '13px', textAlign: 'right' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Contract;
