import {View, Text} from 'react-native';
import React from 'react';
import BeforePaymentService from '../Component/BeforePaymentService';

export default function BeforePaymentServiceScreen({navigation}) {
  function payment() {
    navigation.navigate('PaymentOneServiceScreen');
  }
  return (
    <View style={{flex: 1}}>
      <BeforePaymentService payment={payment} />
    </View>
  );
}
