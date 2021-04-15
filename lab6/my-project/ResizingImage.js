import React, { useState } from "react";
import { View, Text, Image, Slider, Button } from "react-native";
import styles from "./styles";

export default function ResizingImage({ navigation}) {
  const source = require("./images/relay.jpg");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <View style={styles.containerSlider}>
      <Image source={source} style={{ width, height }} />
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={150}
        value={width}
        onValueChange={value => {
          setWidth(value);
          setHeight(value);
        }}
      />
      <View style={styles.containerNav}>
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

ResizingImage.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };