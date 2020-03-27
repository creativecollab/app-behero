import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";
import logo from "./../../assets/logo.png";
import styles from "./styles";

import Api from "./../../Services/Api";

function Cases() {
  const [cases, setCases] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);

  async function loadCases() {
    if (loading) {
      return;
    }

    if (total > 0 && cases.length === total) {
      return;
    }

    setloading(true);

    const response = await Api.get("/incidents", { params: page });

    setCases([...cases, ...response.data]);
    setTotal(response.headers["x-total-count"]);

    setloading(false);
    setPage(page + 1);
  }

  useEffect(() => {
    loadCases();
  }, []);

  const navigation = useNavigation();

  function goDetails(cases) {
    navigation.navigate("Details", { cases });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerTotal}>
          Total de
          <Text style={styles.headerCount}> {total} Casos</Text>
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.subtitle}></Text>
      </View>

      <FlatList
        style={styles.card}
        data={cases}
        showsVerticalScrollIndicator={false}
        keyExtractor={cases => String(cases.id)}
        onEndReached={loadCases}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={[styles.cardTitle, { marginTop: 0 }]}>ONG</Text>
            <Text style={styles.cardSubtitle}>{item.name}</Text>

            <Text style={styles.cardTitle}>CASO:</Text>
            <Text style={styles.cardSubtitle}>{item.title}</Text>

            <Text style={styles.cardTitle}>VALOR</Text>
            <Text style={styles.cardSubtitle}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              style={styles.bntDetails}
              onPress={() => {
                goDetails(item);
              }}
            >
              <Text style={styles.btnText}>Ver + Detalhes</Text>
              <Feather name="arrow-right" size={24} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Cases;
