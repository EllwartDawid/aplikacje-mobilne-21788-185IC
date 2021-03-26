import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, Alert  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';



export default function CollectingDateTimeInput({ navigation }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
	
	const createTwoButtonAlert = () =>
    Alert.alert(
      "You chose:",
      `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`,

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
          const currentDate = selectedValue  || new Date();
          setDate(currentDate);
          setMode('time');
          setShow(Platform.OS !== 'ios');
        } else {
          const selectedTime = selectedValue || new Date();
          setTime(selectedTime);
          setShow(Platform.OS === 'ios');
          setMode('date');
        }
      };
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };

    return (
        <View style={styles.containerDate}>
        <TouchableOpacity onPress={showDatepicker}>
			<View>
                <Button onPress={showDatepicker} title="choose a date"/>
            </View>
			<Button title="show a date" onPress={createTwoButtonAlert}/>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}
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
 title={`Toggling On And Off`}
 onPress={() =>
 navigation.navigate("TogglingOnAndOff", {
 id: "third",
 title: "Toggling On And Off",
 })
 }
 />
    <Button
 title={`Selecting Options`}
 onPress={() =>
 navigation.navigate("SelectingOptions", {
 id: "third",
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
   </View>
 );
}
CollectingDateTimeInput.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};