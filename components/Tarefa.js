import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ActionButton from './ActionButton';
import CampoTarefa from './CampoTarefa';

class Tarefa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editando: false,
      tarefaEditada: props.tarefa.texto,
      tarefaErro: null,
      tarefaCarregando: false,
    };

    this.onEditPress = this.onEditPress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onUpdatePress = this.onUpdatePress.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
    this.onTarefaChange = this.onTarefaChange.bind(this);
  }

  onEditPress() {
    this.setState({
      tarefaEditada: this.props.tarefa.texto,
      tarefaErro: null,
      editando: true,
    });
  }

  onDeletePress() {
    this.setState({ tarefaCarregando: true }, () => {
      this.props.onTarefaRemove(this.props.tarefa.id)
        .then(() => {
          this.setState({ tarefaCarregando: false });
        })
        .catch(error => {
          this.setState({
            tarefaErro: 'Houve um erro ao tentar deletar a tarefa com id ' +
            `${this.props.tarefa.id}: ${error.message}`,
            tarefaCarregando: false,
          });
        });
    })
  }

  onUpdatePress() {
    if (this.state.tarefaEditada.length > 0) {
      this.setState({ tarefaErro: null, tarefaCarregando: true }, () => {
        this.props.onTarefaUpdate({
          id: this.props.tarefa.id,
          texto: this.state.tarefaEditada
        })
          .then(tarefaAtualizada => {
            this.setState({ editando: false, tarefaCarregando: false });
          })
          .catch(error => {
            this.setState({
              tarefaErro: `Houve um erro ao tentar atualizar a tarefa: ${error.message}`,
              tarefaCarregando: false,
            });
          });
      });
    }
    else {
      this.setState({
        tarefaErro: 'O texto da tarefa não pode ficar vazio'
      });
    }
  }

  onCancelPress() {
    this.setState({ editando: false });
  }

  onTarefaChange(texto) {
    this.setState({ tarefaEditada: texto });
  }

  render() {
    if (this.state.editando) {
      return (
        <View style={[styles.tarefaView, { flexDirection: 'row' }]}>
          <View style={{ flex: 3 }}>
            <CampoTarefa
              value={this.state.tarefaEditada}
              onChangeText={this.onTarefaChange}
              error={!!this.state.tarefaErro}
            />
          </View>
          <View style={styles.containerAcaoEditando}>
            <ActionButton
              content="✔"
              onPress={this.onUpdatePress}
              loading={this.state.tarefaCarregando}
            />
            <ActionButton content="⃠" onPress={this.onCancelPress} />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.tarefaView}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.tarefaText}>• {this.props.tarefa.texto}</Text>
          <ActionButton content="✎" onPress={this.onEditPress} />
          <ActionButton
            content="✖"
            onPress={this.onDeletePress}
            loading={this.state.tarefaCarregando}
          />
        </View>
        {this.state.tarefaErro ? <View>
          <Text style={{ color: '#ff0000' }}>{this.state.tarefaErro}</Text>
        </View> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tarefaView: {
    marginBottom: 6,
  },
  tarefaText: { fontSize: 16 },
  containerAcaoEditando: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Tarefa;
