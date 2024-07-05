import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay" >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 data-aos="fade-up" data-aos-duration="2500">
                Discovering<br/>
                <span id="changetext"></span><br/>
                Students among us.
                  <span></span>
                </h1>
                <p data-aos="fade-up" data-aos-duration="2500">Let's Get Your <span>Dreams</span> Incubated</p>
                <a
                  href="https://innovate.startupmission.in/#/register"
                  className="btn btn-custom btn-lg page-scroll"
                  data-aos="fade-up" data-aos-duration="2500"
                >
                  Join Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
