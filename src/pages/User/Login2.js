/* global $crisp */
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Alert, Button, Input, Typography } from 'antd';
import { connect } from 'dva';
import React, { Component, useState } from 'react';
import { lowerCaseQueryParams } from '@bit/russeii.deephire.utils.utils';
import { sendTgMsg, resetPassword, createCompany, getInviteById } from '@/services/api';

import Login from '@/components/Login';

import Auth from '../../Auth/Auth';
import styles from './Login.less';

import { Link } from 'react-router-dom';
import auth_main_img from '../../assets/img/left_auth_img.png';
import facebook from '../../assets/img/faecbook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import arrow from '../../assets/img/arrow.svg';
import './LoginNew.css';
import InputCustom from '../../components/Input';
import phone from '../../assets/img/phone.svg';
import email from '../../assets/img/email.svg';

import Bag from '../../assets/img/Bag.svg';
import name from '../../assets/img/name.svg';

const { Paragraph, Title } = Typography;

const ObjectID = require('bson-objectid');

const FormItem = Form.Item;

const { Tab, Email, Password, Submit, Company, Name } = Login;

const auth = new Auth();

const ForgotPassScreen = Form.create()(props => {
  const { setForgotPass, form } = props;
  const [resetResult, setResetResult] = useState();

  const returnToLoginButton = (
    <Button style={{ float: 'right' }} onClick={() => setForgotPass(false)} type="link">
      Return to Login
    </Button>
  );
  const submitResetPassword = event => {
    event.preventDefault();

    form.validateFields(async (err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      setResetResult(await resetPassword(fieldsValue.email));
    });
  };
  return (
    <div>
      {resetResult ? (
        <Alert style={{ marginBottom: 20 }} message={resetResult} type="success" />
      ) : (
        <div style={{ paddingBottom: 20, textAlign: 'center' }}>
          Enter your email below and we will send you a link to reset your password.
        </div>
      )}
      <Form onSubmit={submitResetPassword}>
        <FormItem>
          {form.getFieldDecorator('email', {
            rules: [
              { type: 'email', message: 'The input is not valid E-mail!' },
              {
                required: true,
                message: 'Please input your email address!',
              },
            ],
          })(<Input placeholder="Email Address" />)}
        </FormItem>
        <Button style={{ width: '100%' }} type="primary" onClick={submitResetPassword}>
          Send Reset Link
        </Button>
      </Form>
      {returnToLoginButton}
    </div>
  );
});
const { invited, signupemail: signupEmail } = lowerCaseQueryParams(window.location.search);

@connect(({ loading }) => ({
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: invited || signupEmail ? 'signUp' : 'account',
    forgotPassword: false,
    inviteData: null,
    InnerType: 'login',
  };

  async componentDidMount() {
    // change this to get invite by ID
    if (invited) {
      const inviteData = await getInviteById(invited);
      this.setState({ inviteData });
      inviteData.company = inviteData.companyName;
      inviteData.email = inviteData.invitedEmail;

      this.setBaseInfo(inviteData);
    }
  }

  setBaseInfo = inviteData => {
    Object.keys(this.loginForm.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = inviteData[key] || null;
      this.loginForm.setFieldsValue(obj);
    });
  };

  onTabChange = type => {
    this.setState({ type });
  };

  setForgotPass(forgot) {
    this.setState({ forgotPassword: forgot });
  }

  handleSubmit = e => {
    e.preventDefault();
    let err = false;
    if (!err) {
      const { InnerType } = this.state;

      if (InnerType === 'login') {
        window.alert();
        // auth.login(values.email, values.password);
      } else {
        const { inviteData } = this.state;
        let _id;
        let role = 'admin';
        let team;
        if (inviteData) {
          _id = ObjectID(inviteData.companyId);
          // eslint-disable-next-line prefer-destructuring
          role = inviteData.role;
          // eslint-disable-next-line prefer-destructuring
          team = inviteData.team?.toString();
        } else {
          _id = ObjectID();
          const companyData = { _id, owner: values.email, companyName: values.company };
          createCompany(companyData);
          sendTgMsg({ event: 'signup', email: values.email, companyName: values.company });
        }

        $crisp.push([
          'set',
          'session:event',
          [[['user-signup', { time: new Date().toString() }, 'green']]],
        ]);

        auth.signup(values.email, values.password, values.name, {
          company: values.company,
          companyId: _id,
          role,
          team,
        });
      }
    }
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { submitting } = this.props;
    const { type, forgotPassword, inviteData } = this.state;
    const { createdByName = '', companyName = '' } = inviteData || {};
    return (
      <div className={styles.Login}>
        <div className={styles.Login_left_area}>
          <img src={auth_main_img} alt="" className={styles.main_login_img} />
          <div className={styles.Login_left_area_buttom_wrapper}>
            <ul className={styles.Login_left_area_buttom_wrapper_ul}>
              <li>
                <Link to="/">
                  <img src={facebook} alt="" />
                </Link>
              </li>
              <li className={styles.Login_left_area_buttom_wrapper_list}>
                <Link to="/">
                  <img src={instagram} alt="" />
                </Link>
              </li>
              <li className={styles.Login_left_area_buttom_wrapper_list}>
                <Link to="/">
                  <img src={twitter} alt="" />
                </Link>
              </li>
            </ul>
            <p>Developed by mrbotbot.com</p>
          </div>
        </div>
        {this.state.InnerType === 'login' ? (
          <div className={styles.Login_right_area}>
            <div className={styles.Login_right_area_form}>
              <h1 className={styles.Login_right_area_form_main_heading}>Login</h1>
              <p className={styles.Login_right_area_form_main_p}>
                Lets start hiring . Evaluate people instead of paper !
              </p>

              <form
                ref={form => {
                  this.loginForm = form;
                }}
                className={`${styles.Login_right_area_form} ${styles.Login_right_area_form_mbl}`}
              >
                <InputCustom icon={email} label="E-mail" type="text" />
                <InputCustom
                  icon={phone}
                  label="Passwords"
                  type="password"
                  onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
                />

                <div className={styles.Login_right_area_buttom_wrapper}>
                  <button
                    className={styles.Login_right_area_buttom_wrapper_button}
                    onClick={this.handleSubmit}
                  >
                    Login
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </form>
              <div className={styles.Login_right_area_buttom_area}>
                <p className={styles.Login_right_area_buttom_area_p}>Dont have an account yet ?</p>
                <Link
                  to="/register"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      InnerType: 'register',
                    });
                  }}
                  className={styles.Login_right_area_buttom_area_a}
                >
                  Sign up free !
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.Login_right_area}>
            <div className={styles.Login_right_area_form}>
              <h1 className={styles.Login_right_area_form_main_heading}>Sign up</h1>
              <p className={styles.Login_right_area_form_main_p}>
                14 days free trials , No credit card required !
              </p>

              <form
                className={`${styles.Login_right_area_form} ${styles.Login_right_area_form_mbl}`}
              >
                <InputCustom icon={name} label="Full Name" type="text" />
                <InputCustom icon={Bag} label="Company" type="text" />
                <InputCustom icon={email} label="Company Email" type="text" />
                <InputCustom icon={phone} label="Passwords" type="password" />

                <div className={styles.Login_right_area_buttom_wrapper}>
                  <button className={styles.Login_right_area_buttom_wrapper_button}>
                    Sign up
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </form>
              <div className={styles.Login_right_area_buttom_area}>
                <p className={styles.Login_right_area_buttom_area_p}>Already have an account ?</p>
                <Link
                  to="/register"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      InnerType: 'login',
                    });
                  }}
                  className={styles.Login_right_area_buttom_area_a}
                >
                  Go back to login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const InvitedText = ({ createdByName, companyName }) => (
  <>
    <Title style={{ textAlign: 'center' }} level={3}>
      You&apos;ve Been Invited
    </Title>
    <Paragraph style={{ textAlign: 'center', paddingBottom: 10 }}>
      {`${createdByName} has invited you to join ${companyName}`}
    </Paragraph>
  </>
);

const DefaultText = () => (
  <>
    <Title style={{ textAlign: 'center' }} level={3}>
      Create Your Account & Start Interviewing
    </Title>
    <Paragraph style={{ textAlign: 'center', paddingBottom: 10 }}>
      You are a few clicks away from creating your first interview
    </Paragraph>
  </>
);
export default LoginPage;
