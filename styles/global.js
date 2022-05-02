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
  titleImg: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  icon: {
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },
  iconclose: {
    marginTop: 20,
  },
  modal: {
    flex: 1,
  },
});

export const Images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
