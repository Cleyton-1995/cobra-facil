import React from 'react';
import { View, Image } from 'react-native';
import { ButttonNext } from '../../components/ButttonNext';
import { Header } from '../../components/Header';
import { Login } from '../../components/Login';
import { LoginOne } from '../../components/LoginOne';
import { LoginTwo } from '../../components/LoginTwo';


import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <LoginTwo/>
      <ButttonNext/>
    </View>
  );
}''