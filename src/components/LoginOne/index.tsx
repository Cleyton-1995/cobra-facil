import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../LoginOne/styles';
import { Header } from '../Header';

export function LoginOne() {

  return (
    <View 
    style={styles.container}>
      <Header/>
      <Image style={styles.content}  source={require('../../assets/image_35.png')} />
      <Text style={styles.salutation}>
      Cadastre e maneje seus clientes
      </Text>

      <Text style={styles.next}>
        Próximo
        <AntDesign name="right" size={15} color="#009BF4" />
      </Text>
    </View>
  );
}