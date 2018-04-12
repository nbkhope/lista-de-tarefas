import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Button, ScrollView } from 'react-native';

import Header from './components/Header';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import {
  fetchTarefas,
  createTarefa,
  updateTarefa,
  deleteTarefa,
} from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: null,
      tarefasCarregando: false,
      tarefasErro: null,
      tarefaNova: '',
      tarefaNovaErro: null,
      tarefaNovaCarregando: false,
    };

    this.onTentarNovamentePress = this.onTentarNovamentePress.bind(this);
    this.onTarefaChange = this.onTarefaChange.bind(this);
    this.onTarefaAdd = this.onTarefaAdd.bind(this);
    this.onTarefaUpdate = this.onTarefaUpdate.bind(this);
    this.onTarefaRemove = this.onTarefaRemove.bind(this);
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
      this.setState({ tarefaNovaErro: null, tarefaNovaCarregando: true }, () => {
        this.props.createTarefa({ texto: this.state.tarefaNova })
          .then(tarefa => {
            this.setState({
              tarefas: this.state.tarefas.concat(tarefa),
              tarefaNova: '',
              tarefaNovaCarregando: false,
            });
          })
          .catch(error => {
            this.setState({
              tarefaNovaErro: `Falha ao criar nova tarefa: ${error.message}`,
              tarefaNovaCarregando: false,
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

  onTarefaUpdate(updatedTarefa) {
    return this.props.updateTarefa(updatedTarefa)
      .then(tarefaAtualizada => {
        const listaAtualizada = this.state.tarefas.map(tarefa => {
          if (tarefa.id === tarefaAtualizada.id) {
            return tarefaAtualizada;
          }

          return tarefa;
        });

        this.setState({ tarefas: listaAtualizada });

        return tarefaAtualizada;
      });
  }

  onTarefaRemove(tarefaId) {
    return this.props.deleteTarefa(tarefaId)
      .then(() => {
        this.setState({
          tarefas: this.state.tarefas.filter(tarefa => tarefa.id !== tarefaId)
        });
      });
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
      return (
        <ListaTarefas
          tarefas={this.state.tarefas}
          onTarefaUpdate={this.onTarefaUpdate}
          onTarefaRemove={this.onTarefaRemove}
        />
      );
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
            loading={this.state.tarefaNovaCarregando}
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
      updateTarefa={updateTarefa}
      deleteTarefa={deleteTarefa}
    />
  );
}
