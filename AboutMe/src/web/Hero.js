import React from 'react';
import background from '../../public/assets/img/hero-bg.jpg';
import { personal } from '../data/profile';

class Hero extends React.Component {
  render() {
    return (
      <section id="hero" style={{ backgroundImage: `url('${background}')` }}>
        <div className="hero-container">
          <div className="hero-text" data-aos="zoom-in" data-aos-delay="100">
            <h1>{personal.name}</h1>
            <h2>{personal.title}</h2>
            <h3 style={{ marginBottom: '20px', fontStyle: 'italic' }}>{personal.quote}</h3>
            <h4 style={{ marginBottom: '20px', fontStyle: 'italic' }}>{personal.quoteAuthor}</h4>
            <a href="#tech-stack" className="btn-get-started scrollto">Get Started</a>
          </div>

          <div className="hero-photo" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-avatar-wrapper">
              <img src={personal.avatar} alt={personal.name} className="hero-avatar-img" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
