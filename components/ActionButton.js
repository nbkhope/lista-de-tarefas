import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.touchable}>
      <Text>{props.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ActionButton;
