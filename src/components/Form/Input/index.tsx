import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Input() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.login}>
        Acesse sua conta
      </TextInput>
      <TextInput style={styles.email}>
        E-mail
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="numeric"
      />  
    </View>
  );
}