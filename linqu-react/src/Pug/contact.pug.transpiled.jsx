import React from 'react';

export default function () {
  return (
    <section className="section-padding wow fadeInUp delay-05s" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center white">
            <h2 className="service-title pad-bt15">Keep in touch with us</h2>
            <p className="sub-title pad-bt15">
              If you happen to have any questions, fill out the form below and you'll hear from us soon!
              <br />
              Together we'll find your dream job.
            </p>
            <hr className="bottom-line white-bg" />
          </div>
          <div className="col-md-12">
            <div className="loction-info white">
              <p id="Address">
                <i className="fa fa-map-marker fa-fw pull-left fa-2x" />
                Uilenstede 506-39
                <br />
                1183DE Amstelveen
              </p>
              <br id="mobile-br" />
              <p id="Email">
                <i className="fa fa-envelope-o fa-fw pull-left fa-2x" />
                info@linqu.io
              </p>
              <br id="mobile-br" />
              <p id="Phonenr">
                <i className="fa fa-phone fa-fw pull-left fa-2x" />
                +31 642 467 690
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form action="" className="contactForm" method="post" role="form">
                <div className="col-md-6 padding-right-zero">
                  <div className="form-group">
                    <input
                      className="form-control"
                      data-msg="Please enter at least 4 chars"
                      data-rule="minlen:4"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                    />
                    <div className="validation" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      data-msg="Please enter a valid email"
                      data-rule="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                    />
                    <div className="validation" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      data-msg="Please enter at least 8 chars of subject"
                      data-rule="minlen:4"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      type="text"
                    />
                    <div className="validation" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      data-msg="Please write something for us"
                      data-rule="required"
                      name="message"
                      placeholder="Message"
                      rows="8"
                    />
                    <div className="validation" />
                  </div>
                  <button className="btn btn-primary btn-submit" type="submit">SEND NOW</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  /* USAGE EXAMPLE */
//  // jsx
//  import template from './C:\Users\Millen-Laptop\Documents\linqu-website\linqu-react\src\Pug\contact.pug';
//
//  class Report extends React.Component {
//
//    render() {
//
//      return template.call(this);
//    }
//
//  }
//  /* // USAGE EXAMPLE */
