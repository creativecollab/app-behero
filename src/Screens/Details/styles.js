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

  card: {},

  cardItem: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 10,
    marginTop: 20
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#41414d",
    marginTop: 20,
    textTransform: "uppercase"
  },

  cardSubtitle: {
    fontSize: 16,
    color: "#73737d",
    marginTop: 10
  },

  box: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 0,
    marginTop: 10
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#13131a"
  },

  heroDesc: {
    fontSize: 18,
    fontWeight: "600",
    color: "#73737d",
    marginTop: 10,
    textAlign: "center",
    textTransform: "uppercase"
  },

  boxContactUs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  btn: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    width: "48%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  btnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});
