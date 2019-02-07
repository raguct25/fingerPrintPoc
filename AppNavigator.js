import { createStackNavigator, createAppContainer } from "react-navigation";
import FingerPrint from "./src/FingerPrint";
import WelcomeScreen from "./src/WelcomeScreen";

const AppNavigator = createStackNavigator(
  {
    FingerPrintHome: FingerPrint,
    WelcomeScreenHome: WelcomeScreen
  },
  {
    initialRouteName: "FingerPrintHome"
  }
);
export default createAppContainer(AppNavigator);
