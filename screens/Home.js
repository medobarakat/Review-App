import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";

const Home = ({ navigation }) => {
  const [reviews, setreviews] = useState([
    {
      title: "zelda Breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    { title: "Gotta catch them all", rating: 4, body: "lorem ipsum", key: "2" },
    {
      title: 'bot so "final" fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetail", item)}
          >
            <Card>
              <Text style={globalStyles.TitleText}>{item.title}</Text>
            </Card>
            {/* <Text style={globalStyles.TitleText}>{item.title}</Text> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
