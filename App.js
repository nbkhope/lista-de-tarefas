import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Button, ScrollView } from 'react-native';

import Header from './components/Header';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import { fetchTarefas, createTarefa } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: null,
      tarefasCarregando: false,
      tarefasErro: null,
      tarefaNova: '',
      tarefaNovaErro: null,
    };

    this.onTentarNovamentePress = this.onTentarNovamentePress.bind(this);
    this.onTarefaChange = this.onTarefaChange.bind(this);
    this.onTarefaAdd = this.onTarefaAdd.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ tarefasCarregando: true, tarefasErro: null }, () => {
      this.props.fetchTarefas()
        .then(tarefas => {
          this.setState({
            tarefas,
            tarefasCarregando: false
          });
        })
        .catch(error => {
          this.setState({
            tarefasErro: `Houve um erro ao requerer as tarefas: ${error.message}`
          });
        });
    });
  }

  onTentarNovamentePress() {
    this.fetchData();
  }

  onTarefaChange(texto) {
    this.setState({ tarefaNova: texto });
  }

  onTarefaAdd() {
    if (this.state.tarefaNova.length > 0) {
      this.setState({ tarefaNovaErro: null }, () => {
        this.props.createTarefa({ texto: this.state.tarefaNova })
          .then(tarefa => {
            this.setState({
              tarefas: this.state.tarefas.concat(tarefa),
              tarefaNova: '',
            });
          })
          .catch(error => {
            this.setState({
              tarefaNovaErro: `Falha ao criar nova tarefa: ${error.message}`
            });
          });
      });
    }
    else {
      this.setState({
        tarefaNovaErro: 'O texto da tarefa não pode ser vazio'
      });
    }
  }

  renderListaTarefas() {
    if (this.state.tarefasErro) {
      return (
        <View>
          <Text style={{ color: '#ff0000' }}>{this.state.tarefasErro}</Text>
          <Button
            onPress={this.onTentarNovamentePress}
            title="Tentar Novamente"
          />
        </View>
      );
    }
    else if (this.state.tarefas) {
      return <ListaTarefas tarefas={this.state.tarefas} />;
    }

    return <Text>Carregando tarefas...</Text>;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header>Tarefas</Header>
        <View style={styles.main}>
          <NovaTarefa
            value={this.state.tarefaNova}
            onChangeText={this.onTarefaChange}
            onTarefaAdd={this.onTarefaAdd}
            error={this.state.tarefaNovaErro}
          />
          {this.renderListaTarefas()}
        </View>
      </ScrollView>
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
      createTarefa={createTarefa}
    />
  );
}
