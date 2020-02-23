import api from './api';

export const login = async (email, password) => {
  const body = { email, password };

  const { data } = await api.post('auth', body);

  return data;
}

export const register = async (user) => {
  const { data } = await api.post('user', user);

  return data;
}

export const find = async (userId) => {
  const { data } = await api.get(`user/${userId}`);

  return data;
}

export const edit = async (user, userId, token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const { data } = await api.patch(`user/${userId}`, user, config);

  return data;
}
