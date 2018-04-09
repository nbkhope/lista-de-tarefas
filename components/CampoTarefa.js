import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CampoTarefa = (props) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    padding: 6,
  },
});

export default CampoTarefa;
