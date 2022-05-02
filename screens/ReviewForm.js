import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";

const ReviewForm = () => (
  <View style={globalStyles.container}>
    <Formik
      initialValues={{ title: "", body: "", rating: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <View>
          <Text>Add New Review</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Review Title"
            onChangeText={props.handleChange("title")}
            value={props.values.title}
          />
          <TextInput
            multiline
            style={globalStyles.input}
            placeholder="Review Body"
            onChangeText={props.handleChange("body")}
            value={props.values.body}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Rating ( 1 - 5 )"
            onChangeText={props.handleChange("rating")}
            value={props.values.rating}
          />
        </View>
      )}
    </Formik>
    <Button
      title="Submit"
      color="maroon"
      onPress={() => {
        props.handleSubmit();
      }}
      style={globalStyles.btn}
    />
  </View>
);

export default ReviewForm;
