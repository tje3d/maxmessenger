import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import actionsAuth from "@actions/auth";

class Home extends Component {
	render() {
		return (
			<View>
				<TouchableNativeFeedback onPress={() => this.props.logout()}>
					<Text>Home</Text>
				</TouchableNativeFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default connect(
	states => ({}),
	dispatch => ({
		logout: () => dispatch(actionsAuth.logout())
	})
)(Home);
