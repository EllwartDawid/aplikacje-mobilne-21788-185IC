import React from "react";
import PropTypes from "prop-types";
import { View, Image, Button } from "react-native";
import styles from "./styles";

export default function LoadingImage({ reactSource, relaySource, navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={reactSource} />
      <Image style={styles.image} source={relaySource} />
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

const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  PropTypes.number
]).isRequired;

LoadingImage.propTypes = {
  reactSource: sourceProp,
  relaySource: sourceProp
};

LoadingImage.defaultProps = {
  reactSource: {
    uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
  },
  relaySource: require("./images/relay.jpg")
};
 
LoadingImage.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};