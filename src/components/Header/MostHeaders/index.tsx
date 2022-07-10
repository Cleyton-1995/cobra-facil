import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

interface HeaderPtops {
  title: string;
}

export function MostHeaders({title}: HeaderPtops) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      {title}
      </Text>
      <Image style={styles.image} resizeMode="contain"  source={require('../../../assets/Group_324.png')} />
    </View>
  );
}