import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../LoginTwo/styles';
import { Header } from '../Header';


export function LoginTwo() {

  return (
    <View 
    style={styles.container}>
      <Header/>
      <Image style={styles.content}  source={require('../../assets/image_35-1.png')} />
      <Text style={styles.salutation}>
      Realize cobranças automáticas
      </Text>

      <Text style={styles.next}>
        Fazer login
        <AntDesign name="right" size={15} color="#009BF4" />
      </Text>
    </View>
  );
}