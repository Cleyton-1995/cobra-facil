import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text } from 'react-native';
import { Header } from '../Header';

import { styles } from './styles';

export function Login() {

  return (
    <View 
    style={styles.container}>
      <Text style={styles.salutation}>
      Olá! Que bom vevocê por aqui!
      </Text>
      <Text style={styles.paragraph}>
      O cobra fácil é um facilitador de cobranças, aqui
      você pode deixar suas cobranças salvas e realizá-las
      automaticamente todos os meses.
      </Text>
    </View>
  );
}