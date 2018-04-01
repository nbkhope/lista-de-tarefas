import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

import Header from './components/Header';
import ListaTarefas from './components/ListaTarefas';

class App extends React.Component {
  render() {
    const tarefas = [
      {
        id: 'abc123',
        texto: 'Lavar o carro'
      },
      {
        id: 'def456',
        texto: 'Fazer o almoço'
      },
    ];

    return (
      <View style={styles.container}>
        <Header>Tarefas</Header>
        <ListaTarefas tarefas={tarefas} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#cccccc',
  },
});

export default App;
