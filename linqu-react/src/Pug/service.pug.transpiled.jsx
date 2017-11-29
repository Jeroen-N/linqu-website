import React from 'react';

export default function () {
  return (
    <section className="section-padding wow fadeInUp delay-05s" id="How">
      <div className="container outer">
        <div className="row middle">
          <div className="row">
            <img
              className="img img-responsive col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4"
              src="images/Logo_medium.png"
            />
            <p className="sub-title pad-bt15 col-sm-4 col-sm-offset-4" id="phasesubtitle">
              Our screening consists of several phases to ensure quality
            </p>
          </div>
          <hr className="bottom-line" />
          <img className="img img-responsive" id="phase-img" src="images/linqu-funnel2.png" />
        </div>
      </div>
    </section>
  );
}

//  /* USAGE EXAMPLE */
//  // jsx
//  import template from './C:\Users\Millen-Laptop\Documents\linqu-website\linqu-react\src\Pug\service.pug';
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
