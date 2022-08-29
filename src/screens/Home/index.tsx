import React from 'react';
import { View } from 'react-native';
import { SwipeButton } from '../../components/Form/SwipeButton';
import { NewCharge } from '../NewCharge';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <NewCharge/>
    </View>
  );
}