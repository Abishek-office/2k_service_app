import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';

export default function Login({handleNavigate}) {
  const {control, handleSubmit, reset, formState} = useForm();
  const {errors} = formState;
  const [togglepassword, settogglepassword] = useState(false);

  function onSubmit(data) {
    console.log(data.mobileNumber);
    console.log(data.password);
    reset();
    handleNavigate();
  }

  function toggleEffect() {
    settogglepassword(previousState => !previousState);
  }

  return (
    <View style={styles.login_div}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/cover.png')}>
        <View style={styles.image_text}>
          <ImageBackground
            style={styles.logo}
            source={require('../assets/logo-2k.png')}
          />
          <Text style={styles.input_logo_field}>2k Service</Text>
        </View>
        <View style={styles.input_field}>
          <View
            style={{
              rowGap: 1,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{width: 300, fontSize: 15, top: 10, color: 'white'}}>
              Mobile Number
            </Text>
            <Controller
              control={control}
              name="mobileNumber"
              rules={{
                required: {
                  value: true,
                  message: 'Please Enter the MobileNumber',
                },
                minLength: {
                  value: 10,
                  message: 'Invalid Mobile Number',
                },
                maxLength: {
                  value: 10,
                  message: 'Invalid Mobile Number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input_text}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            <Text style={styles.error}>{errors.mobileNumber?.message}</Text>
            <Text style={{width: 300, fontSize: 15, top: 10, color: 'white'}}>
              Password
            </Text>
            <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: 'Please Enter the Password',
                },
                minLength: {
                  value: 6,
                  message: 'Invalid Password',
                },
                maxLength: {
                  value: 10,
                  message: 'Invalid Password',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input_text}
                  onBlur={onBlur}
                  onChangeText={value => {
                    onChange(value);
                  }}
                  secureTextEntry={!togglepassword}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.password?.message}</Text>

            <TouchableOpacity onPress={toggleEffect}>
              <ImageBackground
                style={styles.password_icon}
                source={require('../assets/Eye.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.login_btn}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  input_text: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 300,
    height: 43,
    padding: 10,
  },
  logo: {
    height: 190,
    width: 190,
  },
  login_div: {
    // backgroundColor: 'black',
    flex: 2,
  },
  image_text: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
  },
  input_logo_field: {
    fontSize: 30,
    color: 'white',
  },
  input_field: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'space-between',
    backgroundColor: 'black',
    opacity: 0.8,
  },
  login_btn: {
    backgroundColor: 'white',
    color: 'black',
    width: 250,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    padding: 2,
    fontSize: 20,
    marginBottom: 50,
  },
  password_icon: {
    width: 20,
    height: 20,
    left: 270,
    bottom: 50,
  },
  error: {
    color: 'red',
  },
});
