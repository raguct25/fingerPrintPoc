import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./WelcomeScreenStyles";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Welcome Screen"
  };

  goTOFingerPrint = () => {
    const { navigation } = this.props;
    navigation.navigate("FingerPrintScreen");
  };

  goToPinLock = () => {
    const { navigation } = this.props;
    navigation.navigate("PinLockScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.goTOFingerPrint}
        >
          <Text style={styles.textStyle}> FingerPrint </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.goToPinLock}>
          <Text style={styles.textStyle}> PinLock </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
