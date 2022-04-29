import { View, Text, Image } from "react-native";
import React from "react";
import { globalStyles, Images } from "../styles/global";
import Card from "../components/Card";

const ReviewDetail = ({ route, navigation }) => {
  const { title, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.TitleText}>
          The Title Is <Text style={globalStyles.specialText}>{title}</Text>
        </Text>
        <View style={globalStyles.titleImg}>
          <Text style={globalStyles.TitleText}>And The Rating Is</Text>
          <Image source={Images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetail;
