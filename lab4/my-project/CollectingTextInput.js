import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, Button } from "react-native";
import styles from "./styles";
function Input(props) {
 return (
 <View style={styles.textInputContainer}>
 <Text style={styles.textInputLabel}>{props.label}</Text>
 <TextInput style={styles.textInput} {...props} />
 </View>
 );
}
Input.propTypes = {
 label: PropTypes.string
};
export default function CollectingTextInput({ navigation }) {
 const [changedText, setChangedText] = useState("");
 const [submittedText, setSubmittedText] = useState("");
 return (
 <View style={styles.container}>
 <Input label="Basic Text Input:" />
 <Input label="Password Input:" secureTextEntry />
 <Input label="Return Key:" returnKeyType="search" />
 <Input label="Placeholder Text:" placeholder="Search" />
 <Input
 label="Input Events:"
 onChangeText={e => {
 setChangedText(e);
 }}
 onSubmitEditing={e => {
 setSubmittedText(e.nativeEvent.text);
 }}
 onFocus={() => {
 setChangedText("");
 setSubmittedText("");
 }}
 />
 <Text>Changed: {changedText}</Text>
 <Text>Submitted: {submittedText}</Text>

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

CollectingTextInput.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };