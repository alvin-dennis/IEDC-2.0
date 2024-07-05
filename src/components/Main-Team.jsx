import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { BsFillPeopleFill } from "react-icons/bs";



export const Team = (props) => {
  return (
    <>
      <div id="team" className="text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        <div className="execom-container">
          <div className="col-sm-8 section-title">
            <h2 data-aos="fade-up" data-aos-duration="1200">IEDC EXECOM <BsFillPeopleFill/></h2>
            <p></p>
          </div>
          <div className="execom-grid" data-aos-duration="1800" data-aos-delay="500" >
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}`} className="team"  data-aos="fade-up" data-aos-duration="1800" data-aos-delay="500" >
                    <div className="thumbnail" data-aos="fade-up" data-aos-duration="1900" data-aos-delay="500">
                      <img src={d.img} alt="..." className="team-img img-responsive" />
                      <div className="caption" data-aos="fade-up" data-aos-duration="1800">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "Error loading team data"}
          </div>
        </div>
      </div>
    </>
  );
};
