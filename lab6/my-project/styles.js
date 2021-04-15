import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //loading images

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkblue"
  },

  image: {
    width: 125,
    height: 100,
    margin: 40
  },

  //resizing images

  containerSlider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  containerNav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },

  slider: {
    width: 100
  },
  //network state

  containerState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "green",
    marginBottom: 5
  },

  //storing data

  containerStoring: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "green",
    
  },

  button: {
    height: 45,
    width: 100,
    padding: 10,
    marginLeft: 120,
    marginTop: 20,
    backgroundColor: "azure",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "slategrey",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "black",
  },
  input: {
    alignItems: "center",
    backgroundColor: "azure",
  },
  

  //synchronizing data

  containerSync: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "brown"
  },


  //lazy loading

  containerLazy: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 10,
    paddingTop: 20
  },
  buttonLazy: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
    borderWidth: 10,
    borderRadius: 15,
    borderColor: "slategrey"
   },

});

