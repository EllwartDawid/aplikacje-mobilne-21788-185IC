import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
export default function Home({ navigation}) {
 return (
 <View style={styles.container}>
 <Button
 title={`Selecting Options`}
 onPress={() =>
 navigation.navigate("SelectingOptions", {
 id: "first",
 title: "Selecting Options",
 })
 }
 />
 <Button
 title={`Collecting TextInput`}
 onPress={() =>
 navigation.navigate("CollectingTextInput", {
 id: "second",
 title: "Collecting TextInput",
 })
 }
 />
 <Button
 title={`Passive Notifications`}
 onPress={() =>
 navigation.navigate("PassiveNotifications", {
 id: "third",
 title: "Passive Notifications",
 })
 }
 />
  <Button
 title={`Toggling On And Off`}
 onPress={() =>
 navigation.navigate("TogglingOnAndOff", {
 id: "third",
 title: "Toggling On And Off",
 })
 }
 />
   <Button
 title={`Collecting Date Time Input`}
 onPress={() =>
 navigation.navigate("CollectingDateTimeInput", {
 id: "third",
 title: "Collecting Date Time Input",
 })
 }
 />
 </View>
 );
}
Home.navigationOptions = {
 title: "Home"
};