import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import "react-native-gesture-handler";
import { BackButton } from "../../components/Form/BackButton";
import { CardCustomer } from "../../components/Form/CardCustomer";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { api } from "../../services/api";
import { styles } from "./styles";

export function CustomerList() {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("homepage");
  }
  function addNewCustomer() {
    navigation.navigate("newcustomer");
  }
  function openCustomerProfile() {
    navigation.navigate("customerprofile");
  }

  type CustomersProps = {
    id: string;
    name: string;
    phone: string;
    document: string;
  };

  const [customers, setCustomers] = useState<CustomersProps[]>([]);

  async function getCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getCustomers();
    }, [])
  );

  const [filter, setFilter] = useState<CustomersProps[]>([]);

  function handleFilter(filter: string) {
    const teste = customers.filter((customer) =>
      customer.name.includes(filter)
    );
    setFilter(teste);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} activeOpacity={0.8}>
          <BackButton onPress={backScreenHome} title="Voltar" />
        </TouchableOpacity>
        <MostHeaders title="Seus Clientes" />
        <ImageHeaders />
        <TextInput
          placeholder="Pesquisar 🔍"
          style={styles.search}
          onChangeText={(value) => handleFilter(value)}
        />
        {filter.length > 0 ?
          filter.map((customer, index) => {
            return (
              <CardCustomer
                key={index}
                data={{
                  name: customer.name,
                }}
              />
            );
          })
        :
        customers.map((customer, index) => {
          return (
            <CardCustomer
              key={index}
              data={{
                name: customer.name,
                phone: "123456",
                document: "1234567",
                id: "1",
              }}
            />
          );
        })}

        <TouchableOpacity onPress={addNewCustomer} activeOpacity={0.8}>
          <Text onPress={addNewCustomer} style={styles.btn}>
            Adicionar um novo cliente
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
