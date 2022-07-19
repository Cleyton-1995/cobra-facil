import React from 'react';
import { View,Image } from 'react-native';

import { styles } from './styles';

export function ImageHeadersWhite() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain"  source={require('../../../assets/Group_white.png')} />
    </View>
  );
}