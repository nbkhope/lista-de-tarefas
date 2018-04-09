import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

import Header from './components/Header';
import ListaTarefas from './components/ListaTarefas';
import { fetchTarefas } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: null,
      tarefasCarregando: false,
    };
  }

  componentDidMount() {
    this.setState({ tarefasCarregando: true }, () => {
      this.props.fetchTarefas()
        .then(tarefas => {
          this.setState({
            tarefas,
            tarefasCarregando: false
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  renderListaTarefas() {
    if (this.state.tarefas) {
      return <ListaTarefas tarefas={this.state.tarefas} />;
    }

    return <Text>Carregando tarefas...</Text>;
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header>Tarefas</Header>
        <View style={styles.main}>
          {this.renderListaTarefas()}
        </View>
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
  main: {
    padding: 12,
    flex: 1,
  }
});

export default (props) => {
  return (
    <App
      {...props}
      fetchTarefas={fetchTarefas}
    />
  );
}
