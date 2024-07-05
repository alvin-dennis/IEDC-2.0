import React from "react";
import { FaStar } from "react-icons/fa";

export const Supporters = () => {
  return (
    <div id="supporters">
      <div className="container">
        <div className="section-title text-center">
          <h2 data-aos="fade-up" data-aos-duration="1200">OUR SUPPORTERS <FaStar/></h2>
        </div>
        <div className="grid-container">
      <div className="grid-item" data-aos="fade-up" data-aos-duration="1500">
      <a href="https://startupmission.kerala.gov.in" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/ksum.webp" alt="Kerala Startup Mission" />
        </a>
      </div>
      <div className="grid-item"data-aos="fade-up" data-aos-duration="2000">
      <a href="https://industry.kerala.gov.in/" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/dic.webp" alt="DIC" />
        </a>
      </div>
      <div className="grid-item" data-aos="fade-up" data-aos-duration="2500">
      <a href="https://iedc.startupmission.in" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/iedc.webp" alt="IEDC" />
        </a>
      </div>
      <div className="grid-item" data-aos="fade-up" data-aos-duration="1500">
      <a href="https://gdsc.community.dev/st-josephs-college-of-engineering-and-technology-palai/" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/dsc(grey).webp" alt="GDSC SJCET" />
        </a>
      </div>
      <div className="grid-item" data-aos="fade-up" data-aos-duration="2000">
      <a href="https://www.tinkerhub.org/" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/tinkerhub(black).webp" alt="TinkerHub SJCET" />
        </a>
      </div>
      <div className="grid-item" data-aos="fade-up" data-aos-duration="2500">
      <a href="https://mulearn.org/" class="w-100 h-100 card-img-overlay">
        <img src="/img/portfolio/gtech.webp" alt="Gtech MuLearn" />
        </a>
      </div>
    </div>
    </div>
    </div>
  );
};
