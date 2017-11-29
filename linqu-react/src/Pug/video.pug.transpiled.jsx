import React from 'react';

export default function () {
  return (
    <section className="section-padding wow fadeIn delay-05s" id="Video">
      <div className="container video-container">
        <h2>BECAUSE WATCHING A VIDEO IS ALWAYS EASIER</h2>
        <div className="col-md-8 col-sm-12 col-xs-12 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="center-block" src="https://www.youtube.com/embed/bvTdtfm4hfk" />
          </div>
        </div>
      </div>
    </section>
  );
}

//  /* USAGE EXAMPLE */
//  // jsx
//  import template from './C:\Users\Millen-Laptop\Documents\linqu-website\linqu-react\src\Pug\video.pug';
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
