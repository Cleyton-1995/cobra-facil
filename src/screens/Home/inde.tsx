import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

export function Home() {
  

  useEffect(() => {
    api.get('/customers').then(response => {
      console.log(response.data)
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Select
        text="Selecione um cliente"
        options={CustomerList}
        onChangeSelect={(id) => alert(id)}
      />
    </SafeAreaView>
  );
}

import { StyleSheet } from "react-native";
import { Select } from "../../components/Form/Select";
import { api } from "../../services/api";
import { CustomerList } from "../CustomerList";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
  },
});
