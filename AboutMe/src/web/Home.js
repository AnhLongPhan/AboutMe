import React from 'react';
import '../../public/assets/css/style.css';
import Header from './Header';
import Hero from './Hero';
import About from './main/About';
import Achievement from './main/Achievement';
import Experience from './main/Experience';
import CallToAction from './main/CallToAction';
import Projects from './main/Projects';
import Team from './main/Team';
import Contract from './main/Contract';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <main id="main">
          <About />
          <Experience />
          <Achievement />
          <CallToAction />
          <Projects />
          <Team />
          <Contract/>
        </main>
        <Footer />
      </>
    );
  }
}

export default (Home);