import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

export function InputPassword() {
  return (
    <View style={styles.container}>
      <View>
      <Text
      style={styles.password} >
        Senha
      </Text>
      <TextInput
        style={styles.input}
        placeholder="******"
      />
       <TouchableOpacity style={styles.icon}>
       <Ionicons  name="eye" color="COLORS.GRAY_SECONDARY" size={20}/>
       </TouchableOpacity>
      </View>
    </View>
  );
}