import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected"
};

export default function NetworkState({ navigation}) {
  const [connected, setConnected] = useState("");

  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }

    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.containerState}>
      <Text>{connected}</Text>
    <View style={styles.containerNav}>
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
 title={`Loading Image`}
 onPress={() =>
 navigation.navigate("LoadingImage", {
 id: "first",
 title: "Loading Image",
 })
 }
 />
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
 title={`Synchronizing Data`}
 onPress={() =>
 navigation.navigate("SynchronizingData", {
 id: "third",
 title: "Synchronizing Data",
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
   </View>
 );
}
NetworkState.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};