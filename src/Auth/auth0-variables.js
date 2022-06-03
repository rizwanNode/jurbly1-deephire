const currentUrl = `${window.location.origin}/user/callback`;

const AUTH_CONFIG = {
  domain: 'dev--sdco1d1.us.auth0.com',
  clientId: '4iZ4LA4Xyw8xKvjmU3oHdWtIz1TQhmgB',
<<<<<<< HEAD
  // callbackUrl: currentUrl,
  callbackUrl: 'http://localhost:8000/user/callback',
  // callbackUrl: 'https://recruiter.jurbly.com/user/callback',
=======
//   callbackUrl: currentUrl,
  // callbackUrl: 'http://localhost:8000/user/callback',
  callbackUrl: 'https://recruiter.jurbly.com/user/callback',
>>>>>>> f91c1404b3a84c8bbfa1671e82db4a5dc45a9165
  dbConnectionName: 'JurblyDB',
};

export default AUTH_CONFIG;
