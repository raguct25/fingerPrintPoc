import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./WelcomeScreenStyles";

class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Welcome Screen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Welcome Screen</Text>
      </View>
    );
  }
}

export default FingerPrint;
