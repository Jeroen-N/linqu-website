import React from 'react';

export default function () {
  return (
    <section className="section-padding wow fadeInUp delay-05s" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="service-title pad-bt15">What you need to do to start:</h2>
            <hr className="bottom-line" />
          </div>
          <div
            className="col-md-6 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-0 portfolio-item padding-right-zero mr-btn-15 steplist"
          >
            <div className="developer">
              <h2>As a developer:</h2>
              <ul className="custom-bullet">
                <li>Sign up for free</li>
                <li>Set your preferences</li>
                <li>Pass the screening to be the best fitting developer</li>
                <li>We linqU to the best fitting employer</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-0 portfolio-item padding-right-zero mr-btn-15 steplist"
          >
            <div className="employer">
              <h2>As an employer:</h2>
              <ul className="custom-bullet">
                <li>Sign up for free</li>
                <li>Set your preferences</li>
                <li>We linqU to the best fitting developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  /* USAGE EXAMPLE */
//  // jsx
//  import template from './C:\Users\Millen-Laptop\Documents\linqu-react\src\Pug\whattodo.pug';
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
