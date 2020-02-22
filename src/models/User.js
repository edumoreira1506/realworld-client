import * as UserService from '../services/UserService';

export const isAuthenticated = () => Boolean(getToken());

const getToken = () => window.localStorage.getItem('token');

const getId = () => window.localStorage.getItem('id');

const setToken = token => window.localStorage.setItem('token', token);

const setId = id => window.localStorage.setItem('id', id);

export const authenticate = user => {
  setToken(user.token);
  setId(user._id);

  window.location.reload();
}

export const login = async (email, password, callback) => {
  const apiResponse = await UserService.login(email, password);

  if (apiResponse.ok) {
    return callback.onAuthenticated(apiResponse.user)
  }

  return callback.onError(apiResponse.message)
}

export const register = async (user, callback) => {
  const apiResponse = await UserService.register(user);

  if (apiResponse.ok) {
    return callback.onRegistered();
  }

  return callback.onError(apiResponse.message);
}
