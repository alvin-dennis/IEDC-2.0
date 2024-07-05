import React from "react";
import { FcApproval } from "react-icons/fc";

export const Whyiedc = (props) => {
  return (
    <div id="whyiedc" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 data-aos="fade-up" data-aos-duration="1200" >Why IEDC <FcApproval/></h2>
          <p data-aos="fade-up" data-aos-duration="1200" >Here students take their
          first step as innovators and entrepreneurs</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1500">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" data-aos="fade-up" data-aos-duration="1500">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Error loading data"}
        </div>
      </div>
    </div>
  );
};
