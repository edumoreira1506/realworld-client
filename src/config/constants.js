require('dotenv').config();

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://edumoreira1506.github.io/realworld-client/#'
  : 'http://localhost:3000/realworld-client/#';

export const apiUrl = process.env.REACT_APP_URL_API || 'https://realworld-api-edumoreira1506.herokuapp.com/';

export const routes = {
  TIME_LINE: `${baseUrl}/time_line`,
  LOGIN: `${baseUrl}/login`,
  REGISTER: `${baseUrl}/register`,
  EDIT: `${baseUrl}/edit_profile`,
  EDIT_PASSWORD: `${baseUrl}/edit_password`,
  LOGOUT: `${baseUrl}/logout`
}
