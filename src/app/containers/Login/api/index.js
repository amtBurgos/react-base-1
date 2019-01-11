// import * as conf from 'conf';
import * as mocks from './mocks';

export const loginRequest = async () => {
  // const response = await fetch('');
  // const data = await response.json();
  const data = mocks.loginSuccess;
  sessionStorage.setItem('token', data.access_token);
};
export const logoutRequest = async () => {
  sessionStorage.removeItem('token');
  return true;
};
