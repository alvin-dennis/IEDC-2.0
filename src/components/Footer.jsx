import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


const initialState = {
  name: "",
  email: "",
  message: "",
};
export function Contact() {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container" data-aos="fade-up" data-aos-duration="1400">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 data-aos="fade-up" data-aos-duration="1400">Get In Touch</h2>
                <img src="img/portfolio/bootcamplogowhite.webp" alt="Logo" data-aos="fade-up" data-aos-duration="1400" />
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="1400">
                <div className="row" data-aos="fade-up" data-aos-duration="1400">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 data-aos="fade-up" data-aos-duration="1400">Reach Us</h3>
              </div>
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="flex-grow-1"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503167.5740352092!2d76.23294812656607!3d9.85064521519969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1617135156377!5m2!1sen!2sin"
                    title="St. Joseph's College of Engineering and Technology, Palai"
                    aria-label="St. Joseph's College of Engineering and Technology, Palai" data-aos="fade-up" data-aos-duration="1400">
                </iframe>
          </div>  
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="1400">
                    <a href="https://www.linkedin.com/company/startup-bootcamp-sjcet/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li >
                  <li data-aos="fade-up" data-aos-duration="1400">
                    <a href="https://www.instagram.com/sjcetbootcamp/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1400">
                    <a href="https://twitter.com/sjcetbootcamp/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1400">
                    <a href="https://www.facebook.com/sjcetbootcamp/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 SJCET Startup Bootcamp IEDC. Designed & Developed by {""}
            <a href="http://github.com/alvin-dennis" rel="nofollow">
             Alvin Dennis
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
