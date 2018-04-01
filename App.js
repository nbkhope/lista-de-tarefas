import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>Tarefas</Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});

export default App;
