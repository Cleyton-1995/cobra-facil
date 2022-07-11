import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface BackButtonProps {
  title: string;
  onPress?: () => void;
  };

export function BackButton({ title, onPress}: BackButtonProps) {
  return (
    <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.8}>
      <AntDesign name="left" size={15} color="#0073FB" />
    <Text  onPress={onPress} style={styles.back} >
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  );
}