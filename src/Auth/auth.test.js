import AUTH_CONFIG from './auth0-variables';

describe('Auth Variables Test', () => {
  it('Callback URL should point to the recruiter domain', () => {
    expect(AUTH_CONFIG.callbackUrl).toEqual('https://recruiter.jurbly.com/user/callback');
  });

  it('Callback URL should point to the recruiter domain', () => {
    expect(AUTH_CONFIG.domain).toEqual('login.jurbly.com');
  });
});
