import React from 'react';
import {  ScrollView, } from 'react-native';

import { Onboarding } from '../../components/Form/Onboarding';


export function HomeScreens() {
  const navigation = useNavigation();
  function homePage() {
    navigation.navigate("login");
  }
  return (
    <ScrollView style={styles.container}>
      <Onboarding onPress={homePage}/>
    </ScrollView>
  );
}

import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  }
});