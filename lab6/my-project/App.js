import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import LoadingImage from "./LoadingImage";
import NetworkState from "./NetworkState";
import ResizingImage from "./ResizingImage";
import StoringData from "./StoringData";
import SynchronizingData from "./SynchronizingData";
import LazyLoading from "./LazyLoading"
const Nav = createAppContainer(
 createStackNavigator({ Home,LoadingImage,ResizingImage,NetworkState,StoringData, SynchronizingData,LazyLoading }, { initialRouteName: "Home" })
);
export default function App() {

 return <Nav />;
}