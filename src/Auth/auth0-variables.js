const currentUrl = `${window.location.origin}/user/callback`;

const AUTH_CONFIG = {
  domain: 'dev--sdco1d1.us.auth0.com',
  clientId: '4iZ4LA4Xyw8xKvjmU3oHdWtIz1TQhmgB',
  // callbackUrl: currentUrl,
  callbackUrl: 'http://localhost:8000/user/callback',
  // callbackUrl: 'https://recruiter.jurbly.com/user/callback',
  dbConnectionName: 'JurblyDB',
};

export default AUTH_CONFIG;
