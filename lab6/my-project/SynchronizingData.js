import React, { useState, useEffect } from "react";
import { Text, View, Switch, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { set, get } from "./store";

const boolMap = {
  true: true,
  false: false
};

export default function SynchronizingData({ navigation}) {
  const [message, setMessage] = useState(null);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const setters = new Map([
    ["first", setFirst],
    ["second", setSecond],
    ["third", setThird]
  ]);

  function save(key) {
    return value => {
      set(key, value).then(
        connected => {
          setters.get(key)(value);
          setMessage(connected ? null : "Saved Offline");
        },
        err => {
          setMessage(err);
        }
      );
    };
  }

  useEffect(() => {
    NetInfo.fetch().then(() =>
      get().then(
        items => {
          for (let [key, value] of Object.entries(items)) {
            setters.get(key)(value);
          }
        },
        err => {
          setMessage(err);
        }
      )
    );
  }, []);

  return (
    <View style={styles.containerSync}>
      <Text>{message}</Text>
      <View>
        <Text>First</Text>
        <Switch
          value={boolMap[first.toString()]}
          onValueChange={save("first")}
        />
      </View>
      <View>
        <Text>Second</Text>
        <Switch
          value={boolMap[second.toString()]}
          onValueChange={save("second")}
        />
      </View>
      <View>
        <Text>Third</Text>
        <Switch
          value={boolMap[third.toString()]}
          onValueChange={save("third")}
        />
      </View>

    <Button
 title={`Storing Data`}
 onPress={() =>
 navigation.navigate("StoringData", {
 id: "third",
 title: "Storing Data",
 })
 }
 />
      <Button
 title={`Loading Image`}
 onPress={() =>
 navigation.navigate("LoadingImage", {
 id: "first",
 title: "Loading Image",
 })
 }
 />
  <Button
 title={`Network State`}
 onPress={() =>
 navigation.navigate("NetworkState", {
 id: "third",
 title: "Network State",
 })
 }
 />
      <Button
 title={`Resizing Image`}
 onPress={() =>
 navigation.navigate("ResizingImage", {
 id: "third",
 title: "Resizing Image",
 })
 }
 />
      <Button
 title={`Lazy Loading`}
 onPress={() =>
 navigation.navigate("LazyLoading", {
 id: "third",
 title: "Lazy Loading",
 })
 }
 />
   </View>
 );
}
SynchronizingData.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };