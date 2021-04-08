import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
export default function Home({ navigation}) {
 return (
 <View style={styles.container}>

 <Button
 title={`Scroll`}
 onPress={() =>
 navigation.navigate("Scroll", {
 id: "second",
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
   <Button
 title={`Scrolling`}
 onPress={() =>
 navigation.navigate("Scrolling", {
 id: "third",
 title: "Scrolling",
 })
 }
 />
 </View>
 );
}
Home.navigationOptions = {
 title: "Home"
};