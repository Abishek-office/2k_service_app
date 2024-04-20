import {View, TextInput} from 'react-native';
import React from 'react';

export default function Input({
  style,
  onBlur,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  type,
}) {
  return (
    <>
      <TextInput
        keyboardType={keyboardType}
        style={[style]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
}
