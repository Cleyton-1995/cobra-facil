import { Text, View } from 'react-native';

import React, { useState } from 'react';
import { styles } from './styles';

export type CardProps = {
  id: string;
  bank: string;
  account: string;
  agency: string;
}

type Props = {
  data: CardProps;
}

export function Card({ data }: Props) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  function togglePasswordIsVisible() {
    setPasswordIsVisible(prevState => !prevState);
  }

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text style={styles.text}>
          Banco
          <Text style={{ color: "#0073FB" }}> {data.bank}</Text>
        </Text>
        <Text style={styles.text}>
          Agência
          <Text  style={{ color: "#0073FB" }}> {data.agency}</Text>
        </Text>
        <Text style={styles.account}>
          Conta
          <Text style={{ color: "#0073FB" }}> {data.account} </Text>
        </Text>
      </View>
        </View>
  );
}