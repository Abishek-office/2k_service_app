// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
// const {Navigator, Screen} = Stack;
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Home from './Src/Pages/Home';
// import Login from './Src/Pages/Login';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={styles.Save_area}>
//       <View>
//
//       </View>
//       {/* <Home /> */}
//       {/* <Login /> */}
//       {/* <Text style={styles.text}>Hello Brother</Text>
//       <Button title="Naviage to login"></Button> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   Save_area: {backgroundColor: 'skyblue', flex: 1, justifyContent: 'center'},
//   text: {color: 'black', textAlign: 'center'},
// });

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Src/Pages/LoginScreen';
import HomeScreen from './Src/Pages/HomeScreen';
import SignupScreen from './Src/Pages/SignupScreen';
import ServiceScreen from './Src/Pages/ServiceScreen';
import TopNavigate from './Src/Component/TopNavigate';
import BeforePaymentServiceScreen from './Src/Pages/BeforePaymentServiceScreen';
import BeforePaymentOrderScreen from './Src/Pages/BeforePaymentOrderScreen';
import PaymentOneServiceScreen from './Src/Pages/PaymentOneServiceScreen';
import OrderScreen from './Src/Pages/OrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="ServiceScreen"
            component={ServiceScreen}
            options={() => ({
              header: () => <TopNavigate />,
            })}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{header: () => <TopNavigate />}}
          />
          <Stack.Screen
            name="BeforePaymentServiceScreen"
            component={BeforePaymentServiceScreen}
            options={() => ({header: () => <TopNavigate />})}
          />
          <Stack.Screen
            name="BeforePaymentOrderScreen"
            component={BeforePaymentOrderScreen}
            options={() => ({header: () => <TopNavigate />})}
          />
          <Stack.Screen
            name="PaymentOneServiceScreen"
            component={PaymentOneServiceScreen}
            options={() => ({header: () => <TopNavigate />})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
