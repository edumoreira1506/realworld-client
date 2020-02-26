import api from './api';

export const register = async (post, token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const { data } = await api.post('post', post, config);

  return data;
}
