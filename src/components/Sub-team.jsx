import React from "react";
import { SlArrowRight } from "react-icons/sl";

export const Subteam = (props) => {
  const [showSubteam, setShowSubteam] = React.useState(false);

  const handleButtonClick = () => {
    setShowSubteam(!showSubteam);
  };
    return (
      <>
        <div className="text-center" data-aos="fade-up" data-aos-duration="2000">
            <button
              id="openButton"
              className="mybtn btn px-4 btn-custom btn-lg page-scroll"
              onClick={handleButtonClick}
              data-aos="fade-up" data-aos-duration="2000"
            >
              {showSubteam ? "HIDE ALL "  : "VIEW ALL"} &nbsp;
              <SlArrowRight />
            </button>
        </div>
        {showSubteam && (
          <div id= "subteam" className="subteam-container" >
            <br/>
            <div className="subteam-grid" data-aos-duration="1800" data-aos-delay="500" >
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}`} className="subteam"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" >
                    <div className="thumbnail" data-aos="fade-up" data-aos-duration="2100" data-aos-delay="500">
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption" data-aos="fade-up" data-aos-duration="2200" data-aos-delay="500">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                        </div>
                      </div>
                    ))
                : "Error loading sub-team data"}
            </div>
          </div>
        )}
        <div>
        <a href="https://iedc.sjcetpalai.ac.in/execom/previous/">
        <button style={{ display: "block", margin: "20 auto" }} className="btn btn-custom page-scroll" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">VIEW PREVIOUS EXECOMS <SlArrowRight /> </button>
        </a>
        </div>
      </>
    );
  }