import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import SelectingOptions from "./SelectingOptions";
import CollectingTextInput from "./CollectingTextInput";
import TogglingOnAndOff from "./TogglingOnAndOff";
import CollectingDateTimeInput from "./CollectingDateTimeInput";
import PassiveNotifications from "./PassiveNotifications"
const Nav = createAppContainer(
 createStackNavigator({ Home,SelectingOptions,CollectingTextInput,TogglingOnAndOff,CollectingDateTimeInput,PassiveNotifications }, { initialRouteName: "Home" })
);
export default function App() {

 return <Nav />;
}