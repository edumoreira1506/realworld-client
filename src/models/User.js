import * as UserService from '../services/UserService';

export const isAuthenticated = () => Boolean(getToken());

const getToken = () => window.localStorage.getItem('token');

export const getId = () => window.localStorage.getItem('id');

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

export const logout = () => {
  window.localStorage.clear();
  window.location.reload();
}

export const register = async (user, callback) => {
  const apiResponse = await UserService.register(user);

  if (apiResponse.ok) {
    return callback.onRegistered();
  }

  return callback.onError(apiResponse.message);
}

export const find = async (userId, callback) => {
  const apiResponse = await UserService.find(userId);

  if (apiResponse.ok) {
    return callback.onFound(apiResponse.user);
  }

  return callback.onError(apiResponse.message);
}

export const follow = async (userId, callback) => {
  const token = getToken() || '';
  const apiResponse = await UserService.follow(userId, token);

  if (apiResponse.ok) {
    return callback.onFollowed(apiResponse.message);
  }

  return callback.onError(apiResponse.message);
}

export const edit = async (user, callback) => {
  const token = getToken();
  const userId = getId();
  const apiResponse = await UserService.edit(user, userId, token);

  if (apiResponse.ok) {
    return callback.onEdited();
  }

  return callback.onError(apiResponse.message);
}
