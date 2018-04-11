import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CampoTarefa from './CampoTarefa';
import ActionButton from './ActionButton';

const NovaTarefa = (props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 7 }}>
          <CampoTarefa
            value={props.value}
            onChangeText={props.onChangeText}
            onTarefaAdd={props.onTarefaAdd}
            error={!!props.error}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActionButton content="+" onPress={props.onTarefaAdd} />
        </View>
      </View>

      {props.error
        ? <Text style={{ color: '#ff0000' }}>{props.error}</Text>
        : null}
    </View>
  );
};

export default NovaTarefa;
