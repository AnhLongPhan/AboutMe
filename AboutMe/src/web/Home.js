import React from 'react';
import '../../public/assets/css/style.css';
import Header from './Header';
import Hero from './Hero';
import TechStack from './main/TechStack';
import Projects from './main/Projects';
import Metrics from './main/Metrics';
import Architecture from './main/Architecture';
import Experience from './main/Experience';
import Contract from './main/Contract';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <main id="main">
          <TechStack />
          <Projects />
          <Metrics />
          <Architecture />
          <Experience />
          <Contract />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
