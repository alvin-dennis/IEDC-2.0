import React from "react";
import { FcComments } from "react-icons/fc";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img data-aos="fade-right" data-aos-duration="1500" src="img/portfolio/sjcet.webp" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 data-aos="fade-up" data-aos-duration="1000">About Us <FcComments /></h2>
              <p  data-aos="fade-up" data-aos-duration="2000">{props.data ? props.data.paragraph : "Error loading data"}</p>
              <h3 data-aos="fade-up" data-aos-duration="1500">Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1500">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Error loading data"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1500">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Error loading data"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};