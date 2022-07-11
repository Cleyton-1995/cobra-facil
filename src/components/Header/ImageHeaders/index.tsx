import React from 'react';
import { View,Image } from 'react-native';

import { styles } from './styles';

export function ImageHeaders() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain"  source={require('../../../assets/Group_324.png')} />
    </View>
  );
}