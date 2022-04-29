import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={CardStyles.card}>
      <View style={CardStyles.cardContent}>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
};

export default Card;

const CardStyles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
