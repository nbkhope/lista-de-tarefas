import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tarefa extends Component {
  render() {
    return (
      <View style={styles.tarefaView}>
        <Text style={styles.tarefaText}>• {this.props.tarefa.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tarefaView: { marginBottom: 6 },
  tarefaText: { fontSize: 16 },
});

export default Tarefa;
