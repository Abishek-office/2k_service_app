import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

export default function FirstInvoice() {
  return (
    <View>
      <View>
        <View style={styles.box_one_div}>
          <Text style={styles.box_one_text}>Invoice</Text>
          <View style={styles.box_one_img_div}>
            <ImageBackground
              style={styles.box_one_img}
              source={require('../assets/share-img.png')}
            />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box_one_text: {
    fontSize: 30,
    color: 'black',
  },
  box_one_img: {
    width: 33,
    height: 40,
  },
  box_one_img_div: {
    width: 45,
    height: 45,
    backgroundColor: 'lightgreen',
    borderRadius: 30,
  },
  box_one_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
