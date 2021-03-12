import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
export default function Home({ navigation}) {
 return (
 <View style={styles.container}>
 <Button
 title={`Spread Operator`}
 onPress={() =>
 navigation.navigate("SpreadOp", {
 id: "first",
 title: "Spread Operator",
 })
 }
 />
 <Button
 title={`Rest Parametrs`}
 onPress={() =>
 navigation.navigate("RestPar", {
 id: "second",
 title: "Rest Parametrs",
 })
 }
 />
 <Button
 title={`Use State`}
 onPress={() =>
 navigation.navigate("UseState", {
 id: "third",
 title: "Hooks",
 })
 }
 />
 </View>
 );
}
Home.navigationOptions = {
 title: "Home"
};