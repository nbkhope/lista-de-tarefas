import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tarefa extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.tarefa.texto}</Text>
      </View>
    );
  }
}

export default Tarefa;
