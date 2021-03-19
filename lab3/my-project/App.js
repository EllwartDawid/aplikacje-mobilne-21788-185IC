import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import ListContainer from "./ListContainer";
import LazyLoad from "./LazyLoad";
import StepProgress from "./StepProgress";

const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createDrawerNavigator }
});
export default createAppContainer(
 createNavigator({ ListContainer, LazyLoad, StepProgress }, { initialRouteName: "StepProgress" })
);

//const Nav = createAppContainer(
    //createStackNavigator({ Home,ListContainer,LazyLoad,StepProgress }, { initialRouteName: "Home" })
  // );
   //export default function App() {
   
  //  return <Nav />;
  // }