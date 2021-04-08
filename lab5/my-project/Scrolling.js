import React from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  Switch,
  View,
  Button
} from "react-native";

import styles from "./styles";

export default function Scrolling({ navigation }) {
  return (
    <View style={styles.containerScrolling}>
      <ScrollView style={styles.scrollScrolling}>
        {new Array(6).fill(null).map((v, i) => (
          <View key={i}>
            <Text style={[styles.scrollItemScrolling, styles.textScrolling]}>Some text</Text>
            <ActivityIndicator style={styles.scrollItemScrolling} size="large" />
            <Switch style={styles.scrollItemScrolling} />
          </View>
        ))}
      </ScrollView>

     <Button
 title={`Scroll`}
 onPress={() =>
 navigation.navigate("Scroll", {
 id: "first",
 title: "Scroll",
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
   <Button
 title={`Swipe`}
 onPress={() =>
 navigation.navigate("Swipe", {
 id: "third",
 title: "Swipe",
 })
 }
 />

   </View>
 );
}

Scrolling.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };