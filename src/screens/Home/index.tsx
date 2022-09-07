import React from 'react';
import { View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

import { StyleSheet } from 'react-native';
import { Login } from '../Login';

export const styles = StyleSheet.create({
  container: {}
});