import React, {createContext, useEffect, useState, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login, logout, signUp} from '../services/user';

export const AuthContext = createContext();

const Auth = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((user) => setUser(JSON.parse(user)))
      .catch((e) => console.log(e));
  }, [user]);

  const userHandle = useMemo(
    () => ({
      data: user,
      signUp: async (email, password) => {
        try {
          await signUp(email, password);
        } catch (e) {
          return e;
        }
      },
      login: async (email, password) => {
        try {
          const response = await login(email, password);

          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        } catch (e) {
          return e;
        }
      },
      logout: async () => {
        try {
          const response = await logout();

          await AsyncStorage.clear();
          setUser(null);
        } catch (e) {
          return e;
        }
      },
    }),
    [user],
  );

  return (
    <AuthContext.Provider value={userHandle}>{children}</AuthContext.Provider>
  );
};
export default Auth;
