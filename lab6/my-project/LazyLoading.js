import React, { useState, useEffect } from "react";
import { View, Picker, FlatList, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import iconNames from "./icon-names.json";
import LazyImage from "./LazyImage";
import ButtonLazy from "./ButtonLazy";

const remote =
  "https://facebook.github.io/react-native/docs/assets/favicon.png";

export default function LazyLoading({ navigation}) {
  const [source, setSource] = useState(null);
  const [selected, setSelected] = useState("Web Application Icons");
  const [listSource, setListSource] = useState([]);
  const categories = Object.keys(iconNames);

  function updateListSource(selected) {
    setListSource(iconNames[selected]);
    setSelected(selected);
  }

  useEffect(() => {
    updateListSource(selected);
  }, []);
  

  return (
    <View style={styles.containerLazy}>
      <LazyImage
        style={{ width: 200, height: 100 }}
        resizeMode="contain"
        source={source}
      />
      <ButtonLazy
        label="Load Remote"
        onPress={() => {
          setSource({ uri: remote });
        }}
      />
	  <Picker selectedValue={selected} onValueChange={updateListSource}>
          {categories.map(category => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
		<FlatList
        style={styles.icons}
        data={listSource.map((value, key) => ({ key: key.toString(), value }))}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.value} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
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
 title={`Synchronizing Data`}
 onPress={() =>
 navigation.navigate("SynchronizingData", {
 id: "third",
 title: "Synchronizing Data",
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

   </View>
 );
}

LazyLoading.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };