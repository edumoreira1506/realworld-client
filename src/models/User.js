export const isAuthenticated = () => Boolean(getUsername());

const getUsername = () => window.localStorage.getItem('username');
