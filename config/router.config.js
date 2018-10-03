export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
      { path: '/user/callback', component: './User/Callback' },
    ],
  },
  // appxp
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['user'],
    routes: [
      // dashboard
      { path: '/', redirect: 'form/create-interview/info' },
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   icon: 'dashboard',
      //   routes: [
      //     {
      //       path: '/dashboard/analysis',
      //       name: 'analysis',
      //       component: './Dashboard/Analysis',
      //     },
      //     {
      //       path: '/dashboard/monitor',
      //       name: 'monitor',
      //       component: './Dashboard/Monitor',
      //     },
      //     {
      //       path: '/dashboard/workplace',
      //       name: 'workplace',
      //       component: './Dashboard/Workplace',
      //     },
      //   ],
      // },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          // {
          //   path: '/form/basic-form',
          //   name: 'basicform',
          //   component: './Forms/BasicForm',
          // },
          {
            path: '/form/create-interview',
            name: 'createinterview',
            component: './Forms/CreateInterviewForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/create-interview',
                name: 'createinterview',
                redirect: '/form/create-interview/info',
              },
              {
                path: '/form/create-interview/info',
                name: 'info',
                component: './Forms/CreateInterviewForm/Step1',
              },
              {
                path: '/form/create-interview/confirm',
                name: 'confirm',
                component: './Forms/CreateInterviewForm/Step2',
              },
              {
                path: '/form/create-interview/result',
                name: 'result',
                component: './Forms/CreateInterviewForm/Step3',
              },
            ],
          },
          // {
          //   path: '/form/advanced-form',
          //   name: 'advancedform',
          //   authority: ['admin'],
          //   component: './Forms/AdvancedForm',
          // },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          // {
          //   path: '/list/basic-list',
          //   name: 'basiclist',
          //   component: './List/BasicList',
          // },
          // {
          //   path: '/list/card-list',
          //   name: 'cardlist',
          //   component: './List/CardList',
          // },
          // {
          //   path: '/list/search',
          //   name: 'searchlist',
          //   component: './List/List',
          //   routes: [
          //     {
          //       path: '/list/search',
          //       redirect: '/list/search/articles',
          //     },
          //     {
          //       path: '/list/search/articles',
          //       name: 'articles',
          //       component: './List/Articles',
          //     },
          //     {
          //       path: '/list/search/projects',
          //       name: 'projects',
          //       component: './List/Projects',
          //     },
          //     {
          //       path: '/list/search/applications',
          //       name: 'applications',
          //       component: './List/Applications',
          //     },
          //   ],
          // },
        ],
      },
      // {
      //   path: '/profile',
      //   name: 'profile',
      //   icon: 'profile',
      //   routes: [
      //     // profile
      //     {
      //       path: '/profile/basic',
      //       name: 'basic',
      //       component: './Profile/BasicProfile',
      //     },
      //     {
      //       path: '/profile/advanced',
      //       name: 'advanced',
      //       authority: ['admin'],
      //       component: './Profile/AdvancedProfile',
      //     },
      //   ],
      // },
      // {
      //   name: 'result',
      //   icon: 'check-circle-o',
      //   path: '/result',
      //   routes: [
      //     // result
      //     {
      //       path: '/result/success',
      //       name: 'success',
      //       component: './Result/Success',
      //     },
      //     { path: '/result/fail', name: 'fail', component: './Result/Error' },
      //   ],
      // },
      // {
      //   name: 'exception',
      //   icon: 'warning',
      //   path: '/exception',
      //   routes: [
      //     // exception
      //     {
      //       path: '/exception/403',
      //       name: 'not-permission',
      //       component: './Exception/403',
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'not-find',
      //       component: './Exception/404',
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'server-error',
      //       component: './Exception/500',
      //     },
      //     {
      //       path: '/exception/trigger',
      //       name: 'trigger',
      //       hideInMenu: true,
      //       component: './Exception/TriggerException',
      //     },
      //   ],
      // },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          // {
          //   path: '/account/center',
          //   name: 'center',
          //   component: './Account/Center/Center',
          //   routes: [
          //     {
          //       path: '/account/center',
          //       redirect: '/account/center/articles',
          //     },
          //     {
          //       path: '/account/center/articles',
          //       component: './Account/Center/Articles',
          //     },
          //     {
          //       path: '/account/center/applications',
          //       component: './Account/Center/Applications',
          //     },
          //     {
          //       path: '/account/center/projects',
          //       component: './Account/Center/Projects',
          //     },
          //   ],
          // },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Forms/CreateInterviewForm/Step1',
              },
              // {
              //   path: '/account/settings/binding',
              //   component: './Account/Settings/BindingView',
              // },
              // {
              //   path: '/account/settings/notification',
              //   component: './Account/Settings/NotificationView',
              // },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
