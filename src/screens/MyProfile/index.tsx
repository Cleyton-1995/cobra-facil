import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { BankData } from "../../components/Header/BankData";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";
import { api } from "../../services/api";

import { styles } from "./styles";

interface UserProps {
  name: string;
}

export function MyProfile() {
  const navigation = useNavigation();
  function backMyProfile() {
    navigation.navigate("homepage");
  }

  function exitTheApp() {
    navigation.navigate("login");
  }

  const [ user, setUser ] =  useState<UserProps>();

  async function getUser() { 
    try {
      const user = await api.get("/user/4");
      setUser(user.data) 
      console.log("user", user.data);
    } catch (error) {
      console.log("error", error);
    };
  };

  useEffect(() => {
    getUser()
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile title= {`Perfil de ${user?.name}`}  />
        <View style={styles.back}>
          <BackButton onPress={backMyProfile} title="Voltar" color="#ffffff" />
        </View>
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
        <BankData onPress={exitTheApp} />
      </View>
    </ScrollView>
  );
}
