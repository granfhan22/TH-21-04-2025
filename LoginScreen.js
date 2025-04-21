import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedData = await AsyncStorage.getItem('user');
    const user = storedData ? JSON.parse(storedData) : null;

    if (user && user.email === email && user.password === password) {
      Alert.alert('Success', 'Logged in');
      navigation.navigate('SelectLocation');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
