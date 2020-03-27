import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";

import * as MailComposer from "expo-mail-composer";

import { Feather } from "@expo/vector-icons";
import logo from "./../../assets/logo.png";
import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const cases = route.params.cases;

  const message = `Ola ${cases.name} estou entrando em contato, pois gostaria de ajudar no caso : "${cases.title}" com o Valor de R$: ${cases.value} Reais`;

  function goBack() {
    navigation.goBack();
  }

  function goWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${cases.whatsapp}&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do Caso: `,
      recipients: ["markus90souza@gmail.com"],
      body: message
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardItem}>
        <Text style={[styles.cardTitle, { marginTop: 0 }]}>ONG</Text>
        <Text style={styles.cardSubtitle}>
          {cases.name} DE {cases.city}/{cases.uf}
        </Text>

        <Text style={styles.cardTitle}>CASO:</Text>
        <Text style={styles.cardSubtitle}>{cases.title}</Text>

        <Text style={styles.cardTitle}>descrição:</Text>
        <Text style={styles.cardSubtitle}>{cases.description}</Text>

        <Text style={styles.cardTitle}>VALOR</Text>
        <Text style={styles.cardSubtitle}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(cases.value)}
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.heroTitle}>Salve o Dia</Text>
        <Text style={styles.heroTitle}>Seja o Heroi deste Caso </Text>

        <Text style={styles.heroDesc}>Entre em Contato</Text>

        <View style={styles.boxContactUs}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              goWhatsapp();
            }}
          >
            <Text style={styles.btnText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              sendMail();
            }}
          >
            <Text style={styles.btnText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
