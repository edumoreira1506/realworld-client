import * as User from './User';
import * as PostService from '../services/PostService';
import { format } from '../helpers/time';

export const register = async (post, callback) => {
  const token = User.getToken();
  const apiResponse = await PostService.register(post, token);

  if (apiResponse.ok) {
    return callback.onRegistered();
  }

  return callback.onError(apiResponse.message);
}

export const favorite = async (postId, callback) => {
  const token = User.getToken();
  const apiResponse = await PostService.favorite(postId, token);

  if (apiResponse.ok) {
    return callback.onFavorited();
  }

  return callback.onError(apiResponse.message);
}

export const find = async (postId, callback) => {
  const apiResponse = await PostService.find(postId);

  if (apiResponse.ok) {
    return callback.onFound({
      ...apiResponse.post,
      createdAt: format(apiResponse.post.createdAt),
      updatedAt: format(apiResponse.post.updatedAt)
    });
  }

  return callback.onError(apiResponse.message);
}

export const addUser = (post, user) => ({
  ...post,
  user
});
