import {View} from 'react-native';
import React from 'react';
import Service from '../Component/Service';

export default function ServiceScreen({navigation}) {
  function ToBeforePaymentService() {
    navigation.navigate('BeforePaymentServiceScreen');
  }
  return (
    <View style={{flex: 1}}>
      <Service ToBeforePaymentService={ToBeforePaymentService} />
    </View>
  );
}
