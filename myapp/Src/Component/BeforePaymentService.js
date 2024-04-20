import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

export default function BeforePaymentService({payment}) {
  function handleCancelOrder() {
    Alert.alert('Are you sure for cancel a order ?');
  }
  return (
    <ImageBackground //this is background img
      style={{flex: 1}}
      source={require('../assets/covertwo.png')}>
      <ScrollView>
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
                Service Order
              </Text>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Username:</Text>
                <Text style={styles.box_font}>A.Prasanth</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Contact Number:</Text>
                <Text style={styles.box_font}>9876354219</Text>
              </View>
              <View style={styles.box_items}>
                <Text style={styles.box_font}>Whatsapp Number:</Text>
                <Text style={styles.box_font}>9876354219</Text>
              </View>
              <View>
                <Text style={styles.box_font_dash}>
                  ----------------------------------------
                </Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View
                style={styles.outer_box} // this is sec  box
              >
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Product Name:</Text>
                  <Text style={styles.box_font}>Laptop</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Complince:</Text>
                  <Text style={styles.box_font}>Battery issue</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Change Material:</Text>
                  <Text style={styles.box_font}>Battery</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Product Model</Text>
                  <Text style={styles.box_font}>Lenovo ThinkPad</Text>
                </View>
                <View>
                  <Text style={styles.box_font_dash}>
                    ---------------------------------------
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View
                style={styles.outer_box} // this is third  box
              >
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Product Name:</Text>
                  <Text style={styles.box_font}>Laptop</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Complince:</Text>
                  <Text style={styles.box_font}>Battery issue</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Change Material:</Text>
                  <Text style={styles.box_font}>Battery</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Product Model</Text>
                  <Text style={styles.box_font}>Lenovo ThinkPad</Text>
                </View>
                <View>
                  <Text style={styles.box_font_dash}>
                    --------------------------------------
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.7}}>
              <View
                style={styles.outer_box} // this is fourth  box
              >
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Start Date:</Text>
                  <Text style={styles.box_font}>25-Apr-2024</Text>
                </View>
                <View style={styles.box_items}>
                  <Text style={styles.box_font}>Delivery Date:</Text>
                  <Text style={styles.box_font}>27-Apr-2024</Text>
                </View>

                <View>
                  <Text style={styles.box_font_dash}>
                    --------------------------------------
                  </Text>
                </View>
              </View>
            </View>
            <View // this is buttons
              style={{flex: 0.8}}>
              <TouchableOpacity onPress={payment} style={styles.btns}>
                <Text style={styles.btn}>Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelOrder} style={styles.btns}>
                <Text style={styles.btn}>Cancel Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  outer_box: {
    flex: 1,

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
    bottom: 10,
    fontSize: 20,
  },
});
