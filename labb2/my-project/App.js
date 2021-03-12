import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import SpreadOp from "./SpreadOperator"
import RestPar from "./RestParametrs"
import UseState from "./UseState"
const Nav = createAppContainer(
 createStackNavigator({ Home,SpreadOp,RestPar,UseState }, { initialRouteName: "Home" })
);
export default function App() {

 return <Nav />;
}