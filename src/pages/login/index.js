import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import actionsAuth from "@actions/auth";

class Login extends Component {
    render() {
        return (
            <View>
                <TouchableNativeFeedback onPress={() => this.props.login()}>
	                <Text>Login</Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default connect(states => ({
	isLogin: states.auth.token ? true : false
}), dispatch => ({
	login: () => dispatch(actionsAuth.login(Math.random()))
}))(Login);