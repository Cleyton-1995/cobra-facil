import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export type CardProps = {
  id: string;
  name: string;
  phone: string;
  document: string;
}
type Props = {
  data: CardProps;
  onPress?: () => void;
}

export function CardCustomer({ data, onPress }: Props) {

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  function togglePasswordIsVisible() {
    setPasswordIsVisible(prevState => !prevState);
  }

  return (
    <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.input}>
            <Text  style={styles.title}>{data.name}</Text>
            <Text  style={styles.textInput}>Mostrar informações pessoais </Text>
            <AntDesign style={styles.icon} name="down" size={18} color="black" />
            <Text style={styles.circleBlue} />
          </TouchableOpacity>
    </View>
  );
}