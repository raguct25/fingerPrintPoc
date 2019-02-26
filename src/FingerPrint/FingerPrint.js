import React, { Component } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import FingerprintScanner from "react-native-fingerprint-scanner";
import ShakingText from "../Components/ShakingText";
import styles from "./FingerPrintStyles";

class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: undefined };
  }

  static navigationOptions = {
    title: "FingerPrint"
  };

  componentDidMount() {
    FingerprintScanner.authenticate({
      onAttempt: this.handleAuthenticationAttempted
    })
      .then(() => {
        Alert.alert(
          "Fingerprint Authentication",
          "Authenticated successfully",
          [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("LoggedScreen")
            }
          ],
          { cancelable: false }
        );
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        this.description.shake();
      });
  }

  componentWillUnmount() {
    FingerprintScanner.release();
  }

  handleAuthenticationAttempted = error => {
    this.setState({ errorMessage: error.message });
    this.description.shake();
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/finger-print.jpg")}
          />
          <Text style={styles.heading}>Fingerprint{"\n"}Authentication</Text>
          <ShakingText
            ref={instance => {
              this.description = instance;
            }}
            style={styles.description(!!errorMessage)}
          >
            {errorMessage ||
              "Scan your fingerprint on the\ndevice scanner to continue"}
          </ShakingText>
        </View>
      </View>
    );
  }
}

export default FingerPrint;
