import * as User from './User';
import * as PostService from '../services/PostService';

export const register = async (post, callback) => {
  const token = User.getToken();
  const apiResponse = await PostService.register(post, token);

  if (apiResponse.ok) {
    return callback.onRegistered();
  }

  return callback.onError(apiResponse.message);
}
