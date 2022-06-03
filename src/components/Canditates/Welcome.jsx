import React from "react";
import { Link } from "react-router-dom";
import auth_main_img from "../../assets/img/candidate.png";
import facebook from "../../assets/img/faecbook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import arrow from "../../assets/img/arrow.svg";
import "../../styles/Login.css";
import Input from "../../components/Input";
import phone from "../../assets/img/phone.svg";
import email from "../../assets/img/email.svg";
const Welcome = ({ setActive }) => {
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
          <h1>Welcome </h1>
          <p>
            You have been invited to attend a virtual interview for
            <Link to="/">Building Manager Position</Link>
            By
            <Link to="/">RPH GLOBAL SDN BHD</Link>
          </p>

          <form>
            <Input icon={email} label="E-mail" type="text" />
            <Input icon={phone} label="Name" type="text" />

            <div className="button_wrapper">
              <button className="job_details">
                Job Detail
                <img src={arrow} alt="" />
              </button>
              <button onClick={(e) => setActive(2)}>
                Start now
                <img src={arrow} alt="" />
              </button>
            </div>
          </form>
        </div>

        <div className="notes">
          <h1>Important Note :</h1>
          <p>
            You will be asked to record answers to a series of prompts that will
            ask you common interview questions. You will need :
          </p>
          <ul>
            <li>Your phone or a computer with a camera</li>
            <li>Quiet environment</li>
            <li>10-15 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
