import React from 'react';
import background from '../../public/assets/img/hero-bg.jpg';

class Hero extends React.Component {
  render() {
    return (
      <section id="hero" style={{ backgroundImage: `url('${background}')` }}>
        <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Phan Long Ánh</h1>
          <h2>Senior Java Developer &amp; Full-stack Developer</h2>
          <h3 style={{ marginBottom: '5px', fontStyle: 'italic' }}>
            "Learn from yesterday, live for today, hope for tomorrow.
          </h3>
          <h3 style={{ marginBottom: '20px', fontStyle: 'italic' }}>
            The important thing is not to stop questioning."
          </h3>
          <h4 style={{ marginBottom: '20px', fontStyle: 'italic' }}>— Albert Einstein —</h4>
          <a href="#about" className="btn-get-started">Get Started</a>
        </div>
      </section>
    );
  }
}

export default Hero;