import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";
const About = () => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.TitleText}>About Screen</Text>
      </Card>
    </View>
  );
};

export default About;
