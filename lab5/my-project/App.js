import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Scroll from "./Scroll";
import Swipe from "./Swipe";
import Scrolling from "./Scrolling";
import Touch from "./Touch"
const Nav = createAppContainer(
 createStackNavigator({ Home,Scroll,Swipe,Scrolling,Touch }, { initialRouteName: "Home" })
);
export default function App() {

 return <Nav />;
}