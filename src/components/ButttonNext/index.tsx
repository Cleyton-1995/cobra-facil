import AntDesign from '@expo/vector-icons/build/AntDesign';
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function ButttonNext() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >
        Próximo
        <AntDesign name="right" size={15} color="#009BF4" />
      </Text>
    </View>
  );
}