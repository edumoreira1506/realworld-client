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

export const favorite = async (postId, token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const { data } = await api.post(`post/${postId}/favorite`, {}, config);

  return data;
}
