import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "./First";
import Second from "./Second";
import Third from "./Third";


const routes = [First, Second, Third];
export default createAppContainer(
 createStackNavigator(
		routes.reduce(
				(result, route) => ({
				...result,
				[route.name]: route
				
			}),
			{}
		),
		{
			initialRouteName: "First",
			initialRouteParams: {
				progress: route =>
					(routes.map(r => r.name).indexOf(route) + 1) / routes.length
			}
		}
	)
);

