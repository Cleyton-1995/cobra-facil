import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

interface HeaderPtops {
  title: string;
}

export function Profile({title}: HeaderPtops) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      {title}
      </Text>
    </View>
  );
}