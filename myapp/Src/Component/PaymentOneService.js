import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';

export default function PaymentOneService() {
  const [selectedValue, setSelectedValue] = useState('');
  function handleCancelOrder() {
    Alert.alert('Are you sure for cancel a order ?');
  }

  return (
    <ImageBackground //this is background img
      style={{flex: 1}}
      source={require('../assets/covertwo.png')}>
      <View //this is for black color opacity
        style={styles.black_color_opacity}>
        <View //this is for white color opacity
          style={styles.white_color_opcity}>
          <View
            style={styles.outer_box} // this is first  box
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                left: 10,
                color: 'white',
              }}>
              Payment
            </Text>
            <View style={styles.box_items}>
              <Text style={styles.box_font}>A.Prasanth</Text>
            </View>
            <View style={styles.box_items}>
              <Text style={styles.box_font}>General Service</Text>
            </View>
            <View style={styles.box_items}>
              <Text style={styles.box_font}>Total:</Text>
              <Text style={styles.box_font}>3100</Text>
            </View>
            <View>
              <Text style={styles.box_font_dash}>
                ----------------------------------------
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.8,
            }}>
            <View
              style={styles.outer_box} // this is sec  box
            >
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Material Amount:</Text>
                <Text style={styles.box_font}>2500</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Service Charge:</Text>
                <Text style={styles.box_font}> 600</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}> Total Amount:</Text>
                <Text style={styles.box_font}>3100</Text>
              </View>

              <View>
                <Text style={styles.box_font_dash}>
                  ---------------------------------------
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 0.8, bottom: 60}}>
            <View
              style={styles.outer_box} // this is third  box
            >
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Payment Amount:</Text>
                <Text style={styles.box_font_payment_amount}>1000</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Balance Amount:</Text>
                <Text style={styles.box_font_payment_amount}>1200</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Payment Mode:</Text>
                <View
                  style={{
                    height: 40,
                    width: 130,
                    backgroundColor: 'black',
                    borderRadius: 5,
                  }}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{flex: 1, textAlign: 'center', bottom: 9}}
                    onValueChange={itemValue => setSelectedValue(itemValue)}>
                    <Picker.Item label="Cash" value="Cash" />
                    <Picker.Item label="Online" value="Online" />

                    {/* Add more options as needed */}
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View // this is buttons
            style={{flex: 0.5}}>
            <TouchableOpacity onPress={handleCancelOrder} style={styles.btns}>
              <Text style={styles.btn}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  outer_box: {
    flex: 0.7,

    // backgroundColor: 'red',
  },
  black_color_opacity: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.8,
    justifyContent: 'center',
    height: 1000,
  },
  white_color_opcity: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    padding: 10,
    top: 10,
  },
  box_font: {
    fontSize: 18,
    top: 0,
    color: 'white',
  },
  sec_box_font: {
    fontSize: 18,
    color: 'white',
  },
  box_font_dash: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    // backgroundColor: 'pink'
    height: 30,
  },
  box_items: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  fourth_box_items: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  first_box_Username: {
    fontSize: 20,
  },
  sec_box: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  third_box: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  fourth_box: {
    flex: 0.5,
    // backgroundColor: 'green',
  },
  fourth_box_div: {
    flex: 1,
  },
  btns: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'white',
    color: 'black',
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
    height: 35,
    bottom: 100,
    fontSize: 20,
  },
  box_font_payment_amount: {
    fontSize: 18,
    top: 0,
    color: 'white',
    backgroundColor: 'black',
    width: 100,
    textAlign: 'center',
    borderRadius: 5,
  },
});
