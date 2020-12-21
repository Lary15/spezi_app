import React, {useState, useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {Button, Title, TextInput, Text, useTheme} from 'react-native-paper';

import {AuthContext} from '../providers/AuthProvider';

export default Signup = ({navigation}) => {
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  const handleSignup = async () => {
    const response = await authContext.signUp(email, password);
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{flex: 1, padding: 20}} justifyContent="center">
      <Title style={{alignSelf: 'center'}}> CADASTRO </Title>
      <TextInput
        mode="outlined"
        label="Email"
        keyboardType="email-address"
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
        onPress={() => handleSignup()}>
        cadastrar
      </Button>
      <Text style={{marginTop: 20, alignSelf: 'center'}}>
        Já possui cadastro?{' '}
        <Text
          style={{color: colors.primary}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Faça seu login
        </Text>
      </Text>
    </ScrollView>
  );
};
