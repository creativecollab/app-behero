import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTotal: {
    fontSize: 18,
    color: "#737380"
  },

  headerCount: {
    fontWeight: "bold"
  },

  box: {
    marginTop: 20,
    marginBottom: 20
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#13131a",
    textTransform: "uppercase",
    textAlign: "center"
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    color: "#737380"
  },

  card: {
    marginTop: 30
  },

  cardItem: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 20
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#41414d"
  },

  cardSubtitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#73737d"
  },

  bntDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  btnText: {
    color: "#e02041",
    fontWeight: "bold",
    fontSize: 18
  }
});
