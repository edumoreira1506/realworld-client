import api from './api';

export const login = async (email, password) => {
  const body = { email, password };

  const { data } = await api.post('auth', body);

  return data;
}
