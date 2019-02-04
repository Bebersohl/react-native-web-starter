import React from "react";
import { View, Text, Button } from "react-native";

const HomePage = ({ navigation }) => (
  <View>
    <Text>HomePage</Text>
    <Button
      title="Go to About"
      onPress={() => navigation.navigate("AboutPage")}
    />
  </View>
);

export default HomePage;
