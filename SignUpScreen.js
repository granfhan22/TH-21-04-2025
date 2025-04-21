import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const userData = { username, email, password };
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    Alert.alert('Success', 'Account created successfully');
    navigation.navigate('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
