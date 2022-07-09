import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text} from 'react-native';
import Button from '../../components/Form/Button';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function WelcomeOne() {
  const navigation = useNavigation();
  function openWelcomeTwo() {
    navigation.navigate('welcomeTwo');
  }
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.image}  source={require('../../assets/image_35.png')} />
      <Text style={styles.salutation}>
      Cadastre e maneje seus clientes
      </Text>
      <Button onPress={openWelcomeTwo} label={''}/>
    </View>
  );
}