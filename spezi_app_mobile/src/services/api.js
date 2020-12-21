import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const url = 'http://192.168.0.5:3000';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        let today = new Date();
        let expiration = new Date(JSON.parse(user).exp);

        if (expiration > today)
          config.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
        else await AsyncStorage.clear();
      }
      return config;
    } catch (e) {
      console.log(e);
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
