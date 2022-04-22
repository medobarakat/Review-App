import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  TitleText: {
    fontFamily: "Nunito-bold",
    fontSize: 18,
    color: "#333",
    textTransform: "capitalize",
  },
  specialText: {
    color: "red",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
