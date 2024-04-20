import {View} from 'react-native';
import React from 'react';
import Login from '../Component/Login';

export default function LoginScreen({navigation}) {
  function handleNavigate() {
    navigation.navigate('HomeScreen');
  }
  return (
    <View style={{flex: 1}}>
      <Login handleNavigate={handleNavigate} />
    </View>
  );
}
