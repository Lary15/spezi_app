import React, {useState, useContext} from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {Button, Title, TextInput, Text, useTheme} from 'react-native-paper';

import {AuthContext} from '../providers/AuthProvider';

export default Login = ({navigation}) => {
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  const handleLogin = async () => {
    const response = await authContext.login(email, password);
  }

  return (
    <ScrollView style={{flex: 1, padding: 20}} justifyContent="center">
      <Title style={{alignSelf: 'center'}}> LOGIN </Title>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(email) => setEmail(email)}
        style={{marginTop: 10}}
      />
      <TextInput
        mode="outlined"
        label="Senha"
        value={password}
        autoCapitalize="none"
        secureTextEntry={true} 
        onChangeText={(password) => setPassword(password)}
        style={{marginTop: 10}}
      />
      <Button
        mode="contained"
        style={{marginTop: 20}}
        onPress={() => handleLogin()}>
        Entrar
      </Button>
      <Text style={{marginTop: 20, alignSelf: 'center'}}>
        Não possui cadastro?{' '}
        <Text
          style={{color: colors.primary}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Faça seu cadastro
        </Text>
      </Text>
    </ScrollView>
  );
};
