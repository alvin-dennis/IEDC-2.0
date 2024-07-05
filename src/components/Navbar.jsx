import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navigation = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top blur-background">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" data-aos="fade-left" data-aos-duration="500">
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#whyiedc" className="page-scroll" data-aos="fade-left" data-aos-duration="500" >
                Why IEDC
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" data-aos="fade-left" data-aos-duration="700">
                About Us
              </a>
            </li>
            <li>
              <a href="#event" className="page-scroll" data-aos="fade-left" data-aos-duration="900">
                Events
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" data-aos="fade-left" data-aos-duration="1100">
                Execom
              </a>
            </li>
            <li>
              <a href="https://iedc-admin.vercel.app/" className="" data-aos="fade-left" data-aos-duration="1300">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
