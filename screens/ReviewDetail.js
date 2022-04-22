import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewDetail = ({ route, navigation }) => {
  const { title, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.TitleText}>
        The Title Is <Text style={globalStyles.specialText}>{title}</Text>
      </Text>
      <Text style={globalStyles.TitleText}>
        And The Rating Is <Text style={globalStyles.specialText}>{rating}</Text>
      </Text>
    </View>
  );
};

export default ReviewDetail;
