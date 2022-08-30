import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

import { Onboarding } from '../../components/Form/Onboarding';


export function Home() {
  return (
    <ScrollView style={styles.container}>
      <Onboarding/>
    </ScrollView>
  );
}

import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  }
});