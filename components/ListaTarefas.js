import React from 'react';
import { View } from 'react-native';

import Tarefa from './Tarefa';

const ListaTarefas = (props) => {
  const tarefas = props.tarefas.map(tarefa => (
    <Tarefa key={tarefa.id} tarefa={tarefa} />
  ));

  return (
    <View style={{ flex: 1 }}>
      {tarefas}
    </View>
  );
};

export default ListaTarefas;
