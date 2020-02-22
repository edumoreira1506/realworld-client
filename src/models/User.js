import * as UserService from '../services/UserService';

export const isAuthenticated = () => Boolean(getToken());

const getToken = () => window.localStorage.getItem('token');

const setToken = token => window.localStorage.setItem('token', token);

export const authenticate = user => {
  setToken(user.token);

  window.location.reload();
}

export const login = async (email, password, callback) => {
  const apiResponse = await UserService.login(email, password);

  if (apiResponse.ok) {
    return callback.onAuthenticated(apiResponse.user)
  }

  return callback.onError(apiResponse.message)
}
