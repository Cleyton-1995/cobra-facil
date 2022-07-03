import React from 'react';
import { View, Image } from 'react-native';
import { Header } from '../../components/Header';
import { Login } from '../../components/Login';
import { LoginOne } from '../../components/LoginOne';
import { LoginTwo } from '../../components/LoginTwo';
import { NextOfLogin } from '../../components/NextOfLogin';


import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.content}  source={require('../../assets/Group_737.png')} />
      <Login/>
      <NextOfLogin/>
    </View>
  );
}