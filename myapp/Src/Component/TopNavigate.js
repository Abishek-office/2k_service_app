import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TopItems() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.nav}>
      <View style={styles.nav_background}>
        <TouchableOpacity onPress={goBack}>
          <ImageBackground
            style={styles.goback_img}
            source={require('../assets/goback.png')}
          />
        </TouchableOpacity>
        <View style={styles.img_text}>
          <ImageBackground
            style={styles.goback_img}
            source={require('../assets/logo-2k.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 28,
            }}>
            2k Service
          </Text>
        </View>

        <TouchableOpacity>
          <ImageBackground
            style={styles.goback_img}
            source={require('../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  nav: {
    height: 60,
    backgroundColor: 'white',
  },
  goback_img: {
    width: 40,
    height: 40,
  },
  nav_background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
  },
  img_text: {
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    justifyContent: 'space-evenly',
    width: 200,
  },
});
