import React from 'react';
import { Link } from 'react-router-dom';
import auth_main_img from '../../assets/img/candidate.png';
import facebook from '../../assets/img/faecbook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import arrow from '../../assets/img/arrow.svg';
import '../../styles/Login.css';
import Input from '../../components/Input';
import phone from '../../assets/img/phone.svg';
import email from '../../assets/img/email.svg';
import star from '../../assets/img/star.svg';
import Select from '../Select';
const Done = () => {
  return (
    <div className="Login">
      <div className="left_area">
        <img src={auth_main_img} alt="" />
        <div className="buttom_wrapper">
          <ul>
            <li>
              <Link to="/">
                <img src={facebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={instagram} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={twitter} alt="" />
              </Link>
            </li>
          </ul>
          <p>Developed by mrbotbot.com</p>
        </div>
      </div>
      <div className="right_area form_area_canditate">
        <div className="form_area ">
          <h1>ALL DONE ! </h1>
          <p>
            Thank you for attending the virtual interview for
            <Link to="/">Building Manager Position</Link> By
            <Link to="/">RPH GLOBAL SDN BHD</Link>. We’ll be watching your interview soon and will
            contact you about the nextsteps .
          </p>

          <form>
            <div className="button_wrapper">
              <button style={{ width: 250 }}>
                Visit Jurbly
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
export default Done;
