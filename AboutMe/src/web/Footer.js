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
        &copy; Copyright <strong>Regna</strong>. All Rights Reserved
      </div>
      <div className="credits">
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Regna
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
    );
  }
}

export default Footer;