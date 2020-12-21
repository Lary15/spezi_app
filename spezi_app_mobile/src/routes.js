import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from './providers/AuthProvider';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Maps from './pages/Maps';

const Stack = createStackNavigator();

export default Routes = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.data ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
