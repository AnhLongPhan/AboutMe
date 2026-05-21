import React from 'react';
import { metrics } from '../../data/profile';

class CounterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.ref = React.createRef();
    this.animated = false;
  }

  componentDidMount() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animate();
        }
      }, { threshold: 0.5 });
      this.observer.observe(this.ref.current);
    } else {
      this.animate();
    }
  }

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
    if (this.timer) clearInterval(this.timer);
  }

  animate() {
    const { end, duration = 1500 } = this.props;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    this.timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        this.setState({ value: end });
        clearInterval(this.timer);
      } else {
        this.setState({ value: Math.floor(current) });
      }
    }, duration / steps);
  }

  render() {
    const { suffix, label, icon, color } = this.props;
    const { value } = this.state;
    return (
      <div ref={this.ref} className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay={this.props.delay}>
        <div style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '14px',
          padding: '36px 24px', textAlign: 'center', borderTop: `3px solid ${color}`
        }}>
          <i className={icon} style={{ fontSize: '32px', color, display: 'block', marginBottom: '16px' }}></i>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px', marginBottom: '8px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{value}</span>
            <span style={{ fontSize: '28px', fontWeight: 700, color }}>{suffix}</span>
          </div>
          <p style={{ color: '#aaa', fontSize: '13px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
        </div>
      </div>
    );
  }
}

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
              <CounterItem key={i} {...m} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Metrics;
