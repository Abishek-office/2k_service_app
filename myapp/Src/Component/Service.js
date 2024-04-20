import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../Component/Input';
import {useForm, Controller} from 'react-hook-form';

export default function Service({ToBeforePaymentService}) {
  const {control, watch, handleSubmit, reset, setValue, formState} = useForm();
  const {MaterialAmount, ServiceCharge, userName} = watch();
  const {errors} = formState;
  useEffect(() => {
    let value = Number(MaterialAmount) + Number(ServiceCharge);
    console.log('Fon', value);
    setValue('TotalAmount', value.toString());
  }, [MaterialAmount, ServiceCharge]);
  function onSubmit(data) {
    console.log(data);
    reset();
    ToBeforePaymentService();
    // if (Object.keys(data).length === 0) {
    //   console.log('Please fill all the fields');
    // } else {
    //   console.log(data);
    //   reset();
    // }
  }

  return (
    <ImageBackground source={require('../assets/cover.png')}>
      <View style={{backgroundColor: 'black', opacity: 0.8}}>
        <ScrollView>
          <View style={styles.input_view}>
            <Text style={styles.lable}>User Name</Text>
            <Controller
              control={control}
              name="userName"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Product Name',
                },
                minLength: {
                  value: 3,
                  message: 'Enter the Name Properly',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.userName?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Product Name</Text>
            <Controller
              control={control}
              name="productName"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Product Name',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.productName?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Product Model</Text>
            <Controller
              control={control}
              name="productModel"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Product Model',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.productModel?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Complince</Text>
            <Controller
              control={control}
              name="Complince"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Complince',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.Complince?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Customised Material</Text>
            <Controller
              control={control}
              name="CustomisedMaterial"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Customised Material',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>
              {errors.CustomisedMaterial?.message}
            </Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Material Amount</Text>
            <Controller
              control={control}
              name="MaterialAmount"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Material Amount',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  keyboardType="numeric"
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.MaterialAmount?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Service Charge</Text>
            <Controller
              control={control}
              name="ServiceCharge"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Service Charge',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text style={styles.error}>{errors.ServiceCharge?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Total Amount</Text>
            <Controller
              control={control}
              name="TotalAmount"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Total Amount',
                },
              }}
              render={({field}) => (
                <Input
                  type="number"
                  keyboardType="numeric"
                  style={styles.input_one}
                  {...field}
                />
              )}
            />
            <Text style={styles.error}>{errors.TotalAmount?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Contact Number</Text>
            <Controller
              control={control}
              name="ContactNumber"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Contact Number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            <Text style={styles.error}>{errors.ContactNumber?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Whats app Number</Text>
            <Controller
              control={control}
              name="WhatsappNumber"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Whats app Number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            <Text style={styles.error}>{errors.WhatsappNumber?.message}</Text>
          </View>
          <View style={styles.input_view}>
            <Text style={styles.lable}>Delivery Date</Text>
            <Controller
              control={control}
              name="DeliveryDate"
              rules={{
                required: {
                  value: true,
                  message: 'Enter the Delivery Date',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={styles.input_one}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />

            <Text style={styles.error}>{errors.DeliveryDate?.message}</Text>
          </View>
          <View style={{alignItems: 'center', padding: 30}}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={styles.login_btn}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input_one: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    paddingLeft: 15,
  },
  input_view: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
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
  },
  lable: {
    color: 'white',
  },
  error: {
    color: 'red',
  },
});
