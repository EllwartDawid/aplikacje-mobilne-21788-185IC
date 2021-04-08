import React from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  Switch,
  View,
  Button,
} from "react-native";

import styles from "./styles";

export default function Scroll({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {new Array(6).fill(null).map((v, i) => (
          <View key={i}>
            <Text style={[styles.scrollItem, styles.text]}>Some text</Text>
            <ActivityIndicator style={styles.scrollItem} size="large" />
            <Switch style={styles.scrollItem} />
          </View>
        ))}
      </ScrollView>

     <Button
 title={`Scrolling`}
 onPress={() =>
 navigation.navigate("Scrolling", {
 id: "second",
 title: "Scrolling",
 })
 }
 />
   <Button
 title={`Swipe`}
 onPress={() =>
 navigation.navigate("Swipe", {
 id: "third",
 title: "Swipe",
 })
 }
 />

   <Button
 title={`Touch`}
 onPress={() =>
 navigation.navigate("Touch", {
 id: "third",
 title: "Touch",
 })
 }
 />
   </View>
 );
}
Scroll.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};