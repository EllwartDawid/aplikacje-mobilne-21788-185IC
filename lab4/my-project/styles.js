import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //Collecting Text Input

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    padding: 16,
  },

  textInputContainer: {
    alignSelf: "stretch"
  },

  textInputLabel: {
    marginBottom: 6
  },

  textInput: {
    backgroundColor: "darkgrey",
    height: 25,
    fontSize: 16
  },

  //Selecting Options

containerselect: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "darkblue"
  },

  pickerLabelselect: {
    fontSize: 40,
    fontWeight: "bold"
  },

  selectionselect: {
    width: 100,
    marginTop: 300,
    textAlign: "center"
  },

  //Toggling On And Off

  containerswitch: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  customSwitch: {
    alignItems: "center",
    margin: 40
  },

  modal: {
	  backgroundColor:"lightgreen",
  },
  
  text: {
	  fontSize: 30,
    color: "red",
    textAlign: "center",
    marginTop: 300
  },

// Passive Notifications

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray"
  },
  containerPassive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginTop: 170,
    marginBottom: 170,
  },
  containerNotification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },

  // Collecting Date Time Input

  containerDate: {
    margin: 100, 
    backgroundColor:"red",
  }
});
