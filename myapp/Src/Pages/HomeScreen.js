import {View, Text} from 'react-native';
import React from 'react';
import Home from '../Component/Home';

export default function HomeScreen({navigation}) {
  function service_request_btn() {
    navigation.navigate('ServiceScreen');
  }
  function order_requst_btn() {
    navigation.navigate('OrderScreen');
  }
  return (
    <View style={{flex: 1}}>
      <Home
        service_request_btn={service_request_btn}
        order_requst_btn={order_requst_btn}
      />
    </View>
  );
}
