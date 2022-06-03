import React, { Fragment } from 'react';
import Link from 'umi/link';
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';

const links = [
  // {
  //   key: 'help',
  //   title: '帮助',
  //   href: '',
  // },
  // {
  //   key: 'privacy',
  //   title: '隐私',
  //   href: '',
  // },
  // {
  //   key: 'terms',
  //   title: '条款',
  //   href: '',
  // },
];

const copyright = (
  <Fragment>
    Copyright <CopyrightOutlined /> {new Date().getFullYear()}
  </Fragment>
);

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'DeepHire';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - DeepHire`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.content}>
<<<<<<< HEAD
          {/* <div className={styles.top}>
=======
          <div className={styles.top}>
>>>>>>> f91c1404b3a84c8bbfa1671e82db4a5dc45a9165
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Jurbly</span>
              </Link>
            </div>
            <div className={styles.desc}>Simple Video Interviews Built for Recruiters</div>
<<<<<<< HEAD
          </div> */}
          {children}
        </div>
        {/* <GlobalFooter links={links} copyright={copyright} /> */}
=======
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyright={copyright} />
>>>>>>> f91c1404b3a84c8bbfa1671e82db4a5dc45a9165
      </div>
    );
  }
}

export default UserLayout;
