import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#90a4ae",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#607d8b",
    marginLeft: 10,
    marginRight: 10
  },
  logo: {
    marginVertical: 0,
    width: 140,
    height: 110,
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    textAlign: "center",
    color: "#263238",
    fontSize: 21
  },
  description: error => ({
    textAlign: "center",
    color: error ? "#ea3d13" : "#a5a5a5",
    height: 65,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20
  })
});

export default styles;
