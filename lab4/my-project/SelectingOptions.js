import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import Select from "./Select";

export default function SelectingOptions({ navigation }) {
  const [sizes, setSizes] = useState([
    { label: "", value: null },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" }
  ]);
  const [garments, setGarments] = useState([
    { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
    { label: "Socks", value: 1, sizes: ["S", "L"] },
    { label: "Shirt", value: 2, sizes: ["M", "XL"] },
    { label: "Pants", value: 3, sizes: ["S", "L"] },
    { label: "Hat", value: 4, sizes: ["M", "XL"] }
  ]);
  const [availableGarments, setAvailableGarments] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [selection, setSelection] = useState("");

  return (
    <View style={styles.containerselect}>
      <Select
        label="Size"
        items={sizes}
        selectedValue={selectedSize}
        onValueChange={size => {
          setSelectedSize(size);
          setSelectedGarment(null);
          setAvailableGarments(garments.filter(i => i.sizes.includes(size)));
        }}
      />
      <Select
        label="Garment"
        items={availableGarments}
        selectedValue={selectedGarment}
        onValueChange={garment => {
          setSelectedGarment(garment);
          setSelection(
            `${selectedSize} ${garments.find(i => i.value === garment).label}`
          );
        }}
      />
      <Text style={styles.selectionselect}>{selection}</Text>
    
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
SelectingOptions.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};