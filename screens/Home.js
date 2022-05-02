import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
const Home = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
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

  const addReview = (AllReviews)=>{
    reviews.key=Math.random().toString();
    setReviews((current)=>{
      return [AllReviews,...current] 
    })
  }
  return (
    <View style={globalStyles.container}>
      <Modal
        visible={openModal}
        animationType="slide"
        style={globalStyles.modal}
      >
        <View>
          <Pressable>
            <MaterialIcons
              name="close"
              size={28}
              onPress={() => setOpenModal(false)}
              style={{ ...globalStyles.icon, ...globalStyles.iconclose }}
            />
          </Pressable>
          <ReviewForm addReview={addReview}/>
        </View>
      </Modal>
      <View>
        <Pressable>
          <MaterialIcons
            name="add"
            size={28}
            onPress={() => {
              setOpenModal(true);
            }}
            style={globalStyles.icon}
          />
        </Pressable>
      </View>
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
