import React from 'react';
import background from '../../public/assets/img/hero-bg.jpg';


class Hero extends React.Component {
  render() {
    return (
      <section id="hero" style={{ backgroundImage: `url('${background}')` }}>
        <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Welcome to my website</h1>
          <h2>My name is PHAN LONG ÁNH (Lucas Phan) and I am a backend developer</h2>
          <h3 style={{"marginBottom": '5px', "fontStyle": 'italic'}}>Inspirational quotes about life:</h3>
          <h2 style={{"marginBottom": '5px',  "fontStyle": 'italic'}}>"Learn from yesterday, live for today, hope for tomorrow.</h2>
          <h2 style={{"marginBottom": '5px',  "fontStyle": 'italic'}}>The important is to not stop questioning"</h2>
          <h3 style={{"marginBottom": '5px',  "fontStyle": 'italic'}}>- Albert Einstein - </h3>
          <a href="#about" className="btn-get-started">Get Started</a>
        </div>
      </section>
    );
  }
}

export default Hero;