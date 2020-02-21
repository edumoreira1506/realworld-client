import 'dotenv';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://edumoreira1506.github.io/realworld-client/#'
  : 'http://localhost:3000/realworld-client/#';

export const apiUrl = process.env.URL_API || 'https://realworld-api-edumoreira1506.herokuapp.com/';

export const routes = {
  TIME_LINE: `${baseUrl}/`,
  LOGIN: `${baseUrl}/login`,
  REGISTER: `${baseUrl}/register`
}
