import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ActionButton from './ActionButton';

class Tarefa extends Component {
  render() {
    return (
      <View style={styles.tarefaView}>
        <Text style={styles.tarefaText}>• {this.props.tarefa.texto}</Text>
        <ActionButton content="✎" onPress={() => null} />
        <ActionButton content="✖" onPress={() => null} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tarefaView: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  tarefaText: { fontSize: 16 },
});

export default Tarefa;
