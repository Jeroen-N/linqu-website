import React from 'react';

export default function () {
  return (
    <div id="myDiv">
      { /* HEADER */ }
      <div className="header">
        <div className="bg-color">
          <header id="Home">
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button
                    className="navbar-toggle"
                    data-target="#myNavbar"
                    data-toggle="collapse"
                    type="button"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    <img className="linqulogo" src="/images/Logo_medium.png" />
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar" />
              </div>
            </nav>
          </header>
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="banner-info text-center wow fadeIn delay-05s" id="myBanner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  /* USAGE EXAMPLE */
//  // jsx
//  import template from './C:\Users\Millen-Laptop\Documents\linqu-website\linqu-react\src\Pug\header.pug';
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
