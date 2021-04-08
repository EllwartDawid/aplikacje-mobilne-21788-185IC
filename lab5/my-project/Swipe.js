import React, { useState } from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";

export default function Swipe({ navigation }) {
  const [items, setItems] = useState(
    new Array(8).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
  );

  function onSwipe(id) {
    return () => {
      setItems(items.filter(item => item.id !== id));
    };
  }

  return (
    <View style={styles.containerSwipe}>
      {items.map(item => (
        <Swipeable key={item.id} onSwipe={onSwipe(item.id)} name={item.name} />
      ))}

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
   </View>
 );
}
Swipe.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};