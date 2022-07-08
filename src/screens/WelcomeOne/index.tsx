import React from 'react';
import { View, Image, Text} from 'react-native';
import Button from '../../components/Form/Button';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function WelcomeOne() {
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.image}  source={require('../../assets/image_35.png')} />
      <Text style={styles.salutation}>
      Cadastre e maneje seus clientes
      </Text>
      <Button label={''}/>
    </View>
  );
}