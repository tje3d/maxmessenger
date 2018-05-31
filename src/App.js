import React from "react";
import { connect } from "react-redux";
import { AuthNavigator, AppNavigator } from "@src/Router";
import Application$ from "@obs";
import { Provider } from "react-redux";
import { store, persistor } from "@src/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { NAVIGATION } from "@consts";

const App = props => {
    return props.isLogin ? (
        <AppNavigator onNavigationStateChange={onNavigationStateChange} />
    ) : (
        <AuthNavigator onNavigationStateChange={onNavigationStateChange} />
    );
};

const onNavigationStateChange = (prevState, currentState) => {
    const fromNav = getActiveRouteName(prevState);
    const toNav = getActiveRouteName(currentState);

    if (fromNav == toNav) {
        return;
    }

    Application$.next({
        type: NAVIGATION,
        from: fromNav,
        to: toNav
    });
};

const getActiveRouteName = navigationState => {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
};

const ConnectedApp = connect(states => ({
    isLogin: states.auth.token ? true : false
}))(App);

export default props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedApp />
        </PersistGate>
    </Provider>
);
