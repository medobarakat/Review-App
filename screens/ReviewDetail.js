import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewDetail = ({ route, navigation }) => {
  const { title, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.TitleText}>The Title Is{title}</Text>
      <Text style={globalStyles.TitleText}>And The Rating Is {rating}</Text>
    </View>
  );
};

export default ReviewDetail;
