import React, { useState } from "react";
import { View, Button,  Modal, Text } from "react-native";
import styles from "./styles";
import Switch from "./Switch";

const min = 0;
const max = 1000;

export default function TogglingOnAndOff({ navigation }) {
 const [first, setFirst] = useState(false);
 const [second, setSecond] = useState(false);
 const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.containerswitch}>

 <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal zamknięty.');
          }}>
         
          <View style={styles.modal}>
            <Text style={styles.text}>Modal otwarty! Wylosowano liczbę!</Text>
			<Text> {(Math.floor(Math.random() * (max - min)) + min)}</Text>
            <Switch
              label="Zamknij Modal"
              onValueChange={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        
        <Switch
          label="Otwórz Modal"
          onValueChange={() => {
            setShowModal(!showModal);
          }}
        />

<Button
title={`Collecting Text Input`}
onPress={() =>
navigation.navigate("CollectingTextInput", {
id: "second",
title: "Collecting Text Input",
})
}
/>
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
TogglingOnAndOff.navigationOptions = ({
   navigation,
  }) => {
   const title = navigation.getParam("title");
   return {
   title,
   };
  };
