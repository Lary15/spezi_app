import api from './api';

export const login = (email, password) => {
  return api.post('/login', {
    user: {
      email,
      password
    }
  });
};

export const signUp = (email, password) => {
  return api.post('/signup', {
    user: {
      email,
      password
    }
  });
};

export const logout = () => {
  return api.delete('/logout');
};