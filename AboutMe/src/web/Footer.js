import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer id="footer">
    <div className="footer-top">
      <div className="container">

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; {new Date().getFullYear()} <strong>Phan Long Ánh</strong>. All Rights Reserved.
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
    );
  }
}

export default Footer;