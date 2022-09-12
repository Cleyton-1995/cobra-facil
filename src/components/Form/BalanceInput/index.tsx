import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface BalanceInputProps {
  secureTextEntry: boolean;
  color?: string; 
}

export function BalanceInput({secureTextEntry, color="#0073FB" }: BalanceInputProps) {
  const [sec, setSec] = useState(secureTextEntry)

  return (
    <View style={styles.container}>
      <TextInput
          style={[styles.textInput, {color:color}] }
          secureTextEntry
          editable={false}
          
        />
        <Text style={{position: 'absolute', top: -68, marginLeft: 30, fontSize: 15}}>R$</Text>
        <TextInput style={{ top: -116, marginLeft: 60, fontSize: 18, color: color }} secureTextEntry={sec} editable={false} >1920,00</TextInput>
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setSec(!sec)} style={styles.icon}>
            <Ionicons
              name={sec ? "eye" : "eye-off"}
              color="#8D8D99"
              size={20}
            />
          </TouchableOpacity>
        )}
    </View>
  );
}