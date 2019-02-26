import { createStackNavigator, createAppContainer } from "react-navigation";
import FingerPrint from "../FingerPrint";
import WelcomeScreen from "../WelcomeScreen";
import PinLock from "../PinLock";
import LoggedScreen from "../LoggedScreen";

const AppNavigator = createStackNavigator(
  {
    WelcomeScreenHome: WelcomeScreen,
    FingerPrintScreen: FingerPrint,
    PinLockScreen: PinLock,
    LoggedScreen: LoggedScreen
  },
  {
    initialRouteName: "WelcomeScreenHome"
  }
);
export default createAppContainer(AppNavigator);
