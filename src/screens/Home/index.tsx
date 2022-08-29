import React from 'react';
import { View } from 'react-native';
import { SwipeButton } from '../../components/Form/SwipeButton';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <SwipeButton/>
    </View>
  );
}