import React, { Component } from "react";
import { View, Alert } from "react-native";
import PinView from "react-native-pin-view";
import styles from "./PinLockStyles";

class PinLock extends Component {
  constructor(props) {
    super(props);
    this.pinCheck = this.pinCheck.bind(this);
  }

  static navigationOptions = {
    title: "PinLock"
  };

  pinCheck = (pin, clear) => {
    if (pin == 1234) {
      this.unLock();
      clear();
    } else {
      Alert.alert(
        "PinLock Authentication",
        "Authenticated failed",
        [
          {
            text: "OK",
            onPress: () => clear()
          }
        ],
        { cancelable: false }
      );
    }
  };

  unLock = () => {
    const { navigation } = this.props;
    navigation.navigate("LoggedScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <PinView
          onComplete={this.pinCheck}
          pinLength={4}
          inputBgOpacity={0.1}
          inputBgColor="#1b5e20"
          inputActiveBgColor="#e3f2fd"
          buttonTextColor="#e3f2fd"
          buttonBgColor="#0d47a1"
          deleteText="Clear"
          disabled={false}
        />
      </View>
    );
  }
}

export default PinLock;
