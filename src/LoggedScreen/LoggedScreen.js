import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./LoggedScreenStyles";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Logged Screen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Welcome Logged Screen </Text>
      </View>
    );
  }
}

export default WelcomeScreen;
