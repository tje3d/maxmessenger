import React from "react";
import { StackNavigator, createSwitchNavigator } from "react-navigation";

import Login from "@pages/login";
import Home from "@pages/home";

export const AuthNavigator = createSwitchNavigator(
    {
        Login
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export const AppNavigator = StackNavigator(
    {
        Home,
    },
    {
        navigationOptions: {
            header: null
        }
    }
);
