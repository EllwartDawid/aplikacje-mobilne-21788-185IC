import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //Scroll

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkorange"
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "blue"
  },

  scroll: {
    height: 100,
    alignSelf: "stretch"
  },

  scrollItem: {
    margin: 10,
    alignSelf: "center"
  },

  //Scrolling

  containerScrolling: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkblue"
  },

  textScrolling: {
    fontSize: 50,
    textAlign: "left",
    margin: 17,
    color: "green"
  },

  scrollScrolling: {
    height: 1,
    alignSelf: "stretch"
  },

  scrollItemScrolling: {
    margin: 20,
    alignSelf: "stretch"
  },

  //Touch

  containerTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "lightblue"
  },

  buttonTouch: {
    padding: 10,
    margin: 5,
    backgroundColor: "azure",
    borderWidth: 10,
    borderRadius: 10,
    borderColor: "blue"
  },

  buttonTextTouch: {
    color: "blue"
  },

  //Swipe

  containerSwipe: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "lightgreen"
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
    marginLeft: 70
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "lightblue",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 40,
    borderColor: "orange"
  },

  swipeItemText: {
    textAlign: "center",
    color: "darkorange",
  },

  swipeBlank: {
    width: 200,
    height: 30
  },
});