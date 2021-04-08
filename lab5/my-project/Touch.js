import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import Buttonn from "./Button";

export default function Touch({ navigation }) {
  return (
    <View style={styles.containerTouch}>
      <Buttonn onPress={() => {}} label="Opacity" />
      <Buttonn onPress={() => {}} label="Highlight" touchable="highlight" />


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
 title={`Scrolling`}
 onPress={() =>
 navigation.navigate("Scrolling", {
 id: "third",
 title: "Scrolling",
 })
 }
 />
     <Button
 title={`Scroll`}
 onPress={() =>
 navigation.navigate("Scroll", {
 id: "second",
 title: "Scroll",
 })
 }
 />
   </View>
 );
}
Touch.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };