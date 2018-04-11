import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

const CampoTarefa = (props) => {
  const textInputStyle = [styles.textInput];
  if (props.error) {
    textInputStyle.push(styles.error);
  }
  return (
    <TextInput
      style={textInputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      maxLength={64}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    padding: 6,
  },
  error: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)'
  },
});

export default CampoTarefa;
