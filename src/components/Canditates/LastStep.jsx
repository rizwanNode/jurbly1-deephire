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
import star from "../../assets/img/star.svg";
import Select from "../Select";
const LastStep = ({ setActive }) => {
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
          <h1>One Last Step </h1>
          <p>
            Tell us what you think about the interview , all feedbacks are
            anonymous .
          </p>

          <form>
            <Select
              icon={email}
              label="Do you face any issue with the application ?"
              list={["Yes", "No"]}
            />

            <Select
              icon={star}
              label="Give us a rating"
              list={["1 star", "2 star", "3 star", "4 star", "5 star"]}
            />

            <Input icon={phone} label="Any Comment ?" type="text" />

            <div className="button_wrapper">
              <button onClick={(e) => setActive(4)}>
                Complete
                <img src={arrow} alt="" />
              </button>
            </div>
          </form>
        </div>

        <div className="notes">
          <h1> Need Help ?</h1>
          <p>
            If you have issue with your interview and you would like us to help
            you reset the session, please sent us a support ticket here.
          </p>
        </div>
      </div>
    </div>
  );
};
export default LastStep;
