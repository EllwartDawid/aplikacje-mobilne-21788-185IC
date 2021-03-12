import { Platform, StyleSheet, StatusBar } from 'react-native';
export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight }
        })
        },

    // style dla spread operator

 containerspread: {
 flex: 1,
 flexDirection: 'row',
 flexWrap: 'wrap',
 backgroundColor: 'darkgray',
 alignItems: 'center',
 ...Platform.select({
 ios: { paddingTop: 20 },
 android: { paddingTop: StatusBar.currentHeight }
 })
 },
 boxspread: {
 height: 500,
 width: 500,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'black',
 borderWidth: 1,
 borderStyle: 'dashed',
 borderColor: 'darkslategray',
 margin: 10
 },
 boxTextspread: {
 color: 'white',
 fontWeight: 'bold',
 margin: 20,
 },

 //style dla rest parametrs

containerrestpar: {
flex: 1,
flexDirection: "column",
alignItems: "center",
justifyContent: "space-around",
backgroundColor: "lightblue",
},

boxrestpar: {
width: 600,
height: 175,
justifyContent: "center",
alignItems: "center",
backgroundColor: "lightgray",
borderWidth: 1,
borderStyle: "dashed",
borderColor: "darkslategray"
},

boxrestpar2: {
    width: 600,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
    },
    

boxTextrestpar: {
color: "darkslategray",
fontWeight: "bold",
margin:20,
},

// style dla useState

containeruse: {
flex: 1,
flexDirection: "row",
backgroundColor: "darkblue",
alignItems: "center",
justifyContent: "space-around",
},

boxuse: {
width: 500,
justifyContent: "center",
alignSelf: "stretch",
alignItems: "center",
backgroundColor: "lightgray",
borderWidth: 5,
borderStyle: "dashed",
borderColor: "darkslategray"
},

boxTextuse: {
color: "darkslategray",
fontWeight: "bold",
margin:20
},
   
       
});