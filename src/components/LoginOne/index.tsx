import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../LoginOne/styles';

export function LoginOne() {

  return (
    <View 
    style={styles.container}>
      <Image style={styles.content}  source={require('../../assets/image_35.png')} />
      <Text style={styles.salutation}>
      Cadastre e maneje seus clientes
      </Text>
    </View>
  );
}
