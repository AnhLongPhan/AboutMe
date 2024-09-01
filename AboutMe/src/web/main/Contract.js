import React from 'react';

const demos = {
  soundcloud:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.279747343525!2d106.71420291512872!3d10.866314460498643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752805c6a48ec7%3A0x715b1d82f8b4c814!2zQ2jDmUEgTWluaCBDaMOCVQ!5e0!3m2!1svi!2s!4v1649325084456!5m2!1svi!2s" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>',

  plotly:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.279747343525!2d106.71420291512872!3d10.866314460498643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752805c6a48ec7%3A0x715b1d82f8b4c814!2zQ2jDmUEgTWluaCBDaMOCVQ!5e0!3m2!1svi!2s!4v1649325084456!5m2!1svi!2s" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>'
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

class Contract extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Contact</h3>
            <p className="section-description">Head office</p>
          </div>
        </div>

        <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,

        <div className="container mt-5">
          <div className="row justify-content-center">

            <div className="col-lg-3 col-md-4">

              <div className="info">
                <div>
                  <i className="bi bi-geo-alt"></i>
                  <p>13 Old Street<br />Hiep Binh Phuoc, Thu Duc, HCM</p>
                </div>

                <div>
                  <i className="bi bi-envelope"></i>
                  <p>codingismylife.com</p>
                </div>

                <div>
                  <i className="bi bi-phone"></i>
                  <p>+84 8888 888 888</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>

            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
  }
}

export default Contract;