import * as UserService from '../services/UserService';
import { formatFromArray } from '../helpers/time';

export const redirectTo = url => window.location = url;

export const isAuthenticated = () => Boolean(getToken());

export const getToken = () => window.localStorage.getItem('token');

export const getId = () => window.localStorage.getItem('id');

export const getUsername = () => window.localStorage.getItem('username');

const setToken = token => window.localStorage.setItem('token', token);

const setUsername = username => window.localStorage.setItem('username', username);

const setId = id => window.localStorage.setItem('id', id);

export const authenticate = user => {
  setToken(user.token);
  setId(user._id);
  setUsername(user.username);

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

export const getTimeLine = async (callback) => {
  const userId = getId();
  const apiResponse = await UserService.timeLine(userId);

  if (apiResponse.ok) {
    return callback.onFound(apiResponse.posts);
  }

  return callback.onError(apiResponse.message);
}

export const getPosts = async (userId, callback) => {
  const apiResponse = await UserService.getPosts(userId);

  if (apiResponse.ok) {
    const posts = formatFromArray(apiResponse.posts);

    return callback.onFound(posts);
  }

  return callback.onError(apiResponse.message);
}

export const getFavoritePosts = async (userId, callback) => {
  const apiResponse = await UserService.getFavoritePosts(userId);

  if (apiResponse.ok) {
    const posts = formatFromArray(apiResponse.posts);

    return callback.onFound(posts);
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
