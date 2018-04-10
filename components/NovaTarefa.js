import React from 'react';
import { View, Text } from 'react-native';

import CampoTarefa from './CampoTarefa';

const NovaTarefa = (props) => {
  return (
    <View>
      <CampoTarefa
        value={props.value}
        onChangeText={props.onChangeText}
        onTarefaAdd={props.onTarefaAdd}
        error={!!props.error}
      />
      {props.error
        ? <Text style={{ color: '#ff0000' }}>{props.error}</Text>
        : null}
    </View>
  );
};

export default NovaTarefa;
