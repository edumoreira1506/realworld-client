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

export const comment = async (content, postId, token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const body = { content };
  const { data } = await api.post(`post/${postId}/comment`, body, config);

  return data;
}

export const find = async (postId) => {
  const { data } = await api.get(`post/${postId}`);

  return data;
}

export const findComments = async (postId) => {
  const { data } = await api.get(`post/${postId}/comment`);

  return data;
}
