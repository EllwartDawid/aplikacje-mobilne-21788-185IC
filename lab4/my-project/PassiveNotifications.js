import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Notification from "./Notification";
import Activity from "./Activity";
import styles from "./styles";

export default function PassiveNotifications({ navigation }) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [promise, setPromise] = useState(Promise.resolve());

  function onPress() {
    setPromise(
    new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
    setFetching(false);
    })
    );
    setFetching(true);
    }

  return (
    <View style={styles.containerNotification}>
      <View style={styles.containerPassive}>
      <Activity visible={fetching} />
      <Text onPress={onPress}>Load</Text>
      </View>
      <Notification message={message} />
      <Text
        onPress={() => {
          setCount(count + 1);
          setMessage(null);
        }}
      >
        Pressed {count}
      </Text>
      <Text
        onPress={() => {
          setMessage("Something happened!");
        }}
      >
        Show Notification
      </Text>
 
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
     <Button
 title={`Collecting TextInput`}
 onPress={() =>
 navigation.navigate("CollectingTextInput", {
 id: "second",
 title: "Collecting TextInput",
 })
 }
 />
   </View>
 );
}
PassiveNotifications.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };