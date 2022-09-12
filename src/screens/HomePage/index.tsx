import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { BalanceInput } from "../../components/Form/BalanceInput";
import { ButtonHomePage } from "../../components/Form/ButtonHomePage";
import { FooterHP } from "../../components/Form/FooterHP";
import { ProfileHeaders } from "../../components/Header/ProfileHeaders";
import { api } from "../../services/api";

import { styles } from "./styles";

interface UserProps {
  name: string;
}

interface HomePageProps {
  route: string;
}

export function HomePage({ route }: HomePageProps) {
  console.log("Estou aqui", route);

  const navigation = useNavigation();
  function myProfile() {
    navigation.navigate("myprofile");
  }
  function createCharge() {
    navigation.navigate("newcharge");
  }
  function invoicing() {
    navigation.navigate("newcharge");
  }
  function transfer() {
    navigation.navigate("pixarea");
  }
  function customers() {
    navigation.navigate("customerlist");
  }

  const [user, setUser] = useState<UserProps>();

  async function getUser() {
    try {
      const user = await api.get(`/user/${route.params.id}`);
      setUser(user.data);
      console.log("user", user.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileHeaders onPress={myProfile} title={`Olá ${user?.name}`} />
        <BalanceInput secureTextEntry />
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={createCharge}
          activeOpacity={0.98}
          style={styles.charge}
        >
          <ButtonHomePage onPress={createCharge} title="Criar Cobrança" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={invoicing}
          activeOpacity={0.98}
          style={styles.invoicing}
        >
          <ButtonHomePage onPress={invoicing} title="Faturamento" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={transfer}
          activeOpacity={0.98}
          style={styles.transfer}
        >
          <ButtonHomePage onPress={transfer} title="Transferir" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={customers}
          activeOpacity={0.98}
          style={styles.customers}
        >
          <ButtonHomePage onPress={customers} title="Clientes" />
        </TouchableOpacity>
        <AntDesign style={styles.plus} name="plus" size={24} color="#0073FB" />
        <Feather
          style={styles.dollar_sign}
          name="dollar-sign"
          size={24}
          color="#0073FB"
        />
        <AntDesign
          style={styles.addusergroup}
          name="addusergroup"
          size={24}
          color="#0073FB"
        />
        <Feather
          style={styles.dollar}
          name="dollar-sign"
          size={24}
          color="#0073FB"
        />
        <FooterHP />
      </View>
    </ScrollView>
  );
}
// BsFillXDiamondFill
