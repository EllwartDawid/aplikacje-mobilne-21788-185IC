import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
  flex: 1,
  flexDirection: "column",
  paddingTop: 20
},

//pierwsza strona
content: {
 paddingTop: 150,
 textAlign: "left",
 backgroundColor: "darkgray",
 fontSize: 50,
 fontWeight: "bold"
},

przejscie: {
  color: "orange",
  fontWeight: "normal",
  fontSize: 30,
  backgroundColor: "green"
},

//druga strrona
content2: {
 paddingTop: 50,
 textAlign: "center",
 backgroundColor: "lightgreen",
 fontSize: 75,
 fontWeight: "300"
},

przejscie2: {
  color: "green",
  fontWeight: "bold",
  fontSize: 25,
  backgroundColor: "lightblue"
},

//trzecia strona
content3: {
 paddingTop: 200,
 textAlign: "right",
 backgroundColor: "#f0f",
 fontSize: 40,
 fontWeight: "normal"
},

przejscie3: {
  fontSize: 20,
  color: "red",
  backgroundColor: "lightgreen",
  fontWeight: "normal"
},

//wskaźnik postępu
progress: {
  backgroundColor: "lightblue"
},

//tytuł strony
title: {
  textAlign: "center",
  fontSize: 50,
  color: "red",
  backgroundColor: "darkblue"
},

container1: {
  flex: 1,
  justifyContent: "center"
},

item: {
  marginTop: 5,
  paddingTop: 5,
  color: "slategrey",
  backgroundColor: "ghostwhite",
  textAlign: "center"
},

filter: {
  height: 40,
  width: 200
},

controls: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 50,
  backgroundColor: "white"
}
});