import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
function Home({service_request_btn, order_requst_btn}) {
  return (
    <View style={styles.container}>
      <View style={styles.service_request}>
        <ImageBackground
          style={styles.imageBackground_service_request}
          source={require('../assets/TopImage.jpeg')}
          resizeMode="cover">
          <TouchableOpacity
            onPress={service_request_btn}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.service_request_text}>Service Request</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.order_requst}>
        <ImageBackground
          style={styles.imageBackground_order_request}
          source={require('../assets/BottomImage.jpeg')}
          resizeMode="cover">
          <TouchableOpacity
            onPress={order_requst_btn}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.order_requst_text}>Order Request</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  service_request: {
    width: '100%',
    height: 420,
  },
  order_requst: {
    width: '100%',
    height: 420,
  },
  imageBackground_service_request: {
    flex: 1,
  },
  imageBackground_order_request: {
    flex: 1,
  },
  service_request_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    margin: 12,
  },
  order_requst_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    margin: 12,
  },
});

export default Home;
