import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

export function Login() {

  return (
    <View 
    style={styles.container}>
      <Image style={styles.content}  source={require('../../assets/Group_737.png')} />
      <Text style={styles.salutation}>
    Olá! Que bom ver você por aqui!
      </Text>
      <Text style={styles.paragraph}>
      O cobra fácil é um facilitador de cobranças, aqui
      você pode deixar suas cobranças salvas e realizá-las
      automaticamente todos os meses.
      </Text>
    </View>
  );
}