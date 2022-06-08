import React from 'react';
import { Link } from 'react-router-dom';
import auth_main_img from '../../assets/img/video_left.png';
import facebook from '../../assets/img/faecbook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import arrow from '../../assets/img/arrow.svg';
import '../../styles/Login.css';
import video from '../../assets/img/video.png';
const TellUs = ({ setActive }) => {
  return (
    <div className="Login">
      <div className="left_area">
        <img src={auth_main_img} alt="" />
      </div>
      <div className="right_area form_area_canditate form_area_video">
        <div className="form_area ">
          <p>Questions 2 / 5</p>
          <h1>TELL US ABOUT YOUR SELF </h1>
          <p>This question is timed ! You have 15 seconds & unlimited Retakes.</p>

          <form>
            <img src={video} alt="" style={{ width: '100%' }} />
            <div className="button_wrapper">
              <button className="job_details">
                Get Help
                <img src={arrow} alt="" />
              </button>
              <button onClick={e => setActive(3)}>
                Notes
                <img src={arrow} alt="" />
              </button>
            </div>
          </form>
        </div>

        <div className="notes">
          <p>www.jurbly.com</p>
        </div>
      </div>
    </div>
  );
};
export default TellUs;
